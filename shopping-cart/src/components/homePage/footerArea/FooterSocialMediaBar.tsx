import React from 'react';

import {Image} from "react-bootstrap";
import Facebook from '../../../assets/images/icons/facebook.svg';
import Linkedin from '../../../assets/images/icons/linkedin.svg';
import Rss from '../../../assets/images/icons/rss.svg';
import Twitter from '../../../assets/images/icons/twitter.svg';
import Youtube from '../../../assets/images/icons/youtube.svg';


const FooterSocialMediaBar:React.FC = () =>{
    return(
        <div className ='text-center py-md-2'>
            <Image className='social-icon px-1' src={Facebook} alt={'logo1'}/>
            <Image className='social-icon px-1' src={Linkedin} alt={'logo2'}/>
            <Image className='social-icon px-1' src={Rss} alt={'logo3'}/>
            <Image className='social-icon px-1' src={Twitter} alt={'logo4'}/>
            <Image className='social-icon px-1' src={Youtube} alt={'logo5'}/>
        </div>
    )
}

export default FooterSocialMediaBar;