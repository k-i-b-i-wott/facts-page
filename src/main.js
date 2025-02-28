document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    document.getElementById('factbtn').addEventListener('click', getCatFacts);
    document.getElementById('imgbtn').addEventListener('click', getCatImages);
 
});
const quote = document.getElementById('quote');

const catImg = document.getElementById('catImg');


async function getCatFacts() {
    try {
        const response = await fetch(`http://meowfacts.herokuapp.com/=${quote.value}`);
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data.data[0]
    } catch (error) {
        console.log(error);
    }
}   

async function getCatImages() {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${catImg.value}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
