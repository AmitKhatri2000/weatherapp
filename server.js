const express = require('express')
const process = require('process'); 
const getweatherdata = require('./public/js/accweather')

const app = express();
const PORT =  process.env.PORT || 3000;

app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(express.json())


app.get('/', (req ,res)=>{
res.render('weather');
})
    
app.get('/contact', (req ,res)=>{
res.render('contact');
})

app.post('/weather-data' , (req , res)=>{
const {data1 , data2} = req.body   
getweatherdata(data1 , data2 , (err , data)=>{
if (err) {
   return console.log(err);
}    
res.status(200).send(data);
})
})
    
app.get('/*', (req ,res)=>{
res.render('404');
})

app.listen(PORT , ()=>{
console.log("Connected to port " + PORT);

})