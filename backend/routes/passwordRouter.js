import express from 'express';
import PasswordService from '../services/passwordService.js';

const passwordRouter = express.Router();
const passwordService = new PasswordService();

passwordRouter.get('/:employeeId', async (req, res) => {
    const { employeeId } = req.params;
    const password = await passwordService.getPasswordByEmployeeId(employeeId);
    res.json(password);
});

passwordRouter.put('/update', async (req, res) => {
    const passwordData = req.body;
    await passwordService.updatePassword(passwordData);
    res.json({ message: 'Password updated' });
});

export default passwordRouter;