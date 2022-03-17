//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// send email 

function showAlert(){
    alert("Thank you for contacting us!\nWe aim to reply to all enquiries within 2 working days.");
  }
  
  function sendMail(contactForm) {
    emailjs.send("service_mc16uvn","template_32j9hd1", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_number": contactForm.number.value,
        "message": contactForm.enquiry.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            showAlert();
            document.getElementById("fromName").value = '';
                      document.getElementById("fromEmail").value = '';
                      document.getElementById("message").value = '';
                      document.getElementById("fromNumber").value = ''; 
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
  }