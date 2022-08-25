import React, {useEffect, useState} from "react";
import css from  './Categories.module.scss'
import axios from "axios";
import Category from "./Category/Category";


const Categories = () =>{

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        setCategories(response.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (

        <div>

            <div className={css.categories_wrapper}>
                {
                    categories.map(cat => <Category key={cat.id} category={cat} /> )
                }
            </div>


        </div>

    )
}

export default Categories