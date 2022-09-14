import React, {useEffect, useState} from "react";
import css from './Products.module.scss';
import Product from "./Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getProducts, getSpecificProducts} from "../../Redux/productsReducer";
import AddEditProduct from "./Product/AddEditProduct/AddEditProduct";



const Products = () => {

    const dispatch = useDispatch();


    const [formVisible, setFormVisible] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const products = useSelector(state => state.products.products)
    const categories = useSelector(state => state.products.categories)

    const onAddProduct = () => {
        setFormVisible(true)
        setEditMode(false)

    }

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const onCategoryChange = (cat) => {
        cat === 'All Products'
            ?
            dispatch(getProducts())
            :
            dispatch(getSpecificProducts(cat))
    }


    return (
        <div>

            <div className={css.products_wrapper}>


                <nav className={css.menu_bar}>

                    <button className={css.onAddProduct_btn} onClick={() => onAddProduct()}>Add new product</button>


                    <label htmlFor="">Choose category</label>
                    <select onChange={e => onCategoryChange(e.target.value)}  name="" id="">
                        <option>All Products</option>
                        {
                            categories.map(cat => <option key={cat}>{cat}</option>)
                        }

                    </select>

                </nav>

                <section className={css.products_block}>
                    {products &&
                        products.map(pr => <Product
                            key={pr.id}
                            product={pr}


                        />)
                    }
                </section>

                   <AddEditProduct setFormVisible={setFormVisible}
                                   formVisible={formVisible}
                                   editMode={editMode}
                   />

            </div>
        </div>

    )
}

export default Products;