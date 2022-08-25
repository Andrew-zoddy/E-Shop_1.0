import React, {useEffect, useState} from "react";
import css from './AddEditProduct.module.scss';
import Modal from "../../../Modal/Modal";
import axios from "axios";

const AddEditProduct = ({setFormVisible, getProducts, editMode, product}) => {

    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImgLink] = useState('');

    const [categories,setCategories] = useState(['choose your category']);
    const [category,setCategory] = useState('');


    const getCategories = async () => {
        try{
            // setError('')
            // setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products/categories')
            setCategories(response.data)
            // setLoading(false)
        }
        catch (e) {
            // setLoading(false)
            // setError(e.message)

        }

    }

    const onAddProduct = async () => {
        try{
            // setError('')
            // setLoading(true)
            if(!title || !price || !description || !image || !category) return
            const response = await axios.post(
                'https://fakestoreapi.com/products',
                {title,price,description,image,category})
            // setLoading(false)
            console.log(response.data)
            setFormVisible(false)
            getProducts()
        }
        catch (e) {
            // setLoading(false)
            // setError(e.message)

        }

    }


    useEffect(() =>{
        if(!product) return
        getCategories().then()
    },[product])

    console.log(product)


    return(
<Modal setFormVisible={setFormVisible} modalName={'Add product'}>
    <form onSubmit={(e) => e.preventDefault()} className={css.add_edit_product_wrapper}>
        <label>Title</label>
        <input  className={css.form_control}
                placeholder={'Set title'}
                type="text"
                value={editMode ? title : 'product.title'}
                onChange={(e) => setTitle(e.target.value)}
        />


        <label>Price</label>
        <input className={css.form_control}
               placeholder={'Set price'}
               value={price}
               type="number"
               onChange={(e) => setPrice(e.target.value)}
        />


        <label>Description</label>
        <textarea
            placeholder={'Set description'}
            value={description}
            className={css.form_control}  cols="30" rows="10"
            onChange={(e) =>setDescription(e.target.value)}>

        </textarea>

        <label>Image Link</label>
        <input
            value={image}
            placeholder={'Set image'}
            onChange={(e) =>setImgLink(e.target.value)}
            className={css.form_control} type="text"/>

        <label>Category</label>
        <select className={css.form_control}
                value={category}
                onChange={(e) => setCategory(e.target.value)} >
            {
                categories.map(ctg => <option key={ctg.id}>{ctg}</option>)
            }
        </select>

        <input onClick={() => onAddProduct()} className={css.submit_button} type="submit"/>
    </form>
</Modal>


    )
}

export default AddEditProduct;