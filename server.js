


const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.Port || 3000



// the other  alternative to we can use to get routh paths

// app.get('/', (reg, res) => {
//     res.sendFile('/views/index.html', {root: __dirname})
// })


//    OR  the other  alternative to we can use to get routh paths

// app.get('/', (reg, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'))
// })


//      OR   the other  alternative to we can use to get routh paths
// app.get('^/$|/index.html', (reg, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'))
// })


//      OR   the other  alternative to we can use to get routh paths
app.get('^/$|/index(.html)?', (reg, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})



app.get('/new-page(.html)?/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

// app.get('/testing', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'testing.html'))
// })


//  REDIRECT

// app.get('/testing(.html)?', (req, res) => {
//     res.redirect(301, "new-page.html")
// })


//         ALTERNATIVE METHODS
app.get('/ola(.html)?', (req, res) => {
    res.redirect('new-page.html')
})


//Route Handler
app.get('/hello(.html)?', (req, res, next) => {
    console.log('Hum we are moving on')
    next()
}, (req, res) => {
    res.send("Hey Bosses how unah day")
}) 


//CHAINING ROUTE HANDLR

const cohort1 = (req, res, next) => {
    console.log('Kanas Qadir')
    next()
}

const cohort2 = (req, res, next) => {
    console.log('Muhammad Roco')
    next()
}

const cohort3 = (req, res, next) => {
    console.log('Supreme KennyMax')
    next()
}

const cohort4 = (req, res, next) => {
    console.log('Muhammad DadyHaliah')
    res.send('Dem be guru in tech')
}

app.get('/big-devs(.html)?', [cohort1, cohort2, cohort3, cohort4])













app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})