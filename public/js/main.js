const cityname=document.getElementById('cityname')
const submit=document.getElementById('submit');
const city=document.getElementById('city')
const real=document.getElementById('real')
const status=document.getElementById('status')
const hide=document.querySelector('.mid')

const getinfo=async(event)=>{
    event.preventDefault();
    let cityv=cityname.value;
if (cityv==="") {
    city.innerText=`Please enter city name before search`;
    hide.classList.add('data_hiden')

}else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityv}&units=metric&appid=095d16ce33d3e082386ed03ac609cff0`;
    const response=await fetch(url);
    const data=await response.json()
     console.log(data)
    const ardata=[data]
    //console.log(ardata)

    city.innerText=`${ardata[0].name},${ardata[0].sys.country}`;
    real.innerText=ardata[0].main.temp
    status.innerText=ardata[0].weather[0].main;
    hide.classList.remove('data_hiden')


    }catch{
    city.innerText=`Please enter proper city name`;
    hide.classList.add('data_hiden')

}
}
     
}

submit.addEventListener('click',getinfo)
 