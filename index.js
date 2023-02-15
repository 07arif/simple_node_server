const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())

const users = [
    {id:1, name: 'sabana', email:'sabana@gmail.com'},
    {id:2, name: 'sabnor', email:'sabnor@gmail.com'},
    {id:2, name: 'sabila', email:'sabila@gmail.com'},
];

app.get('/users',(req,res)=>{
    res.send(users)
})

app.listen(port, () => {
  console.log(`Example app running on port ${port}`)
})