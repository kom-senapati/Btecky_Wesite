const informationcards = document.querySelector(".about_previews_swags-cards");
const info = [
  {
    title: "<b>Google Cloud Qwiklabs Arcade Facilitator Program 2024</b>",
    desp: "<br>Unleash your inner cloud champion! The Google Cloud Qwiklabs Arcade offers gamified learning with hands-on labs and rewards. Become an Arcade Facilitator, guide others, and earn points for swag or charity. Join anytime – the fun never stops!",
    desp2: "Level up your cloud skills with engaging games and labs. Earn badges and become an Arcade Facilitator to empower others.",
  }
];

const showCards1 = () => {
  let output = "";
  info.forEach(
    ({ title, desp , desp2 }) =>
      (output += `        
        <div class="col gaap" data-aos-easing="linear" data-aos-duration="400" data-aos-delay="100" > 
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
          </header>
        </article>
      </div>
    </div>
      `)
  );
  informationcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


const experiencecards = document.querySelector(".facilitator_monthly-cards");
const exp = [
  {
     title: "Step 1",
    desp: "First logout from the Qwiklabs account and open the incognito window on your browser.",
    desp2: "For Windows (CTRL+ SHIFT+N).",
    desp3: "For Mac (CMD+SHIFT+N).",
  },
  {
    title: "Step 2",
   desp: "Go to URL mention in the mail ",
   desp2: "You will get URL in the mail from which you have registered",
   desp3: "Mail Subject or Tittle will be <b>Hello </b> check spam if unable to find or register with the facilator ",
   },
 {
    title: "Step 3",
    desp: "Now, sign in to your Qwiklabs account.",
    desp2: "You can find Log in button on the Top Right side of your page ",
    desp3: "",
   
 },
 {
    title: "Step 4",
    desp: "Now, if you click the profile icon on the Top Right corner , Click on it once",
    desp2: "You can see that you have 09 credits to get started.",
    desp3: "",
 },
 {
    title: "Step 5",
   desp: " Please click on the Start Lab button",
   desp2: "Then click Open Google Console, Next Paste the Password from lab Instruction page ",
   desp3: "Then click I understand , Now tick the box and click Agree and Continue  ",
 },
 {
    title: "Step 6",
   desp: "Now , Open Cloud Shell Terminal ",
   desp2: "Click , Continue ",
   desp3: "",
 },
 {
    title: "Step 7",
   desp: "Paste the command given below in the shell",
   desp2: "gcloud services enable dialogflow.googleapis.com",
   desp3: "Click the command to Copy , then paste click Enter",
 },
 {
  title: "Step 8",
 desp: "Now go back to lab instruction page",
 desp2: "Now Altest Wait for 6 min",
 desp3: "Then Click End Lab",
},
{
  title: "Step 9",
 desp: "Now click profile Icon On Top Right",
 desp2: "Click on credit option ",
 desp3: "You will see monthly subscription there in some time ",
},

];

const showCards2 = () => {
    let output = "";
    exp.forEach(({ title, desp, desp2, desp3, button }) => {
      // Process desp text to italicize and color specific parts
      desp = processDespText(desp);
      desp2 = processDespText(desp2);
      desp3 = processDespText(desp3);
      
      output += `        
      <div class="col gaap" data-aos-easing="linear"> 
        <div class="card card1">
          <article class="card-body">
            <header>
              <div class="title">
                <h3>${title}</h3>
              </div> 
              <ol>
                <div class="desptext">
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
                  ${desp3}
                </div>
              </ol>
              
            </header>
          </article>
        </div>
      </div>`;
    });
  
    experiencecards.innerHTML = output;
  };
  
  
  


  const processDespText = (text) => {
    // Define keywords to be formatted
    const keywords = ["Hello", "Top Right", "Open Google Console", "I understand" ,"Continue"];
    
    // Escape special characters for regex
    const escapedKeywords = keywords.map(keyword => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    
    // Create regex to match any keyword except the specific command
    const regex = new RegExp(`\\b(${escapedKeywords.join('|')})\\b`, 'g');
    
    // Replace specific words with italicized, bold, red-colored, and cursor-pointer versions
    text = text.replace(regex, '<span style="font-style: italic; font-weight: bold; color: red; cursor: pointer;">$1</span>');
    
    // Replace "gcloud services enable \\dialogflow.googleapis.com" with clickable span
    const command = "gcloud services enable dialogflow.googleapis.com";
    const escapedCommand = command.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    text = text.replace(new RegExp(escapedCommand, 'g'), `<span style="font-style: italic; font-weight: bold; color: red; cursor: pointer;" onclick="copyToClipboard('${command}')">${command}</span>`);
    
    return text;
  };
  


function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Success message with styled box
      const alert = document.createElement("div");
      alert.classList.add("copy-success-alert");
      alert.textContent = "The Command is copied clipboard!";

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

// change code in box 1 desp and form link in url

const form_cards = document.querySelector(".intrest_form-cards");
const form = [
  {
    title: "Student form",
    desp: "Click the button to get redirected to the Student Intrest form ",
    desp2: "Refer code of facilitator GCAF24-IN-JDM-SGC ",
    desp3:"Click the highlighted code to get copy",
    Button: true,
    url: "https://docs.google.com/forms/d/e/1FAIpQLScvpSeUx7xNzm3mhoeJI9tN89kdwuFcBfSyMxE5bhn4COu-NQ/viewform"
    
  },
  
  {
    title: "Benifits of Fill the form ",
    desp: "You will Recive the month Subscription so that u can do skill badge at no extra cost ",
    desp2: "You can earn more points by doing skill badges ",
    desp3:" You can earn Extra Bonus Points which is Upto 25",
  },

  {
    title: "Benifits of Fill the form from Btecky side ",
    desp: "Certificate to all participant from Btecky ",
    desp2: "All query will be solved and all short-labs solution will be provided at free of cost",
    desp3:"Regular Update regrading program , Regular video updates about the event ",
  },

  
];

const showCards3 = () => {
  let output = "";
  const command = "GCAF24-IN-JDM-SGC";
  const escapedCommand = command.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const replaceCommandWithSpan = (text) => text.replace(new RegExp(escapedCommand, 'g'), `<span style="font-style: italic; font-weight: bold; color: blue; cursor: pointer;" onclick="copyToClipboard('${command}')">${command}</span>`);

  form.forEach(
    ({ title, desp, desp2, desp3, Button,url }) => {
      const modifiedDesp2 = replaceCommandWithSpan(desp2);

      output += `        
        <div class="col gaap" data-aos-easing="linear" data-aos-duration="400" data-aos-delay="100" > 
          <div class="card card1">
            <article class="card-body">
              <header>
                <div class="title">
                  <h3>${title}</h3>
                </div>        
                <ol>
                  <div class="desptext">
                    ${desp}
                  </div>
                </ol>  
                <ol>
                  <div class="desptext">
                    ${modifiedDesp2}
                  </div>
                </ol>
                <ol>
                  <div class="desptext">
                    ${desp3}
                  </div>
                </ol>
                <ol>
                  ${Button ? `
                    <a href="${url}" target="_blank" style="text-decoration: none; display: flex; justify-content: center;">
                      <button class="button">
                        <span class="hover-text" data-text="FORM LINK">FORM LINK</span>
                      </button>
                    </a>` : ""}
                </ol>      
              </header>
            </article>
          </div>
        </div>
      `;
    }
  );

  form_cards.innerHTML = output;
};


function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Success message with styled box
      const alert = document.createElement("div");
      alert.classList.add("copy-success-alert");
      alert.textContent = "The Code is copied clipboard!";

      // Style the alert box
      alert.style.backgroundColor = "#F7C5CC"; // Light grey background
      alert.style.color = "#CC313D"; // Red text color
      alert.style.borderRadius = "10px"; // Rounded corners
      alert.style.padding = "10px 20px"; // Add padding for better readability
      alert.style.fontWeight = "bold"; // Make the text bold
      alert.style.fontSize = "25px"; // Change text size (adjust as needed)
      alert.style.fontFamily = "Arial, sans-serif"; // Change font type (adjust as needed)
      alert.style.zIndex = "9999"; // Ensure it is on the top layer

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

document.addEventListener("DOMContentLoaded", showCards3);



document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && e.key === 'I') || 
      (e.ctrlKey && e.shiftKey && e.key === 'J') || 
      (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
  }
});
