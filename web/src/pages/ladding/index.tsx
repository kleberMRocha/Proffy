import React,{useState,useEffect} from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LaddingImg from '../../assets/images/landing.svg';
import {Link} from 'react-router-dom';
import './style.css';

import Study from '../../assets/images/icons/study.svg';
import GiveClass from '../../assets/images/icons/give-classes.svg';
import Conections from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';


function Landing(){
    const [currentyTotal,setTotal] = useState(0);
    
    useEffect(()=>{
        api.get('/connections')
        .then(total =>{
            const totalConections = total.data.total;
            setTotal(totalConections);
        })

    },[]);

    return(
           <div id="page-ladding">
               <div id="page-ladding-content" className="container">
                   <div className="logo-container">
                        <img src={LogoImg} alt="Logo Proffy"/>
                        <h2>Sua Prlataforma de estudos Online</h2>
                   </div>
                   <img src={LaddingImg} className="hero-img" alt="ladding"/>

                   <div className="button-container">
                       <Link to="/study" className="study">
                          <img src={Study} alt="study"/> Estudar
                        </Link>
                       <Link to="/give-classes" className="giveClasses">
                       <img src={GiveClass} alt="Dar Aulas"/> Dar Aulas
                       </Link>
                   </div>
                   <span className="total-conections">
                           Total de {currentyTotal} conexões 
                           <img src={Conections} alt="coração roxo"/>
                   </span>

               </div>
           </div>
        )
}

export default Landing;