const locationbut = document.querySelector('.location-but')
const locationinput = document.querySelector('.location-input')

const fetchweather = async(data1,data2)=>{
if (!data2) {
var url = `http://api.weatherstack.com/current?access_key=22176b9877efb6970875940c1c7833f4&query=${data1}`
}
else{
var url = `http://api.weatherstack.com/forecast?access_key=22176b9877efb6970875940c1c7833f4&query=${data1},${data2}`
}
const res = await fetch(url);
const data = await res.json();
console.log(data);
updateui(data);

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
    if (e.code === "Enter") {
       const cityname = locationinput.value.trim();
       if (cityname) {
        fetchweather(cityname);
       }
       locationinput.value = "";
    }

})

