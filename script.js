window.onload = function(){
    const input =  document.querySelector(".input-city");
    const button = document.querySelector(".btn");
    const place = document.querySelector(".place");
    const date = document.querySelector(".date");
    const temperature = document.querySelector(".temp");
    const condition = document.querySelector(".condition");

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const newDate = new Date();
    button.addEventListener('click', () =>{
        const apiKey = "4b795612d32ec836d583d2df6c2575eb";
        let cityName = input.value;
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units=metric";
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            place.textContent = data.name+","+data.sys.country;
            date.textContent = months[newDate.getMonth()]+" "+newDate.getDate()+", "+newDate.getFullYear();
            temperature.style.backgroundColor = "transparent";
            temperature.style.boxShadow = "0 0 10px #0f172a";
            temperature.style.height = "50px";
            temperature.style.width = "auto";
            temperature.textContent = data.main.temp+"°C";
            condition.textContent = data.weather[0].main;
        })
        input.value = "";
    })
}