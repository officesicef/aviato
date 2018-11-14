const { Router } = require('express');
const authRouter = require('./auth');
const editProfileRouter = require('./editProfile');
const userRouter = require('./user');
const prescriptionRouter = require('./prescription');
const profileRouter = require('./profile');
const examinationRouter = require('./examination');
const measurementRouter = require('./measurement');

const router = Router();

router.use('/auth', authRouter);
router.use('/edit-profile', editProfileRouter);
router.use('/users', userRouter);
router.use('/prescriptions', prescriptionRouter);
router.use('/profile', profileRouter);
router.use('/examinations', examinationRouter);
router.use('/measurements', measurementRouter);

module.exports = router;
