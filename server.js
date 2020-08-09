const express = require('express')
const app = express()

//middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(require('./controller'))




const PORT = process.env.PORT || 80
app.listen(PORT, () => {
    const env = `${process.env.NODE_ENV || 'development'}`
    console.log(`App listening on port ${PORT}`)
    console.log(`App listening on env ${env}`)
    console.log(`Press Ctrl + C to Quit. `)
})