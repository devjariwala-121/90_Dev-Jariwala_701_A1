const express = require('express')
const app = express()
const port = 8008;

app.use(express.static('public'))
app.get('/gethello',(req,res)=>{
    res.send('Hello NodeJS!')
});
app.listen(port,()=>{
    console.log(`Server is Listing https://localhost:${port}`);    
})
