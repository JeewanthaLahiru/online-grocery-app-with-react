import React, {useEffect, useState} from "react";
import {Col, Row, Image, Form, FormControl, Button, Container} from "react-bootstrap";
import DefaultImg from "../../../assets/images/default/default.jpg";
import {Controller, useForm} from "react-hook-form";
import {IAddProductForm} from "../../../types/admin/AddProduct";
import Dropzone, { useDropzone, DropzoneProps } from "react-dropzone";
import Select from 'react-select';
import {useParams} from "react-router-dom";
import {products} from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
interface ICategory {
    value: string;
    label: string;
}

interface ParamTypes {
    productid: string;
}

const AddProduct:React.FC = () => {
    const [updateProduct, setUpdateProduct] = useState(true);

    var productToChange: any = [];

    const {productid} = useParams<ParamTypes>();

    const [productToUpdateState, setProductToUpdateState] = useState(
        products.find(({id})=> productid === id.toString())
    );

    const handleOnCheckButton = () => {
        if(productid){
            setUpdateProduct(true);
            productToChange  = products.find(({id})=> productid === id.toString());
            console.log(productToChange.name);
        }else{
            setUpdateProduct(false);
        }
    }

    const { handleSubmit, control, formState:{errors}, reset, setValue, register} = useForm<IAddProductForm>();
    const [productImage, setProductImage] = useState<File[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        setProductImage(
            acceptedFiles.map(
                file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        );
    }
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: "image/*", onDrop: onDrop, multiple: false });

    useEffect(
        () => () => {
            productImage.forEach((file:any) => URL.revokeObjectURL(file.preview));
        },
        [productImage]
    );

    const thumbs = productImage.map((file: any) => (
        <div key={file.name}>
            {/* <div style={thumbInner}> */}
            <img alt={file.name} src={file.preview} />
            {/* </div> */}
        </div>
    ));


    const handleOnSubmit = (data:any) => {
        console.log(data, productImage.map((file:any)=>{
            return (file.preview);
        }));
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
                        <Col
                            xs={12}
                            sm={6}
                            className="add-product-image-col"
                        >

                            <Container
                                {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
                            >
                                <input {...getInputProps()} />
                                {thumbs}
                                {productImage.length == 0 && <Image src={DefaultImg}/>}
                                <Row className="add-product-text align-items-center">
                                    <Col xs={12}>
                                        <h1>Drop image here or click to upload</h1>
                                    </Col>

                                </Row>
                            </Container>

                        </Col>
                        <Col xs={12} sm={6}>
                            <Form onSubmit={handleSubmit(handleOnSubmit)} className="add-product-form">
                                <Row className="mx-0">
                                    <Col xs={12} className="mt-0">
                                        <Form.Label className="float-left m-0">Title</Form.Label>
                                        <Controller
                                            defaultValue={productToUpdateState? productToUpdateState.name : ""}
                                            control={control}
                                            render={({field})=>(
                                                <Form.Control size={"sm"} type="text" {...field}/>
                                            )}
                                            name={"title"}
                                            rules={{
                                                required: true,
                                                minLength: 5
                                            }}
                                        />
                                        {errors.title && errors.title.type === "required" &&
                                            <span className="text-left text-danger  float-left">
                                                *This field is required
                                            </span>}
                                        {errors.title && errors.title.type === "minLength" &&
                                            <span className="text-left text-danger float-left">
                                                * Minimum charactors should be 5
                                            </span>}
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Form.Label className="float-left m-0" >Previous price</Form.Label>
                                        <Controller
                                            defaultValue={productToUpdateState? String(productToUpdateState.price) : ""}
                                            render={({field}) => (
                                                <Form.Control
                                                    size={"sm"}
                                                    type={"number"}
                                                    min={0}
                                                    {...field}/>
                                            )}
                                            name={"previousPrice"}
                                            control= {control}
                                            rules={{
                                                required: true
                                            }}
                                        />
                                        {errors.previousPrice &&
                                        errors.previousPrice.type === "required" &&
                                        <span className="text-danger float-left" >
                                            * This field is required
                                        </span>}
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Form.Label className="float-left m-0" >Price</Form.Label>
                                        <Controller
                                            defaultValue={
                                                productToUpdateState ? String(productToUpdateState.price) : ""
                                            }
                                            render={({field}) => (
                                                <Form.Control
                                                    size={"sm"}
                                                    type={"number"}
                                                    {...field}/>
                                            )}
                                            name={"price"}
                                            control={control}
                                            rules={{
                                                required: true
                                            }}
                                        />
                                        {errors.price &&
                                        errors.price.type === "required" &&
                                        <span className="text-danger float-left" >
                                            * This field is required
                                        </span>}
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Form.Label className="float-left m-0">Category</Form.Label>
                                        <br/>
                                        <Controller
                                            defaultValue={productToUpdateState ? productToUpdateState.category : ""}
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
                                            rules={{
                                                required: true
                                            }}
                                        />
                                        {errors.category &&
                                        errors.category.type === "required" &&
                                        <span className="text-danger float-left" >
                                            * This field is required
                                        </span>}
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
                                            rules={{
                                                required: true,
                                                minLength: 10
                                            }}
                                        />
                                        {errors.previousPrice &&
                                        errors.previousPrice.type === "required" &&
                                        <span className="text-danger float-left" >
                                            * This field is required
                                        </span>}
                                        {errors.previousPrice &&
                                        errors.previousPrice.type === "minLength" &&
                                        <span className="text-danger float-left" >
                                            * minimum characters should be 10
                                        </span>}
                                    </Col>
                                    <Col xs={12} className="mt-2">
                                        <Button type={"submit"}
                                                className="float-left px-4 mr-2"
                                                variant="success"
                                        >
                                            Add
                                        </Button>
                                        <Button className="float-left px-4"
                                                variant="dark"
                                                onClick={handleOnCheckButton}
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