import axios from "axios";

//Products endpoints
export const productsAPI = {
    //products
    getProducts()  {
        return axios.get('https://fakestoreapi.com/products')
            .then(response => response)
    },
    getSpecProducts(cat)  {
        return axios.get(`https://fakestoreapi.com/products/category/${cat}`)
            .then(response => response)
    },
    getCategories() {
        return axios.get('https://fakestoreapi.com/products/categories', )
            .then(response => response)
    },
    addProduct(productParams) {
        return axios.post('https://fakestoreapi.com/products', {...productParams})
            .then(response => response)
    },
    editProduct(productParams,id) {
        return axios.put(`https://fakestoreapi.com/products/${id}`, {...productParams})
            .then(response => response)
    },
    deleteProduct(id) {
        return axios.delete(`https://fakestoreapi.com/products/${id}`, )
            .then(response => response)
    },



};

