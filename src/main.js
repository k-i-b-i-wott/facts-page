document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('factbtn').addEventListener('click', getCatFacts);
    document.getElementById('imgbtn').addEventListener('click', getCatImages);
 
});
const outputValue= document.getElementById('outputValue');
const quote = document.getElementById('quote');
const spinner = document.getElementById('spinner');



async function getCatFacts() {
    spinner.style.display='block';
    outputValue.innerHTML='';    
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
            spinner.style.display='none';
        },2000);

        // outputValue.innerHTML=JSON.stringify(data, null, 2);
    } catch (error) {
        
        console.log(error);
        spinner.style.display='none';
    }
    
}   


async function getCatImages() {
    spinner.style.display='block';
    outputValue.innerHTML='';    
    const userLimit = parseInt( quote.value) || 1;
    const limit = Math.min(userLimit, 10);
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?count=${catImg.value}`);
        const data = await response.json();
        console.log(data);
        outputValue.innerHTML = data
    } catch (error) {
        console.log(error);
    }
}
getCatImages();``
