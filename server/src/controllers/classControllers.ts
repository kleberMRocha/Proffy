import {Request,Response, json} from 'express';
import db from '../database/conection';
import convertHourTominutes from '../utils/convertHourTominutes';


export default class ClassContoller{

    async create(req:Request,res:Response){

        interface ScheduleItem{
            week_day:number,
            from:string,
            to:string
        }

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule} = req.body;
    
            const trx = await db.transaction();
    
        try {
    
          const insertUsersId = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio,
        })
    
          const user_Id = insertUsersId[0];
    
          const insertedIdClasses =  await trx('classes').insert({
          subject,
          cost,
          user_Id
          });
    
          const class_id = insertedIdClasses[0];
    
          const ClassSchedule = schedule.map((scheduleItem:ScheduleItem) => {
    
    
          return{
          class_id,
          week_day:scheduleItem.week_day,
          from: convertHourTominutes(scheduleItem.from),
          to: convertHourTominutes(scheduleItem.to)
    
        };
    
        })
    
          await trx('class_schedule').insert(ClassSchedule);
    
          await trx.commit();
    
          res.status(201).json({sucesso:"sucesso"});
          
        } catch (error) {
          await trx.rollback();
          res.status(400).json({error:error});
          
        }
    

    }

    async index(req:Request,res:Response){
        const filter = req.query;

       const week_day = filter.week_day as string;
       const subject = filter.subject as string;
       const time = filter.time as string;
        
        if(!week_day || !subject || !time){
            return res.status(401).send({error:"Erro!"})
        }

        const timeInMinutus = convertHourTominutes(time as string);

        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??',[Number(week_day)])
            .whereRaw('`class_schedule`.`from` <= ??',[Number(timeInMinutus)]);
        })
        .where('classes.subject','=',subject)
        .join('users','classes.user_id','=','users.id')
        .select(['classes.*','users.*']);

        res.json(classes);

    }

}