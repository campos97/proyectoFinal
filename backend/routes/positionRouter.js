import express from 'express';
import PositionService from '../services/positionService.js';

const positionRouter = express.Router();
const positionService = new PositionService();

positionRouter.get('', async (req, res) => {
    const positions = await positionService.getPositions();
    res.json(positions);
});
    
positionRouter.get('/:positionId', async (req, res) => {
    const { positionId } = req.params;
    const position = await positionService.getPositionById(positionId);
    res.json(position);
});

export default positionRouter;