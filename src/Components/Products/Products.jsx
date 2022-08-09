import React, {useEffect, useState} from "react";
import css from './Products.module.scss';
import Product from "./Product/Product";
import axios from "axios";
import Categories from "./CategoryNav/Categories";


const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)

    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Categories />
            <div className={css.products_wrapper}>

                {
                    products.map(pr => <Product key={pr.id} product={pr} /> )
                }

            </div>
        </div>

    )
}

export default Products;