require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')

const userRouter = require('./Routers/userRouter')
const categoryRouter = require('./Routers/categoryRouter')
const uploadRouter = require('./Routers/upload')
const productRouter = require('./Routers/productRouter')
const paymentRouter = require('./Routers/paymentRouter')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})

//Router
app.use('/user', userRouter);
app.use('/api', categoryRouter);
app.use('/api', uploadRouter);
app.use('/api', productRouter);
app.use('/api', paymentRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})