document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('factbtn').addEventListener('click', getCatFacts);
    document.getElementById('imgbtn').addEventListener('click', getCatImages);
    document.getElementById('outputValue').innerHTML='';
    document.getElementById('spinner').style.display='none';
 
});
const outputValue= document.getElementById('outputValue');
const quote = document.getElementById('quote');
const spinner = document.getElementById('spinner');
const catImg = document.getElementById('catImg');


async function getCatFacts() {
    outputValue.innerHTML='';
       
    spinner.style.display='block';
       
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
        spinner.style.display='none';
    }
    
}   


async function getCatImages() {
    spinner.style.display='block';
    outputValue.innerHTML='';    
    const userLimit = parseInt(catImg.value) || 1;
    const limit = Math.min(userLimit, 10);
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?count=${limit}`);
        const data = await response.json();
        console.log(data);
        let images = `<div style="display:flex; flex-wrap: wrap; justify-content:center; align-items: center; gap:2rem"></div>`;
        data.forEach(cat => {
            images +=`<img src="${cat.url}" alt="cat" width="50px" height="50px " object-fit="cover" >`
        });
        images += '</div>'

        setTimeout(() => {    
            outputValue.innerHTML=images    
            outputValue.style.display="flex"; 
            spinner.style.display='none';
        },1000);    
    } catch (error) {
        console.log(error);
        outputValue.innerHTML=`<p style="color:red;">Failed to load the image</p>`
        spinner.style.display='none'; 
       }
}

