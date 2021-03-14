import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {decrementProductQty, deleteProductFromCart, incrementProductQty} from "../../store/actions/CartProductActions";
import {ICartProduct} from "../../types/CartProducts";
import {Col, Row, Image, Button} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import EmptyImg from '../../assets/images/ui/emptycheckout.png';
import {HashLink} from "react-router-hash-link";
import CheckoutBillingArea from "./CheckoutBillingArea";
import CheckoutDiscountArea from "./CheckoutDiscountArea";

const CheckoutProductList:React.FC = () => {

    const cartProducts = useSelector((state: AppState) => state.cartProduct.cartProducts);
    const dispatch = useDispatch();

    const handleOnDelete = (cartProductId: number) => {
        dispatch(deleteProductFromCart(cartProductId))
    }
    const handleOnIncrement = (cartProductId: number) => {
        dispatch(incrementProductQty(cartProductId))
    }
    const handleOnDecrement = (cartProductId: number) => {
        dispatch(decrementProductQty(cartProductId))
    }

    const customTotal = (from:number, to:number, size:number) => (
        <span className="react-bootstrap-table-pagination-total per-page pl-2 pl-md-3">
            Showing { from } to { to } of { size } Results
        </span>
    );
    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: 1000
        }]
    };

    const columns = [
        {
            dataField: "id",
            text: "#",
            sort: true
        },
        {
            dataField: "item",
            text: "Item",
            headerAlign: 'center',
            align: 'center'

        },
        {
            dataField: "name",
            text: "Name",
            headerAlign: 'center',
            align: 'center',
            sort: true,
        },
        {
            dataField: "qty",
            text: "Qty",
            headerAlign: 'center',
            align: 'center'
        },
        {
            dataField: "unitPrice",
            text: "Unit Price",
            headerAlign: 'right',
            align: 'right'
        },
        {
            dataField: "amount",
            text: "Amount",
            headerAlign: 'right',
            align: 'right'
        },
        {
            dataField: "removeBtn",
            text: "",
        },

    ];

    const cartProductGenerator = (cartProducts: ICartProduct[]): any[] => {
        const checkoutList: any[] = [];
        cartProducts.forEach((cartProduct:ICartProduct, i:number)=>{
            checkoutList.push({
                id:i+1,
                item:
                    <Row>
                        <Col className='text-center px-0 px-sm-3'>
                            <Image src={cartProduct.product.image} className='product-img'/>
                        </Col>
                    </Row>
                ,
                name: cartProduct.product.name,
                qty:
                    <React.Fragment>
                        <label className={'pt-1 pt-sm-2'}>
                            <i className="feather icon-minus-circle" onClick={()=>{
                                handleOnDecrement(cartProduct.id)
                            }
                            } />
                        </label>
                        <label className={'px-0 px-md-3'}>{cartProduct.qty}</label>
                        <label>
                            <i className="feather icon-plus-circle" onClick={()=>{
                                handleOnIncrement(cartProduct.id)
                            }} />
                        </label>
                    </React.Fragment>
                ,
                unitPrice:
                    <label className={'pt-1 pt-sm-2'}>
                        Rs. {cartProduct.product.price}.00
                    </label>,
                amount:
                    <label className={'pt-1 pt-sm-2'}>
                        Rs. {cartProduct.product.price * cartProduct.qty}.00
                    </label>,
                removeBtn:
                    <label className={'pt-1 pt-sm-2'}>
                        <i className="feather icon-trash" onClick={()=>{
                            handleOnDelete(cartProduct.id)
                        }} />
                    </label>
            })
        })
        return checkoutList
    }

    const renderCheckoutProductList = () => {
        if (cartProducts.length === 0) {
            return (
                <React.Fragment>
                    <Row>
                        <Col className='text-center'>
                            <Image src={EmptyImg} fluid={true}/>
                        </Col>
                    </Row>

                    <Row className='justify-content-center mb-4'>
                        <Col className='text-center'>
                            <Button as={HashLink} to={'/#items'} variant='outline-success'>Let's Shopping</Button>
                        </Col>
                    </Row>
                </React.Fragment>
            )
        } else {

            return (
                <React.Fragment>
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={cartProductGenerator(cartProducts)}
                        columns={columns}
                        bordered={false}
                        wrapperClasses="table-responsive"
                        rowClasses="text-nowrap"
                        pagination={paginationFactory(options)}
                    />
                    <CheckoutDiscountArea/>
                    <CheckoutBillingArea/>
                </React.Fragment>
            )
        }

    }

    return(
        <React.Fragment>
            {renderCheckoutProductList()}
        </React.Fragment>
    )
}

export default CheckoutProductList;