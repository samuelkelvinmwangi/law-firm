const baseurl = 'https://my-json-server.typicode.com/samuelkelvinmwangi/law-firm/db';

const img = document.querySelector('#src');
const name = document.querySelector('#title');
const description = document.querySelector('#description');
const fee = document.querySelector('#fee');

document.addEventListener("DOMContentLoaded", () =>{

    function fetchOne (id = 1) {
    fetch('https://my-json-server.typicode.com/samuelkelvinmwangi/law-firm/db')
    .then(response => response.json())
    .then((data) => console.log(data));
    }
    fetchOne()

})