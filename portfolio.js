var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemeu = document.getElementById("sidemenu");

function openMenu() {
  sidemeu.style.right = "0";
}

function closeMenu() {
  sidemeu.style.right = "-200px";
}

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#user-email");
const messageInput = document.querySelector("#message");

const publicKey = "Dsye1yjlqRFsPkMOB";
const serviceID = "service_wubvxva";
const templateID = "template_ilqybph";

//Initialize email JS with public key
emailjs.init(publicKey);

//Add submit event to the form
contactForm.addEventListener("submit", (e) => {
  //Prevent form default behaviour
  e.preventDefault();
  //Change button text
  submitBtn.innerText = ".....";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  /*Send the email
  (Add service, template ID and input field values)*/
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      //Change button text
      submitBtn.innerText = "Sent!";
      //Clear out all input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      //console log the error
      console.log(error);
      //Change button text
      submitBtn.innerText = "😵";
    }
  );
});
