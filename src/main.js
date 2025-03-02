document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('factbtn').addEventListener('click', getCatFacts);
    document.getElementById('imgbtn').addEventListener('click', getCatImages);
 
});
const outputValue= document.getElementById('outputValue');
const quote = document.getElementById('quote');


async function getCatFacts() {
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
        outputValue.innerHTML=listHTML



        // outputValue.innerHTML=JSON.stringify(data, null, 2);
    } catch (error) {
        console.log(error);
    }
}   


async function getCatImages() {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${catImg.value}`);
        const data = await response.json();
        console.log(data);
        outputValue.innerHTML = data
    } catch (error) {
        console.log(error);
    }
}
getCatImages();``
