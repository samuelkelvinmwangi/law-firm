const baseUrl = 'https://my-json-server.typicode.com/samuelkelvinmwangi/law-firm/laws';

const title = document.getElementById('title');
const description = document.getElementById('description');
const fee = document.getElementById('fee');


function fetchOne(id){

    fetch(`${baseUrl}/${id}`)
    .then((res) => res.json())
    .then((laws) => {
        
        title.innerHTML = laws.name;
        description.innerHTML = laws.description;
        fee.innerHTML = laws.fee;
    });
}
fetchOne(1)

