const baseUrl = 'https://my-json-server.typicode.com/samuelkelvinmwangi/law-firm/laws';

const title = document.getElementById('title');
const description = document.getElementById('description');
const fee = document.getElementById('fee');
const services = document.getElementById('services')

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


fetch(baseUrl)
.then((res) => res.json())
.then(laws => {
    laws.forEach((law) => {
        const card = `<div class="container">
        <div class="practice-areas">
          <div class="row">
            <div class="col-md-4">
              <div class="card h-100">    
                <div class="card-body">
                  <h5 id="title" class="card-title">${law.name}</h5>
                  <p id="description"class="card-text">${law.description}</p>
                  <p class="card-text">Reach out to us <a class="services-link" href="#contact">here</a> for
                    enquiries or go ahead to book your appointment. </p>
                  <p>Consultation fee:<strong id="fee"class="fee"> ${law.fee}</strong></p>
                  <a href="" class="btn   mb-3">Book Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`

      services.insertAdjacentHTML("afterbegin", card);
    })
})








$(document).ready(function() {
    // Form submit handler
    $("#form-info").submit(function(event) {
      event.preventDefault();
      var fullName = $("#fullname").val();
      var timeOfApp = $("#time option:selected").val();
      var serviceType = $("#service option:selected").val();
      var communication = $("#comm option:selected").val();
      var date = new Date($("#get-date").val()).toDateString();
  
      // Check if form is filled
      if (fullName == ""|| date == "" || timeOfApp == "" || serviceType == "" || communication == "") {
        alert("please fill in your information below")
      } else {
        $("#displayAppointment").text("Dear " + fullName + "," + "your appointment is on " + date + "," + " at " + timeOfApp);
        $("#modeOfComm").text("Your consultation will be held via " + communication);
        $("#serviceType").text(serviceType);
      }
    });
  
    // Payment click handler
    $("#pay").click(function() {
      $("#payment").slideDown();
    });
  
    // Payment submit handler
    $("#payment").submit(function(event) {
      event.preventDefault();
      var paymentName = $("#pname").val();
      var email = $("#emailaddress").val();
  
      // Check if payment form is filled
      if (paymentName == " " || email == " ") {
        alert("Kindly input your payment information.");
      } else {
        alert ("Dear " + paymentName + "." + "Thank you for your "  + "transaction.")
        alert("We will send your receipt and more information on your session to " + email + ".");
      }
    });
  });