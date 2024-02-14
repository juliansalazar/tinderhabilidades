const { Router, response } = require('express');

const router = Router();

const userList = {
    "pets": [
        {
            "id": 1,
            "name": "Nala",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Pepper",
            "age": 2,
            "type": "dog"
        },
        {
            "id": 3,
            "name": "Prince",
            "age": 6,
            "type": "dog"
        },
        {
            "id": 4,
            "name": "Mia",
            "age": 7,
            "type": "cat"
        },
    ]
  }

router.get('/api/v1/users', (req, res) => {
    res.json(userList)
})


module.exports = router