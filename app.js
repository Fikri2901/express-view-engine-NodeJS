const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    const mahasiswa = [{
            nama: 'fikri',
            email: 'fikri@gmail.com'
        },
        {
            nama: 'budi',
            email: 'budi@gmail.com'
        },
        {
            nama: 'dani',
            email: 'dani@gmail.com'
        },
    ]

    res.render('index', {
        title: 'Home',
        aktif: 1,
        nama: 'fikri',
        mahasiswa
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        aktif: 3,
        title: 'About'
    })
})

app.get('/kontak', (req, res) => {
    res.render('kontak', {
        aktif: 2,
        title: 'kontak'
    })
})

app.get('/kontak/:id', (req, res) => {
    res.send(`kontak id: ${req.params.id}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>Halaman tidak ditemukan !!!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})