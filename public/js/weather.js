const locationbut = document.querySelector('.location-but')
const locationinput = document.querySelector('.location-input')

const fetchweather = async(data1,data2)=>{

const res = await fetch('/weather-data' ,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({data1 , data2})

})

const data = await res.json();
console.log(data.body);
updateui(data.body); 

}

const getcoordinates = ()=>{

if (!navigator.geolocation) {
    return alert("sorry your browser doesn't support this feature")  
}  
navigator.geolocation.getCurrentPosition((pos)=>{
    lat = pos.coords.latitude
    lon = pos.coords.longitude 
fetchweather(lat,lon);
})

}

getcoordinates();


 locationbut.addEventListener('click' , ()=>{

    getcoordinates();

})



locationinput.addEventListener('keyup' , (e)=>{
    console.log(e);
    if (e.keyCode === 13) {
       const cityname = locationinput.value.trim();
       if (cityname) {
        fetchweather(cityname);
       }
       locationinput.value = "";
    }

})

