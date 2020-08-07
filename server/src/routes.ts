import express from 'express';
import ClassContoller from './controllers/classControllers';
import ConnectionsController from './controllers/ConnectionsController';
const classes = new ClassContoller;
const connections = new ConnectionsController;

const router = express.Router();


router.post('/classes', async(req,res)=>{
  classes.create(req,res);
      
});

router.get('/classes', async(req,res)=>{
  classes.index(req,res);
      
});

router.get('/connections',connections.index);
router.post('/connections',connections.create);
export default router;