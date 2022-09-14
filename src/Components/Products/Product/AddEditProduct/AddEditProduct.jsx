import {Button, Col, Form, Input, Modal, Row, Select} from 'antd';
import TextArea from "antd/es/input/TextArea";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addProducts, editProduct, getCategories} from "../../../../Redux/productsReducer";


const AddEditProduct = ({setFormVisible, formVisible, product, editMode}) => {
    const {Option} = Select
    const dispatch = useDispatch();
    const categories = useSelector(state => state.products.categories)
    const [form] = Form.useForm()


    // for getting categories
    useEffect(() => {
        if (!formVisible) return
        dispatch(getCategories())
    }, [dispatch, formVisible])

    //set values into form
    useEffect(() => {
        if (!product) return
        if (editMode) {
            form.setFieldsValue({
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                category: product.category,
            })
        }

    }, [product, editMode, form])

    const onAddEditProduct = (values) => {
        editMode ? dispatch(editProduct(values, product.id)) :
            dispatch(addProducts(values))
        setFormVisible(false)
    }

    return (
        <Modal

            title={!editMode ? "Add Product" : "Edit Product"}
            open={formVisible}
            onCancel={() => setFormVisible(false)}
            footer={null}
            destroyOnClose={true}
        >
            <Form
                form={form}
                name="basic"
                // labelCol={{
                //     span: 8,
                // }}
                // wrapperCol={{
                //     span: 16,
                // }}
                initialValues={
                    {}

                }
                onFinish={onAddEditProduct}
                // onFinishFailed={onFinishFailed}
                // autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product title!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product price!',
                        },
                    ]}
                >
                    <Input type={'number'}/>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product description!',
                        },
                    ]}
                >
                    <TextArea showCount maxLength={300} onChange={null}/>
                </Form.Item>

                <Form.Item
                    label="Image"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product image!',
                        },
                    ]}
                >
                    <Input type={'text'}/>
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: 'Please select product category!',
                        },
                    ]}
                >
                    <Select
                        // style={{
                        //     width: '30%',
                        // }}
                    >
                        {categories.map((cat) => <Option key={cat}>{cat}</Option>)}


                    </Select>
                </Form.Item>


                <Row style={{justifyContent: 'flex-end'}}>
                    <Col>
                        <Button type="primary" htmlType="submit"
                                style={!editMode ? {marginRight: '10px'} : {marginRight: '10px', background: "green"}}>
                            {!editMode ? "Add Product" : "Edit Product"}
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => setFormVisible(false)}
                            type="default"
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Modal>
    )

}

export default AddEditProduct;