import React from "react";
import {Modal} from "react-bootstrap";

type ConfirmationMessageProps = {
    message: string
    showAfterDeleteConfirmed: boolean
    setShowAfterDeleteConfirmed: (setValue: boolean) => void
}


const ConfirmationMessage:React.FC<ConfirmationMessageProps> = (props) => {

    const setOnHideMessage = () => {
        props.setShowAfterDeleteConfirmed(false);
    }

    return(
        <React.Fragment>
            <Modal
                show={props.showAfterDeleteConfirmed}
                onHide={setOnHideMessage}
                centered={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-success" >
                        <i className="feather icon-check-square" /> Deleted successfully;
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </React.Fragment>
    )
}

export default ConfirmationMessage;