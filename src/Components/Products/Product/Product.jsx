import React, {useState} from "react";
import css from './Product.module.scss';
import AddEditProduct from "./AddEditProduct/AddEditProduct";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../../Redux/productsReducer";



const Product = ({product}) => {


    const dispatch = useDispatch();

    const [formVisible, setFormVisible] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [viewDescription, setViewDescription] = useState(false)


    const onEditProduct = () => {
        setFormVisible(true)
        setEditMode(true)

    }

    const onDeleteProduct =  () => {
        dispatch(deleteProduct(product.id))
        setFormVisible(false) // extra modal to be created
    }

    return (

        <div className={css.product_wrapper}>
            <p className={css.product_title}>{product.title}</p>
            <img className={css.product_image} src={product.image} alt=""/>
            <p className={css.product_price}>Price: <b>{product.price}</b></p>
                <div>
                    <button
                        className={css.info_btn}
                        style={viewDescription ? {background: 'mistyrose'} : {background: 'lightblue'}}
                        onClick={() => setViewDescription(prev => !prev)}>
                        {
                            viewDescription ? 'Close Info' : 'View Info'
                        }

                    </button>

                    {
                        viewDescription && <p className={css.product_description}>{product.description}</p>
                    }
                    <button onClick={onEditProduct} className={css.edit_product_button}>edit product</button>
                    <button
                        onClick={onDeleteProduct}
                        className={css.delete_product_btn}>delete product
                    </button>
                </div>



                <AddEditProduct
                    editMode={editMode}
                    setFormVisible={setFormVisible}
                    product={product}
                    formVisible={formVisible}

                />

        </div>
    )
}

export default Product;