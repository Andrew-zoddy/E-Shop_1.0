import React, {useState} from "react";
import css from './Product.module.scss';



const Product = ({product}) => {
    const [viewDescription, setViewDescription] = useState(false)

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
        </div>

    )
}

export default Product;