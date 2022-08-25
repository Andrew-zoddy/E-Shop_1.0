import React, {useState} from "react";
import css from './Product.module.scss';
import axios from "axios";
import AddEditProduct from "./AddEditProduct/AddEditProduct";


const Product = ({product,getProducts,setFormVisible,formVisible}) => {

    const [viewDescription, setViewDescription] = useState(false)
    const [editMode,setEditMode] = useState(false)

    const onEditProduct = () => {
        setEditMode(true)
        setFormVisible(true)

    }

    const onDeleteProduct = async () => {
        try{
              const response =  await axios.delete(`https://fakestoreapi.com/products/${product.id}`);
            // setLoading(false)
            console.log(response.data)
            alert(response.data.title)
            getProducts()

        }

        catch (e) {
            // setLoading(false)
            // setError(e.message)

        }
    }

    return (

        <div className={css.product_wrapper}>
            <p className={css.product_title}>{product.title}</p>
            <img className={css.product_image} src={product.image} alt=""/>
            <p className={css.product_price}>Price: <b>{product.price}</b></p>

            <button className={css.info_btn} style={ viewDescription ? {background: 'mistyrose'} : {background: 'lightblue'} } onClick={() => setViewDescription(prev => !prev)}>
                {
                    viewDescription  ? 'Close Info' : 'View Info'
                }

            </button>

            {
                viewDescription && <p className={css.product_description}>{product.description}</p>
            }
            <button onClick={() => onEditProduct()} className={css.edit_product_button}>edit product</button>
            <button
                onClick={() => onDeleteProduct()}
                className={css.delete_product_btn}>delete product</button>

            {formVisible && editMode &&
                <AddEditProduct
                    editMode={editMode}
                    setFormVisible={setFormVisible}
                    product={product}


            />}

        </div>

    )
}

export default Product;