import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../services/api';

export interface Teacher {
        avatar: string;
        bio: string;
        cost: number;
        id: number;
        name: string;
        subject: string;
        whatsapp: string;
}

interface TeacherListCardProps{
    teacher:Teacher;
}

const TeacherListCard: React.FC<TeacherListCardProps> = ({ children,teacher }) => {

    function createNewConnection(){
        api.post('/connections',{
            user_id: teacher.id,
        })
    }


    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt="avatar"/>
            <div>
            <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>
            {teacher.bio}
        </p>

        <footer>
            <p>
                Preço/hora
             <strong>R$ {teacher.cost}</strong>
            </p>
            <a  target='_blank'  rel="noopener noreferrer" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </a>
        </footer>
    </article>
  
    );
}

export default TeacherListCard;