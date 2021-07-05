import React, {useEffect, useState} from "react";
import {Col, Row, Image, Form, FormControl, Button, Container} from "react-bootstrap";
import DefaultImg from "../../../assets/images/default/default.jpg";
import {Controller, useForm} from "react-hook-form";
import {IAddProductForm} from "../../../types/admin/AddProduct";
import Dropzone, { useDropzone, DropzoneProps } from "react-dropzone";
import Select from 'react-select';
import {useParams} from "react-router-dom";
import {products} from "../../../repository/Products";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import {ApolloClient, gql, InMemoryCache, useMutation, useQuery} from '@apollo/client';
import {CREATE_PRODUCT_MUTATION, UPDATE_PRODUCT_MUTATION} from "../../../graphql/mutations/Product";
import ConfirmationMessage from "../../homePage/SupportiveComponents/ConfirmationMessage";
import {useDispatch} from "react-redux";
import {loading_end, loading_start} from "../../../store/actions/LoadingActions";
import {GET_ONE_PRODUCT, GET_PRODUCTS} from "../../../graphql/queries/Product";
import {GENERAGE_GET_URL} from "../../../assets/variables/APIKeys";
import {IProduct} from "../../../types/Products";
import LoadingScreen from "../../homePage/LoadingScreen";
interface ICategory {
    value: string;
    label: string;
}

interface ParamTypes {
    productid: string;
}


