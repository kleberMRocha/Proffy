import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom';
import PageHeaders from '../../components/PageHeaders';

import Input from '../../components/input';
import WaringIcon from '../../assets/images/icons/warning.svg';

import './style.css';
import Textarea from '../../components/textarea';
import Select from '../../components/select';
import api from '../../services/api';


function TeacherForm() {
    const hystory = useHistory();
    const [classSchedules, setSchedule] = useState([{ week_day: 0, from: '', to: '' }]);

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [bio, setBio] = useState('');
   
function setScheduleValue(position:number,field:string,value:string){
    const newArray = classSchedules.map((classSchedule,index) =>{
        if(index === position ){
            return {...classSchedule,[field]:value}
        }

   
        return classSchedule;
    });
    setSchedule(newArray);
}

    const classFormSchedules = classSchedules.map((classSchedule,index) => {
        const id = Math.random().toFixed(5);
        return (<div key={id} className="scheduleItem">
            <Select
                name="week_day"
                value={classSchedule.week_day}
                label="Dia da semana"
                onChange={e => setScheduleValue(index,'week_day',e.target.value)}
                options={[
                    { value: '0', label: 'Segunda-Feira' },
                    { value: '1', label: 'Terça-Feira' },
                    { value: '2', label: 'Quarta-Feira' },
                    { value: '3', label: 'Quinta-Feira' },
                    { value: '4', label: 'Sexta-Feira' },
                    { value: '5', label: 'Sábado-Feira' },
                    { value: '6', label: 'Domingo-Feira' },

                ]}
                
            />
            <Input
             value={classSchedule.from}
             label="Das" 
             type="time"
             name="from"
             onChange={e => setScheduleValue(index,'from',e.target.value)}
            />
            <Input 
            value={classSchedule.to}
            label="As" 
            type="time" 
            name="to" 
            onChange={e => setScheduleValue(index,'to',e.target.value)}
            />

        </div>)

    });

    function AddNewSchedule() {
        setSchedule([...classSchedules, { "week_day": 0, "from": '', "to": '' }]);
    }

    function registerClasses(e:FormEvent){
     console.log(classSchedules)
        e.preventDefault();
        api.post('/classes',

        {
            name,
            avatar,
            whatsapp,
            bio,
            cost,
            subject,
            "schedule":classSchedules
               
        }
           
        
        )
        .then(() =>{
            alert("cadastro Realizado com sucesso!");
            hystory.push('/');
        }) 
        .catch(()=> alert("Erro ao tentar cadastrar!"))
    }


    return (
        <header className="container" id="page-teacher-form">
            <PageHeaders
                description="O primeiro passo é preencher este formulário de inscrição!"
                title="Que incrivel que você quer dar Aulas!" />
            <main>
                <form onSubmit={registerClasses}>

                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name="Avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name="Whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a Aula</legend>
                        <Select
                            name="subject"
                            value={subject}
                            label="materia"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Quimica', label: 'Quimica' },
                                { value: 'Fisica', label: 'Física' },
                                { value: 'Historia', label: 'Historia' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Sociologia', label: 'Sociologia' },
                                { value: 'Ciências', label: 'Ciências' },
                            ]}
                            onChange={(e) => { setSubject(e.target.value) }}
                        />

                        <Input name="cost"
                            label="Custo da sua materia por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                        <Textarea
                            name="bio"
                            value={bio}
                            label="Bio"
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horarios disponíveis

                            <button type="button" onClick={AddNewSchedule}>
                                + Novo horário
                            </button>
                        </legend>
                        {classFormSchedules}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={WaringIcon} alt="aviso importante" />
                        Importante!<br />
                        Preencha todos os campos!
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </header>

    )
}

export default TeacherForm;