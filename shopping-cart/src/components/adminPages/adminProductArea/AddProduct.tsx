import React, {useState} from "react";
import {Col, Row, Image, Form, FormControl, Button} from "react-bootstrap";
import DefaultImg from "../../../assets/images/default/default.jpg";
import {Controller, useForm} from "react-hook-form";
import {IAddProductForm} from "../../../types/admin/AddProduct";
import Select from 'react-select';

const AddProduct:React.FC = () => {

    const { handleSubmit, control, formState:{errors}, reset, setValue} = useForm<IAddProductForm>();

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOnSubmit = (data:IAddProductForm) => {
        console.log(data);
    }

    const categoryOptions = [
        {value:"Grocery", label:"Grocery"},
        {value:"Pharmacy", label:"Pharmacy"},
        {value:"Electronic", label:"Electronic"},
        {value:"Food", label:"Food"},
    ]

    return(
        <React.Fragment>
            <Row className="mx-0 justify-content-center add-product">
                <Col xs={12} md={10} xl={8}>
                    <Row className="mx-0 mx-0 add-product-title-row">
                        <Col xs={12}>
                            <h6 className="text-left" >
                                <i className="feather icon-chevron-left"/>
                                back to products
                            </h6>
                            <h3 className="text-left" >
                                Add new Product
                            </h3>
                        </Col>
                    </Row>
                    <Row className="mx-0 add-product-body-row">
                        <Col xs={6}>
                            <Image src={DefaultImg}/>
                        </Col>
                        <Col xs={6}>
                            <Form onSubmit={handleSubmit(handleOnSubmit)} className="add-product-form">
                                <Row className="mx-0">
                                    <Col xs={12}>
                                        <Form.Label className="float-left m-0">Title</Form.Label>
                                        <Controller
                                            control={control}
                                            render={({field})=>(
                                                <Form.Control size={"sm"} type="text" {...field}/>
                                            )}
                                            name={"title"}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Label className="float-left" >Previous price</Form.Label>
                                        <Controller
                                            render={({field}) => (
                                                <Form.Control size={"sm"} {...field}/>
                                            )}
                                            name={"previousPrice"}
                                            control={control}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Label className="float-left" >Price</Form.Label>
                                        <Controller
                                            render={({field}) => (
                                                <Form.Control size={"sm"} {...field}/>
                                            )}
                                            name={"price"}
                                            control={control}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Label className="float-left">Category</Form.Label>
                                        <br/>
                                        <Controller
                                            control={control}
                                            render={() => (
                                                <Select
                                                    options={categoryOptions}
                                                    size={"sm"}
                                                />
                                            )}
                                            name={"category"}
                                        />
                                    </Col>
                                </Row>
                                <Button type={"submit"}>submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AddProduct;