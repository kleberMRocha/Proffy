import React from 'react';
import { Link } from 'react-router-dom';

import BackIcon from '../../assets/images/icons/back.svg';
import Logo from '../../assets/images/logo.svg';

import './style.css';

interface PageHeadersProps{
    title:string;
    description?:string;
}

const PageHeaders:React.FC<PageHeadersProps> = ({children, title,description}) =>{
    return(

        <header className="page-header">
                <div className="top-bar-container">
                        <Link to="/">
                            <img src={BackIcon} alt="Voltar"/>
                        </Link>
                            <img src={Logo} alt="Logo Proffy" />
                </div>
                <div className="header-content">
                    <strong>
                       {title}
                    </strong>
                  
                         {description && <p className="description">{description}</p>}
                   
                    {children}
                </div>
            </header>

    );
};


export default PageHeaders;