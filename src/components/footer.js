import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
 
    <div className="site-footer">
  
        <h4 className="text-center">
            Made By: Ethan C. Holmes
        </h4>
        <p className="text-center"><b>Phone:</b> 319.541.0968</p>
        <p className="text-center"><b>Email:</b> eholmes.dev@gmail.com</p>
        <div className="social-share-links">
        <ul className="social-links-list">
            
             <li>
             <SocialIcon target="_blank" url="https://www.linkedin.com/in/echolmes/" />
             </li>
            
            <li>
            <SocialIcon target="_blank" url="https://github.com/eholmes-dev" bgColor="#000000"/>  
            </li>
            
            <li>
            <SocialIcon target="_blank" url="https://www.facebook.com/eholmes.dev" /> 
            </li>
            
            <li>
            <SocialIcon target="_blank" url="https://www.instagram.com/ethanholmes7/"/>
            </li>
        </ul>
        </div>
    </div>
)

export default Footer