/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//personal api key from openweather map with a call api
const baseURL='https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey='&appid=a7bf951a6d8ed3560fd6cbae05ec5937&units=imperial';

 
// make getElementby id for generate and make event listner click on it
document.getElementById('generate').addEventListener('click',formAction);
// define the function created by event listner
function formAction(e){
    
    //define myZip as avaribal to get all zip data
 const myZip=document.getElementById('zip').value;
 //define myFeelings as avaribal to get all feelings data
const myFeelings=document.getElementById('feelings').value;

    getWeather(baseURL,myZip,apiKey)

    .then(function(data){
        console.log(data); 
        // add data to post request
        postData('/add',{date: newDate, temp: data.main.temp,content: myFeelings});
        
       
    });
    updateUI(); 
};
//get web api data by getWeather function
const getWeather= async(baseURL,myZip,apiKey)=>{
    const res= await fetch (baseURL+myZip+apiKey);
    try{
        const data=await res.json();
        return data;
    }
    // make catch to handel errors
    catch(error){
        console.log("error",error);
    }
}
// function post data
const postData= async(url= '', data={})=>{

    const req= await fetch(url,{
        method:"POST",
        credentials:"same-origin",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    });
    try {
        const myData=await req.json();
        console.log(myData);
        return myData;
    }
    catch(error){console.log('error',error)}
}

//get all projectData by updateui function
const updateUI=async()=>{
    const request=await fetch('/all');
    try{
        const finalData=await request.json();
    document.getElementById('date').innerHTML=`Date:${finalData[0].date}`;
    document.getElementById('temp').innerHTML=`Temperatuer:${finalData[0].temp}`;
    document.getElementById('content').innerHTML=`I feel:${finalData[0].content}`;
    }
catch(error){
    console.log('error',error);
}
}

