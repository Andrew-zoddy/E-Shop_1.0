import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../Redux/productsReducer";
import {Table} from "antd";

const AntTable = () => {
    const dispatch= useDispatch();
    const products = useSelector((state) => state.products.products)

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'title',
            key: 'title',
            sorter: (a,b) => a.title.length - b.title.length,
            width: '20rem'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text) => <div>{text}$</div>,
            width : '100px',
            sorter: (a,b) => a.title.length - b.title.length,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            sorter: (a,b) => a.title.length - b.title.length,
        },
        {
            title: 'Link',
            dataIndex: 'image',
            key: 'image',
        },

    ];




    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])



    return (
        <div>
            <Table
                dataSource={products}
                columns={columns}

            />


        </div>
    );
};

export default AntTable;