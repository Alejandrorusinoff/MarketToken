const express = require('express')
const app = express()
// const routes = require('./routes')
const morgan = require('morgan')
const PORT = 3001
const cors = require('cors')

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))

app.get("/api", (req, res) => {
    res.json('probando')
});

app.listen(PORT, () => console.log(`Server conectado y escuchando en Cluster`))
