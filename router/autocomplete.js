const express = require('express')
const router = express.Router();
const conn = require("../config/DB");


let List = []
router.get("/search",function(request, response){
    let sql = 'select rest_name from rest_info';
    conn.query(sql, function (err, rows){
        if(rows){
            for(let i=0;i<rows.length;i++){
                List.push(rows[i]);
            }
        }
    })
});
module.exports=router;