const express = require('express');
const {createScan,getScan} = require('../Controllers/ScanController');

const router = express.Router();

router.post('/scan',createScan);
router.get('/getscan',getScan);

module.exports = router;