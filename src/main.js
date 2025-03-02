document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('factbtn').addEventListener('click', getCatFacts);
    document.getElementById('imgbtn').addEventListener('click', getCatImages);  
    const outputValue= document.getElementById('outputValue');
    const quote = document.getElementById('quote');
    const spinner = document.getElementById('spinner');
    const catImg = document.getElementById('catImg');
 
});
function showError(message){
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 6000);
}







async function getCatFacts() {
    outputValue.innerHTML='';
       
    spinner.style.display='block';
    
    if(!navigator.onLine){
        spinner.style.display='none'
        showError('There was an error. Please try again later');
        return
    }
    
    const userLimit = parseInt( quote.value) || 1;
    const limit = Math.min(userLimit, 50);
    try {
        const response = await fetch(`https://meowfacts.herokuapp.com?count=${limit}`);
        const data = await response.json();
        console.log(data);
        let listHTML=`<ol>`
        data.data.forEach(element => {
            listHTML+=`<li>${element}</li>`
        })
        listHTML+=`</ol>`
        
        setTimeout(() => {
            outputValue.innerHTML=listHTML
            outputValue.style.display="flex"; 
            spinner.style.display='none';
        },2000);

        
    } catch (error) {
        
        console.log(error);
        showError('Failed to load the cat facts. Try again later');
        spinner.style.display='none';
    }
    
}   


async function getCatImages() {    
    
    spinner.style.display='block';
    const outputValue= document.getElementById('outputValue');
   
    outputValue.innerHTML='';  
    outputValue.style.display="flex";  

    if(!navigator.onLine){
        showError('There was an error. Please try again later');
        return
    }
    const userLimit = parseInt(catImg.value) || 1;
    const limit = Math.min(userLimit, 10);
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
        const data = await response.json();
        console.log("API response",data);
        let images = `<div class= "imgCat">`;                
            
            data.forEach(cat => {          
            
               if(cat.url){
                images +=`<img src="${cat.url}" alt="cat" width="200rem" height="200rem" style="object-fit:cover;" >`;
               }
            
            });
        images += `</div>`;    

        setTimeout(() => {    
            spinner.style.display='none';
            outputValue.innerHTML='';
            outputValue.innerHTML=images ;            
           
        },2000);    
        console.log(images);

    } catch (error) {
        console.log(error);
        showError('Failed to load the cat images. Try again later');
        spinner.style.display='none'; 

       }

      
}

