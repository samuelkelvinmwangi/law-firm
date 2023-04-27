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

function fetchAllLaws(){
    fetch(baseUrl)
    .then((res) => res.json)
    .then(laws => {
        const card = `<div class="practice-areas">
        <div class="row">
          <div class="col-md-4">
            <div class="card h-100">
              
              <div class="card-body">
                <h5 id="title" class="card-title">${laws.name}</h5>
                <p id="description"class="card-text">${laws.description}</p>
                <p class="card-text">Reach out to us <a class="services-link" href="#contact">here</a> for
                  enquiries or go ahead to book your appointment. </p>
                <p>Consultation fee:<strong id="fee"class="fee"> ${laws.fee}</strong></p>
                <a href="" class="btn   mb-3">Book Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;

      container.inserAdjacentHTML("aftebegin", card);
    })
}
fetchAllLaws()