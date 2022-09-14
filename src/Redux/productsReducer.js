import {productsAPI} from "../api/productsEndpoints";
import {setError, setSuccess} from "./appReducer";



//Types
const SET_PRODUCTS_DATA = 'PRODUCTS/SET_PRODUCTS_DATA'
const SET_CATEGORIES ='PRODUCTS/SET_CATEGORIES'


//Initial state for reducer
const initialState = {
    products: [],
    categories: [],
};

//Reducer (products)
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_DATA:
            return {...state, products: action.payload};
        case SET_CATEGORIES:
            return {...state, categories: action.payload}

        default:
            return state
    }
};


//Action creator (thunk)
//Get products
export const getProducts = () => async (dispatch) => {
    try {
        dispatch(setError(''))
        const response = await productsAPI.getProducts();
        if (response.status === 200) {
            dispatch(setProducts(response.data))
        }
    } catch (error) {
       dispatch(setError(error))


    }
};

// Action to set products
export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS_DATA,
        payload: products
    }
}

//get specific products
export const getSpecificProducts = (cat) => async (dispatch) => {
    try {
        dispatch(setError(''))
        const response = await productsAPI.getSpecProducts(cat);
        if (response.status === 200) {
            dispatch(setSpecificProducts(response.data))
        }
    } catch (error) {
        dispatch(setError(error))


    }
};

// Action to set specific products
export const setSpecificProducts = (cat) => {
    return {
        type: SET_PRODUCTS_DATA,
        payload: cat
    }
}

//add product

export const addProducts = (productParams) => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        const response = await productsAPI.addProduct(productParams);
        if (response.status === 200) {
            dispatch(setSuccess(`Very very successfully successed ${response.data.title}`))
            dispatch(getProducts())

        }
    } catch (error) {
        dispatch(setError(error))

    }
};

//edit product

export const editProduct = (productParams,id) => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        const response = await productsAPI.editProduct(productParams,id);
        if (response.status === 200) {
            dispatch(setSuccess(`Very  successfully edited ${response.data.title} =).`))
            dispatch(getProducts())

        }
    } catch (error) {
        dispatch(setError(error))

    }
};

// delete product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setSuccess(''))
        const response = await productsAPI.deleteProduct(id);
        if (response.status === 200) {
            dispatch(setSuccess(`Very successfully deleted ${response.data.title} =) !`))
            dispatch(getProducts())

        }
    } catch (error) {
        dispatch(setError(error))

    }
};

//get Categories

export const getCategories = () => async (dispatch) => {
    try {
        dispatch(setError(''))
        const response = await productsAPI.getCategories();
        if (response.status === 200) {
            dispatch(setCategories(response.data))
        }
    } catch (error) {
        dispatch(setError(error))

    }
};

// Action
export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}