const request = require('request')

getweatherdata = (data1 , data2 , callback)=>{
    if (!data2) {
        var url = `http://api.weatherstack.com/current?access_key=22176b9877efb6970875940c1c7833f4&query=${data1}`
        }
        else{
        var url = `http://api.weatherstack.com/forecast?access_key=22176b9877efb6970875940c1c7833f4&query=${data1},${data2}`
        }
        request({url , json : true} , (err , res)=>{
        if (err) {
            callback(err ,undefined )

        } else {
            callback( undefined , res)    
        }

        })
}

module.exports = getweatherdata ; 
