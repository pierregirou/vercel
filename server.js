const express = require("express")
const app = express()

app.listen(process.env.PORT || 4000 )

app.get("/",(req, resp)=>{
    resp.send('ohhh it\'s working incredibble  ! !!!!')
})