const express = require('express');
const router = express.Router();

const { upload, signup, login, verifyToken, getUserInfo, getAllUsers, logout, updateUserRole } = require('../controller/UserController');

const { applyJob } = require('../controller/applyJobController'); 

router.post('/signup', upload.single('image'), signup);
router.post('/login', login);
router.put('/updateUserRole', verifyToken, updateUserRole);
router.get('/user', verifyToken, getUserInfo);
router.get('/allUsers', verifyToken, getAllUsers);
router.post('/logout', verifyToken, logout);

// New route for applying to a job
router.post('/apply',upload.single('resume'), verifyToken, applyJob);

module.exports = router;
