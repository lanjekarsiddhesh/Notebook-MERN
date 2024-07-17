const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    const obj = {
        name: "John",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown"
            }
    }
    res.json(obj)
})

module.exports = router