import React, { useState, FormEvent } from 'react';

import PageHeaders from '../../components/PageHeaders';
import TeacherListCard,{Teacher} from '../../components/TeacherListCard';
import Input from '../../components/input';
import Select from '../../components/select';
import searchImg from '../../assets/images/icons/search.svg';
import api from '../../services/api';
import './style.css';



function TeacherList() {
    
    const [subject,setSubject] = useState('');
    const [weekDay,setWeekDay] = useState('');
    const [time,setTime] = useState('');
    
    const [teachers, setTeachers] = useState([]);
    
    function searchTeacher(e:FormEvent){
        e.preventDefault();

        api.get('classes',{
            params:{
                    week_day:weekDay,
                    subject,
                    time
                   }
        }).then( async Value =>{
            await setTeachers(Value.data)
        });
        
    }

    return (
        <div className="container" id="page-teacher-list">
            <PageHeaders 
                title=" Esses são os Proffys Disponíveis.">
                <form 
                id="search-teacher" 
                onSubmit={searchTeacher}
                >

                <Select 
                    name="subject"
                    value={subject}
                    onChange ={(e)=>{setSubject(e.target.value)}}
                    label="materia"
                    options={[
                        {value:'Artes', label:'Artes'},
                        {value:'Português', label:'Português'},
                        {value:'Quimica', label:'Quimica'},
                        {value:'Fisica', label:'Física'},
                        {value:'Historia', label:'Historia'},
                        {value:'Geografia', label:'Geografia'},
                        {value:'Sociologia', label:'Sociologia'},
                        {value:'Ciências', label:'Ciências'},
                    ]}
                    />
                    <Select 
                    value={weekDay}
                    onChange ={(e)=>{setWeekDay(e.target.value)}}
                    name="weekDay" 
                    label="Dia da semana"
                    options={[
                        {value:'0', label:'Segunda-Feira'},
                        {value:'1', label:'Terça-Feira'},
                        {value:'2', label:'Quarta-Feira'},
                        {value:'3', label:'Quinta-Feira'},
                        {value:'4', label:'Sexta-Feira'},
                        {value:'5', label:'Sábado-Feira'},
                        {value:'6', label:'Domingo-Feira'},
                       
                    ]}
                    />
                    <Input
                     value={time}
                     onChange ={(e)=>{setTime(e.target.value)}}
                    label="Hora"
                    type="time"
                    name="time"/>

                    <button type="submit" className="btnSearch">
                        <img src={searchImg} alt="Buscar"/>
                    </button>
                   
                </form>

            </PageHeaders>
            <main>
                {
                   teachers.map((teacher : Teacher) =>{
                       console.log(teacher)
                       return(
                           <TeacherListCard 
                            key={teacher.id}
                            teacher={teacher}
                              
                            />    

                       )
                       
                   }) 
                }
              
            </main>
        </div>
    )
}

export default TeacherList;