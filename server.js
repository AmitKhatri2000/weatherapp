const express = require('express')
const app = express();
const PORT = 3000;

app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(express.json())


app.get('/', (req ,res)=>{
res.render('weather');
})
    
app.get('/contact', (req ,res)=>{
res.render('contact');
})
    
app.get('/*', (req ,res)=>{
res.render('404');
})

app.listen(PORT , ()=>{
console.log("Connected to port " + PORT);

})