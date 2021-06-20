import React, {useState} from "react";
import {Col, Row, Image, Form, FormControl, Button} from "react-bootstrap";
import DefaultImg from "../../../assets/images/default/default.jpg";
import {Controller, useForm} from "react-hook-form";
import {IAddProductForm} from "../../../types/admin/AddProduct";
import Select from 'react-select';

interface ICategory {
    value: string;
    label: string;
}

const AddProduct:React.FC = () => {

    const { handleSubmit, control, formState:{errors}, reset, setValue} = useForm<IAddProductForm>();

    const handleOnSubmit = (data:any) => {
        console.log(data);
    }

    const categoryOptions: ICategory[] = [
        {value:"Grocery", label:"Grocery"},
        {value:"Pharmacy", label:"Pharmacy"},
        {value:"Electronic", label:"Electronic"},
        {value:"Food", label:"Food"},
    ]

    return(
        <React.Fragment>
            <Row className="mx-0 justify-content-center add-product">
                <Col xs={12} xl={8}>
                    <Row className="mx-0 mx-0 add-product-title-row">
                        <Col xs={12}>
                            <h6 className="text-left" >
                                <i className="feather icon-chevron-left"/>
                                back to products
                            </h6>
                            <h3 className="text-left my-4" >
                                Add new Product
                            </h3>
                        </Col>
                    </Row>
                    <Row className="mx-0 add-product-body-row">
                        <Col xs={12} sm={6}>
                            <Image src={DefaultImg}/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form onSubmit={handleSubmit(handleOnSubmit)} className="add-product-form">
                                <Row className="mx-0">
                                    <Col xs={12} className="mt-0">
                                        <Form.Label className="float-left m-0">Title</Form.Label>
                                        <Controller
                                            defaultValue={""}
                                            control={control}
                                            render={({field})=>(
                                                <Form.Control size={"sm"} type="text" {...field}/>
                                            )}
                                            name={"title"}
                                        />
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Form.Label className="float-left m-0" >Previous price</Form.Label>
                                        <Controller
                                            defaultValue={""}
                                            render={({field}) => (
                                                <Form.Control size={"sm"} {...field}/>
                                            )}
                                            name={"previousPrice"}
                                            control={control}
                                        />
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Form.Label className="float-left m-0" >Price</Form.Label>
                                        <Controller
                                            defaultValue={""}
                                            render={({field}) => (
                                                <Form.Control size={"sm"} {...field}/>
                                            )}
                                            name={"price"}
                                            control={control}
                                        />
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Form.Label className="float-left m-0">Category</Form.Label>
                                        <br/>
                                        <Controller
                                            defaultValue={""}
                                            control={control}
                                            render={({field:{onChange, value, name, ref}}) => (

                                                <Select
                                                    inputRef={ref}
                                                    value={categoryOptions.find(c => c.value === value)}
                                                    options={categoryOptions}
                                                    onChange={(selected:any)=>{
                                                        onChange(selected.value)
                                                    }}
                                                    size={"sm"}
                                                />
                                            )}
                                            name={"category"}
                                        />
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Form.Label className="float-left m-0" >Description</Form.Label>
                                        <Controller
                                            control={control}
                                            defaultValue={''}
                                            render={({field}) => (
                                                <Form.Control as="textarea" rows={5} size={"sm"} {...field} />
                                            )}
                                            name={"description"}
                                        />
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Button type={"submit"}
                                                className="float-left px-4 mr-2"
                                                variant="success"
                                        >
                                            Add
                                        </Button>
                                        <Button type={"submit"}
                                                className="float-left px-4"
                                                variant="dark"
                                        >
                                            Cancel
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AddProduct;