const datadiv = document.querySelector('.lower-div')
const changeui =(data)=>{
    var url = "img/day.svg";
    datadiv.style.color = "black";
    if (data.current.is_day === "no") {
        url = "img/night.svg";
        datadiv.style.color = "white"
    }
    datadiv.style.backgroundImage = `url(${url})`
    datadiv.style.padding = "20px";

}



const updateui = (data)=>{
if (data.error) {
    datadiv.style.backgroundColor = "#FFD2D2";
    datadiv.innerHTML = `
    <p class="e-para"> no result found, try something else !</p>
    `
}
else{
    changeui(data);
    datadiv.innerHTML = `
    <span class="descrip">${data.current.weather_descriptions}  </span>
    <span class="temp">${data.current.temperature} &deg c </span>
    <span >humidity: ${data.current.humidity} % </span>
    <span class="loc-name">${data.location.name} , ${data.location.region} , ${data.location.country}</span>
    <img  src=${data.current.weather_icons} >
     `


}

}