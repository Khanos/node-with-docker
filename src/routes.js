const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  return res.json({
    error: null,
    message: 'Hello World'
  })
} )

module.exports = router;