const AddProduct:React.FC = () => {
    const dispatch = useDispatch();

    const [updateProduct, setUpdateProduct] = useState(true);
    //const [imageUrl, setImageUrl] = useState("");
    const [productAdded, setProductAdded] = useState(false);
    const handleOnMessageHide = () => {
        setProductAdded(false);
    }

    const history = useHistory();


    const [createProduct] = useMutation(CREATE_PRODUCT_MUTATION);
    const [updateProductMutation] = useMutation(UPDATE_PRODUCT_MUTATION);

    var productToChange: any = [];

    const {productid} = useParams<ParamTypes>();

    const [isToUpdate, setIsToUpdate] = useState<boolean>(!!productid);
    const {loading, error, data, refetch} = useQuery(GET_ONE_PRODUCT, {
        variables: {input: {
            id: productid
            }}
    });



    //const updateData:any = data.getOneProduct;
    const [productToUpdateState, setProductToUpdateState] = useState<any>();
    const [imageName, setImageName] = useState<any>(DefaultImg);
    const [imageUrl , setImageUrl] = useState<any>();
    /*useEffect(()=> {
        setImageName(imageUrl);
    },[imageUrl])*/

    const handleOnCheckButton = () => {
        if(productid){
            setUpdateProduct(true);
            productToChange  = products.find(({id})=> productid === id.toString());

        }else{
            setUpdateProduct(false);
        }
        history.push("/admin/product");
    }

    const { handleSubmit, control, formState:{errors}, reset, setValue, register} = useForm<IAddProductForm>();
    const [prdName, setPrdName] = useState();
    let newProductFromServer: IProduct | null = null;
    const [productImage, setProductImage] = useState<File[]>([]);

    if (loading) {
        dispatch(loading_start(true));
        return <React.Fragment>loading</React.Fragment>
    };
    if (error) return <React.Fragment>`Error! ${error.message}`</React.Fragment>;
    newProductFromServer = data.getOneProduct;
    dispatch(loading_start(false));
    console.log(newProductFromServer);
    /*if(loading){
        dispatch(loading_start(true));
        console.log("now loading");
    }else{
        dispatch(loading_start(false));
        console.log("loading stop");
        newProductFromServer = data.getOneProduct;
        console.log(newProductFromServer);
        console.log(isToUpdate);
        console.log(newProductFromServer?.name);
    }*/
    //dispatch(loading_start(false));

    /*if(productid !== undefined){
        if(loading){
            dispatch(loading_start(true));
        }else{
            dispatch(loading_end(false));
            if(productid !== undefined){
                setPrdName(data.getOneProduct.name);
                /!*setValue("title", data? data.getOneProduct.name: "");
                setValue("price", data.getOneProduct.price);
                setValue("previousPrice", data.getOneProduct.previousPrice);
                setValue("category", data.getOneProduct.category);
                setValue("description", data.getOneProduct.description);*!/

                const generateGetUrl = GENERAGE_GET_URL;

                const getOptions = {
                    params: {
                        Key: data.getOneProduct.image,
                        ContentType: data.getOneProduct.image.split(/[.]/)[1]
                    }
                };

                axios
                    .get(generateGetUrl, getOptions)
                    .then(res => {
                        setImageUrl(res.data);
                    })
                    .catch(err => {
                        console.log("error in generateGet Url : \n"+ err);
                    })

            }

        }
    }*/


    const onDrop = (acceptedFiles: File[]) => {
        setProductImage(
            acceptedFiles.map(
                file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        );
    }
    /*const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: "image/!*", onDrop: onDrop, multiple: false });*/

    /*useEffect(
        () => () => {
            productImage.forEach((file:any) => URL.revokeObjectURL(file.preview));
        },
        [productImage]
    );*/

    const thumbs = productImage.map((file: any) => (
        <div key={file.name}>
            {/* <div style={thumbInner}> */}
            <img alt={file.name} src={file.preview} />
            {/* </div> */}
        </div>
    ));


    const handleOnSubmit = async (formData:any) => {
        if(productid === undefined){
            dispatch(loading_start(true));
            const file = productImage;
            const key = productImage[0].name;
            const contentType = productImage[0].type;
            const generatePutUrl = 'http://ec2-54-174-33-34.compute-1.amazonaws.com:4000/generate-put-url';
            const generateGetUrl = 'http://ec2-54-174-33-34.compute-1.amazonaws.com:4000/generate-get-url';
            const options = {
                params: {
                    Key: key,
                    ContentType: contentType
                },
                headers: {
                    'Content-Type':contentType
                }
            };

            const getOptions = {
                params: {
                    Key: key,
                    ContentType: contentType
                }
            };

            await axios.get(generatePutUrl, options).then(res => {
                const putURL = res.data;
                axios
                    .put(putURL, file[0], options)
                    .then(res => {
                        setImageUrl(productImage[0].name);
                        handleOnGrapqlImageAdding(formData, key);
                    })
                    .catch(err => {
                        console.log("error in putting file : \n"+ err);
                    })
            }).catch(err => {
                console.log("erron in generate put url : \n" + err);
            })
        }else{
            updateProductMutation({variables:{
                    input:{
                        id: productid,
                        name: formData.title,
                        category: formData.category,
                        price: formData.price,
                        image: data.getOneProduct.image,
                        previousPrice: formData.previousPrice,
                        description: formData.description
                    }
                }}).then(()=>{
                console.log("product updating success");
                window.location.reload();
                setProductAdded(true);
                dispatch(loading_end(false));
            }).catch((err) => {
                console.log("Product update error: \n" + err);
            })
        }


    }
    const handleOnGrapqlImageAdding = (data:any, key: string) => {
        if(productid !== undefined){
            updateProductMutation({variables:{
                input:{
                    id: productToUpdateState.id,
                    name: productToUpdateState.name,
                    category: productToUpdateState.category,
                    price: productToUpdateState.price,
                    previousPrice: productToUpdateState.previousPrice,
                    description: productToUpdateState.description
                }
                }}).then(()=>{
                    console.log("product updating success");
                    window.location.reload();
                    setProductAdded(true);
                    dispatch(loading_end(false));
            }).catch((err) => {
                console.log("Product update error: \n" + err);
            })
        }else{
            createProduct({variables:{
                    input:{
                        name: data.title,
                        category: data.category,
                        price: data.price,
                        previousPrice: data.previousPrice,
                        image: key,
                        description: data.description
                    }
                }}).then(() => {
                    window.location.reload();
                    setProductAdded(true);
                    dispatch(loading_end(false));
                console.log("product adding is success");
            }).catch(err => {
                console.log("product adding error" + err);
            });
        }


    }

    const categoryOptions: ICategory[] = [
        {value:"Grocery", label:"Grocery"},
        {value:"Pharmacy", label:"Pharmacy"},
        {value:"Electronic", label:"Electronic"},
        {value:"Food", label:"Food"},
    ]

    return(
        <React.Fragment>
            <ConfirmationMessage
                message={"Product was added successfully"}
                showAfterDeleteConfirmed={productAdded}
                setShowAfterDeleteConfirmed={handleOnMessageHide}
            />
            <Row className="mx-0 justify-content-center add-product">
                <Col xs={12} xl={8}>
                    <Row className="mx-0 mx-0 add-product-title-row">
                        <Col xs={12}>
                            <h6 className="text-left" >
                                <i className="feather icon-chevron-left"/>
                                back to products
                            </h6>
                            <h3 className="text-left my-4" >
                                {productToUpdateState ? "Update product" : "Add new Product"}
                            </h3>
                        </Col>
                    </Row>
                    <Row className="mx-0 add-product-body-row">
                        <Col
                            xs={12}
                            sm={6}
                            className="add-product-image-col"
                        >

                            {/*<Container
                                {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
                            >
                                <input {...getInputProps()} />
                                {thumbs}
                                {productImage.length == 0 && <Image src={
                                    imageUrl}/>}
                                <Image src={imageName}/>
                                <Row className="add-product-text align-items-center">
                                    <Col xs={12}>
                                        <h1>Drop image here or click to upload</h1>
                                    </Col>

                                </Row>
                            </Container>*/}

                        </Col>
                        <Col xs={12} sm={6}>
                            <Form onSubmit={handleSubmit(handleOnSubmit)} className="add-product-form">
                                <Row className="mx-0">
                                    <Col xs={12} className="mt-0">
                                        <Form.Label className="float-left m-0">Title</Form.Label>
                                        <Controller
                                            defaultValue={isToUpdate? newProductFromServer?.name: ""}
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
                                            defaultValue={
                                                 ""}
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
                                                 ""
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
                                            defaultValue={ ""}
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
                                            defaultValue={
                                                ""
                                            }
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
                                        {productid!== undefined &&
                                            <Button type={"submit"}
                                                    className="float-left px-4 mr-2"
                                                    variant="warning"
                                            >
                                                Update
                                            </Button>
                                        }
                                        {productid=== undefined &&
                                            <Button type={"submit"}
                                                    className="float-left px-4 mr-2"
                                                    variant="success"
                                            >
                                                Add
                                            </Button>
                                        }
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