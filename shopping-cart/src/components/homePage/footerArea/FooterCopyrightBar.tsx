import React from "react";
import {FormLabel} from "react-bootstrap";

const FooterCopyrightBar:React.FC = () => {
    return(
        <div className='text-center pt-md-3'>
            <FormLabel className='footer-label-color'>Copyright {'\u00A9'} 2020. All Rights Reserved.</FormLabel>
            <FormLabel className='footer-label2-color'> Powered by SoftVessel</FormLabel>
        </div>
    )
}

export default FooterCopyrightBar;