AOS.init();
/* arcade Cards */

const arcadecards = document.querySelector(".arcadecards");

// Array of object for arcades
const arcades = [
  {
    title: "May Level 1",
    code:" 1q-secure-0545 ",
    cardImage: "assets/images/arcade/lv1.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5058?utm_source=qwiklabs&utm_medium=lp&utm_campaign=level1-may-arcade24",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIok5a8S71HaCAyWUXtq-Lou",
  },
  {
    title: "May Level 2",
    code:" 1q-bigquery-0544 ",
    cardImage: "assets/images/arcade/lv2.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5057?utm_source=qwiklabs&utm_medium=lp&utm_campaign=level2-may-arcade24",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIp_gDfwz9vLkh2cuX64Gr4U",
  },
  {
    title: "May Level 3",
    code:" 1q-genai-0523 ",
    cardImage: "assets/images/arcade/lv3.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5060?utm_source=qwiklabs&utm_medium=lp&utm_campaign=level3-may-arcade24",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIphSLF9NVY8GPw7mjsbp1a_",
  },
  {
    title: "May Trivia Week 1",
    code:" 1q-trivia-05221 ",
    cardImage: "assets/images/arcade/w1.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5059?utm_source=qwiklabs&utm_medium=lp&utm_campaign=arcade24-may-trivia",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIoMFEy8j520W9K2UeyGXwmM",
  },
  {
    title: "May Trivia Week 2",
    code:" 1q-trivia-05222 ",
    cardImage: "assets/images/arcade/w2.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5087?utm_source=qwiklabs&utm_medium=lp&utm_campaign=arcade24-may-trivia",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIrcGTtuNRE7xtiLPTBbwhvv",
  },
  {
    title: "May Trivia Week 3",
    code:" 1q-trivia-04113 ",
    cardImage: "assets/images/arcade/w3.png",
    Previewlink: "",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIqtZb76_bms23xF-Sbt1jC0",
  },
  {
    title: "May Trivia Week 4",
    code:" 1q-trivia-04114 ",
    cardImage: "assets/images/arcade/w4.png",
    Previewlink: "",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIpPaydkkH-8Hd0zTodXHHbS",
  },
];

// function for rendering arcade cards data
const showCards = () => {
  let output = "";
  arcades.forEach(({ title, code, cardImage, Previewlink, Githublink  }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a><br><br>${code}</h1>
                </div>
                <ul class="menu-content">
                  <li><a href="${Previewlink}" class="social-icon_0"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon_1"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"></path></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon_2"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"></path></svg></a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  arcadecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}


const experiencecards = document.querySelector(".about_us-cards");
const exp = [
  {
     title: "Monthly Subscripation Code and link ",
    desp: " 5p-EDUCR-UA-DEV-February2024-90",
    // need to update new code 
    desp2: "Click the code to copy it. Below, click the button to go to the redemption page.",
    desp3: "Site",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, desp , desp2 , desp3}) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <article class="card-body">
          <header>
           <div class="title">
            <h3>${title}</h3>
           </div>        
            <ol>
            <div class="desptext" onclick="copyToClipboard('${desp}')">
              ${desp}
            </div>
            </ol>  
            <ol>
            <div class="desptext">
              ${desp2}
            </div>
            </ol>          
            <ol>
            <div class="desptext">
              <a href="https://www.cloudskillsboost.google/catalog?keywords=GSP282&event=Your" class="redirect-button" target="_blank">${desp3}</a>
            </div>
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};


function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Success message with styled box
      const alert = document.createElement("div");
      alert.classList.add("copy-success-alert");
      alert.textContent = "The Monthly Subscription code is copied clipboard!";

      // Style the alert box
      alert.style.backgroundColor = "#F7C5CC"; // Light grey background
      alert.style.color = "#CC313D"; // Red text color
      alert.style.borderRadius = "10px"; // Rounded corners
      alert.style.padding = "10px 20px"; // Add padding for better readability
      alert.style.fontWeight = "bold";// Make the text bold
      alert.style.fontSize = "25px"; // Change text size (adjust as needed)
      alert.style.fontFamily = "Arial, sans-serif"; // Change font type (adjust as needed)
      

      // Position the alert at the middle bottom of the screen
      const body = document.body;
      const windowHeight = window.innerHeight;
      const alertHeight = alert.offsetHeight;

      alert.style.position = "fixed";
      alert.style.bottom = `${windowHeight / 2 - alertHeight / 2}px`;
      alert.style.left = "50%";
      alert.style.transform = "translateX(-50%)";

      // Add the alert to the body and remove it after a few seconds
      body.appendChild(alert);
      setTimeout(() => {
        body.removeChild(alert);
      }, 1000); // Adjust timeout as needed (in milliseconds)
    })
    .catch((err) => {
      // Error message
      console.error("Failed to copy text:", err);
      alert("Error: Text could not be copied to clipboard.");
    });
}

document.addEventListener("DOMContentLoaded", showCards2);
