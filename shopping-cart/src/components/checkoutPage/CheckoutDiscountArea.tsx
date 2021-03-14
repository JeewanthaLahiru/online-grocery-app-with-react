import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import _ from "lodash/fp";
import {useDispatch} from "react-redux";

type FormData = {
    couponCode: string;
};

const CheckoutDiscountArea: React.FC = () => {
    const dispatch = useDispatch();
    const {handleSubmit, control, errors, setValue} = useForm<FormData>();

    return (
        <Form >
            <Form.Group as={Row} className='mr-md-0'>
                <Form.Label column sm="3" className='pt-md-1 text-left text-md-right offset-md-6 discount-title'>
                    Discount Code
                </Form.Label>
                <Col sm='2' className='px-md-0'>
                    <Controller
                        autoFocus={true}
                        control={control}
                        name={"couponCode"}
                        as={<Form.Control size='sm' type="text" className='discount-submit' />}
                        defaultValue=""
                        rules={{
                            required: true,
                            pattern: /procoders'?|Pro(?:Coder(?:S'?|s)|coders)/i
                        }}
                    />
                    <Form.Label column="sm" className='warning text-center'>
                        {_.get("couponCode.type", errors) === "required" && (
                            <p>This field is empty</p>
                        )}
                        {_.get("couponCode.type", errors) === "pattern" && (
                            <p>Invalid coupon code</p>
                        )}
                    </Form.Label>
                </Col>
                <Col sm='1' xs={3} className={'offset-9 offset-sm-0'}>
                    <Button variant='success' size='sm' className='discount-submit' type='submit'>Apply</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default CheckoutDiscountArea;
