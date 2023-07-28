import express from 'express'

const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(express.static('public'))

app.get('/', function(req, res){
    res.send("Amo's API")
})

const greetings = {
    english: 'Hello',
    zulu: 'Sawubona',
    xhosa: 'Molo'
}

app.get('/api/greet/', function(req, res){
    const username = req.query.username
    const language = req.query.language

    const greeting = greetings[language]

    if(greeting){
        res.json({
            message : `${greeting}, ${username}`
        })
    } else{
        res.json({
            message: 'error, language not found'
        })
    }
    /*if(username && language){
      res.json({
        message: `Hello, ${username}`,

        greeting:  `Greeted in ${language}`

    })  
    } else{
        res.json({
            message: 'Hello'
        })
    }*/
    
})

app.post('/api/greet', function(req, res){
res.json({
    status: 'success'
})
    const language = req.body.language
    const greeting = req.body.greeting

    if(language && !greetings[language]) {
    greetings[language] = greeting
    
    }

    
})

const PORT = process.env.PORT || 4008;

app.listen(PORT, function(req,res){
console.log("app started")
})
