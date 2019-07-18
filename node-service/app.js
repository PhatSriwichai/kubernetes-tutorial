const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log('==> request')
    res.send('Hello World')
})

app.get('/configmap', function (req, res) {
    const CONFIG = process.env.APP_CONFIGMAP
    if (!CONFIG) {
        console.log("==> haven't APP_CONFIGMAP");
        res.status(500).send("==> haven't APP_CONFIGMAP")
        return
    }
    console.log('==> APP_CONFIGMAP:', CONFIG)
    res.send(CONFIG)
})

app.get('/secret', function (req, res) {
    const SECRET = process.env.APP_SECRET
    if (!SECRET) {
        console.log("==> haven't APP_SECRET");
        res.status(500).send("==> haven't APP_SECRET")
        return
    }
    console.log('==> APP_SECRET:', SECRET)
    res.send(SECRET)
})

console.log('==> app start')
app.listen(3000)