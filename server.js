const express = require('express')
const {join} = require("path");
const app = express()
app.listen(3000)

const userRoutes = require('./routes/users')
const directories = require('./util/directories')

//Serving static files from public
app.use(express.static(join(__dirname,'public')))

//User Routes
app.use(userRoutes)

//Home page
app.get('/',(req, res) => {
   return res.sendFile(join(directories.root,'views','home.html'))
})


app.use((req, res)=>{
    return res.sendFile(join(directories.root,'views','404.html'))
})