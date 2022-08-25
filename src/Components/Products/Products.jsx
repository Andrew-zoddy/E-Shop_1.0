import React, {useEffect, useState} from "react";
import css from './Products.module.scss';
import Product from "./Product/Product";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import AddEditProduct from "./Product/AddEditProduct/AddEditProduct";


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [formVisible,setFormVisible ] = useState(false)

    const getProducts = async () => {
        try{
            setError('')
            setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products/')
            setProducts(response.data)
            setLoading(false)
        }
        catch (e) {
            setLoading(false)
            setError(e.message)

        }

    }

    useEffect(() => {

        getProducts().then()

    }, [])

        if(error) return <Preloader text={error}/>

    return (
        <div>

            <div className={css.products_wrapper}>
                {loading &&  <Preloader text={'Loading...'} />}

                <div>
                    <button onClick={() => setFormVisible(true)}>Add new product</button>
                </div>

                {
                    products.map(pr => <Product
                                                key={pr.id}
                                                product={pr}
                                                getProducts={getProducts}
                                                setFormVisible={setFormVisible}
                                                formVisible={formVisible}

                    /> )
                }

                {formVisible &&
                                <AddEditProduct
                                                setFormVisible={setFormVisible}
                                                getProducts={getProducts}

                                />}


            </div>
        </div>

    )
}

export default Products;