AOS.init();
/* arcade Cards */

const arcadecards = document.querySelector(".arcadecards");

// Array of object for arcades
const arcades = [
  {
    title: "June Level 1",
    code:"1q-networking-0631",
    cardImage: "https://i.ibb.co/gtRDdnX/image3.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5156?utm_source=qwiklabs&utm_medium=lp&utm_campaign=level1-june-arcade24",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIrUsEgENX8WbMELtK-F6ve3",
  },
  {
    title: "June Level 2",
    code:"1q-deploy-0632",
    cardImage: "https://i.ibb.co/Q6C3Ntv/image2.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5155?utm_source=qwiklabs&utm_medium=lp&utm_campaign=level2-june-arcade24",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIpgvCIhwmXF-ExDawxjnsHl",
  },
  {
    title: "June Level 3",
    code:"1q-genai-0631",
    cardImage: "https://i.ibb.co/r0MPv75/image1.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5154?utm_source=qwiklabs&utm_medium=lp&utm_campaign=level3-june-arcade24",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIqtBjKap5s4sJ2KppzdAnHM",
  },
  {
    title: "June Trivia Week 1",
    code:"1q-trivia-06331",
    cardImage: "https://i.ibb.co/Hgz455J/june-week1.png",
    Previewlink: "https://www.cloudskillsboost.google/games/5153?utm_source=qwiklabs&utm_medium=lp&utm_campaign=arcade24-june-trivia",
    Githublink: "https://www.youtube.com/playlist?list=PL5aOhqv5LVIr6wJiUAcuFdxClQ_UzXBtx",
  },
  {
    title: "June Trivia Week 2",
    code:"1q-trivia-05222",
    cardImage: "https://i.ibb.co/SR0R85k/june-week2.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "June Trivia Week 3",
    code:"1q-trivia-05223",
    cardImage: "https://i.ibb.co/XyST2Y8/june-week3.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "June Trivia Week 4",
    code:"1q-trivia-05224",
    cardImage: "https://i.ibb.co/kB0cbc6/june-week-4.png",
    Previewlink: "",
    Githublink: "",
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
    desp: "1p-EDUCR-GCCF-STUDENTMENTOR-JUN2024-19",
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


document.getElementById('calculateButton').addEventListener('click', async function () {
  const profileUrl = document.getElementById('profileUrl').value;
  const totalPointsElem = document.getElementById('totalPoints');
  const errorMessageElem = document.getElementById('errorMessage');
  const calculateButton = document.getElementById('calculateButton');

  if (!profileUrl) {
      errorMessageElem.textContent = 'Please enter a valid profile URL';
      return;
  }

  calculateButton.textContent = 'Calculating...';
  calculateButton.disabled = true;
  totalPointsElem.textContent = '';
  errorMessageElem.textContent = '';

  try {
      const response = await fetch(`https://arcadehelper.vercel.app/api/search?url=${encodeURIComponent(profileUrl)}`);

      if (!response.ok) {
          throw new Error('Failed to fetch badge points');
      }

      const data = await response.json();
      totalPointsElem.textContent = `Total Points: ${data.totalPoints}`;
      const badges = data.badges;
      const badgeSummary = {};
      const types = ["levels", "trivia", "special_badge" ,"certificate_zone", "skill_badge"];
      
      // Initialize the badgeSummary object with the types
      types.forEach(type => {
          badgeSummary[type] = { badges: [], count: 0, points: 0 };
      });

      // Populate the badgeSummary object with badge data
      badges.forEach(badge => {
          const { name, type, points } = badge;
          if (badgeSummary[type]) {
              badgeSummary[type].badges.push(name);
              badgeSummary[type].count += 1;
              badgeSummary[type].points += points;
          }
      });

      // Populate the dropdown with badge types
      const dropdown = document.getElementById('badgeDropdown');
      dropdown.innerHTML = '<option value="all">All Badges</option>';
      types.forEach(type => {
          const option = document.createElement('option');
          option.value = type;
          option.textContent = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
          dropdown.appendChild(option);
      });

      dropdown.addEventListener('change', function() {
          const selectedType = dropdown.value;
          if (selectedType === "all") {
              displayAllBadgeSummary();
          } else {
              displayBadgeSummary(selectedType);
          }
      });

      function displayBadgeSummary(type) {
          const summaryDiv = document.getElementById('badge-summary');
          summaryDiv.innerHTML = '';

          if (badgeSummary[type].count > 0) {
              // Create and append the type header
              const typeHeader = document.createElement('h3');
              typeHeader.textContent = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
              summaryDiv.appendChild(typeHeader);

              // Create and append the table of badges
              const badgeTable = document.createElement('table');
              badgeTable.classList.add('badge-table');
              const tableHeader = document.createElement('thead');
              const headerRow = document.createElement('tr');
              const th1 = document.createElement('th');
              th1.textContent = 'Badge Name';
              headerRow.appendChild(th1);
              tableHeader.appendChild(headerRow);
              badgeTable.appendChild(tableHeader);

              const tableBody = document.createElement('tbody');
              badgeSummary[type].badges.forEach(badge => {
                  const row = document.createElement('tr');
                  const badgeCell = document.createElement('td');
                  badgeCell.textContent = badge;
                  row.appendChild(badgeCell);
                  tableBody.appendChild(row);
              });
              badgeTable.appendChild(tableBody);
              summaryDiv.appendChild(badgeTable);
          }
      }

      function displayAllBadgeSummary() {
          const summaryDiv = document.getElementById('badge-summary');
          summaryDiv.innerHTML = '';

          // Create and append combined sections for each badge type
          types.forEach(type => {
              if (badgeSummary[type].count > 0) {
                  // Create and append the type header
                  const typeHeader = document.createElement('h3');
                  typeHeader.textContent = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
                  summaryDiv.appendChild(typeHeader);

                  // Create and append the table of badges
                  const badgeTable = document.createElement('table');
                  badgeTable.classList.add('badge-table');
                  const tableHeader = document.createElement('thead');
                  const headerRow = document.createElement('tr');
                  const th1 = document.createElement('th');
                  th1.textContent = 'Badge Name';
                  headerRow.appendChild(th1);
                  tableHeader.appendChild(headerRow);
                  badgeTable.appendChild(tableHeader);

                  const tableBody = document.createElement('tbody');
                  badgeSummary[type].badges.forEach(badge => {
                      const row = document.createElement('tr');
                      const badgeCell = document.createElement('td');
                      badgeCell.textContent = badge;
                      row.appendChild(badgeCell);
                      tableBody.appendChild(row);
                  });
                  badgeTable.appendChild(tableBody);
                  summaryDiv.appendChild(badgeTable);
              }
          });

          // Create the summary table for all badge types
          const summaryTable = document.createElement('table');
          summaryTable.classList.add('badge-table');

          // Generate header row using innerHTML
          const headers = ['Type', 'Badge Count', 'Total Points'];
          let headerHtml = '<tr>';
          headers.forEach(headerText => {
              headerHtml += `<th>${headerText}</th>`;
          });
          headerHtml += '</tr>';
          summaryTable.innerHTML = headerHtml;

          // Generate table rows using innerHTML
          let rowsHtml = '';
          let totalBadges = 0;
          let totalPoints = 0;
          types.forEach(type => {
              if (badgeSummary[type].count > 0) {
                  const summary = badgeSummary[type];
                  totalBadges += summary.count;
                  totalPoints += summary.points;
                  rowsHtml += `
                      <tr>
                          <td>${type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ')}</td>
                          <td>${summary.count}</td>
                          <td>${summary.points}</td>
                      </tr>
                  `;
              }
          });

          // Add total row
          rowsHtml += `
              <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalBadges}</strong></td>
                  <td><strong>${totalPoints}</strong></td>
              </tr>
          `;

          summaryTable.innerHTML += rowsHtml;
          summaryDiv.appendChild(summaryTable);
      }

      // Initial display of the "All Types" summary
      dropdown.value = "all";
      displayAllBadgeSummary();

  } catch (err) {
      errorMessageElem.textContent = err.message;
  } finally {
      calculateButton.textContent = 'Calculate Points';
      calculateButton.disabled = false;
  }
});





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



const informationcards = document.querySelector(".about_arcade-cards");
const info = [
  {
    title: "Power Up Your Cloud Skills with the Google Cloud Arcade!",
    desp: "Looking for a fun and engaging way to level up your cloud expertise? Dive into the Google Cloud Arcade, a free, gamified learning platform designed to propel you towards cloud mastery!<br>The Arcade offers a vibrant world of quests, where you'll conquer hands-on labs featuring Google Cloud's most sought-after technologies like BigQuery, Firebase, and Kubernetes. Each challenge is meticulously crafted to not only test your knowledge but also build practical skills applicable to real-world scenarios.",
    desp2: "Here's why the Google Cloud Arcade is your ultimate playground for cloud learning:<br>Play Your Way to Expertise: <br>Choose from a variety of themed games, each brimming with exciting labs tailored to different skill levels. Whether you're a cloud novice or a seasoned pro, the Arcade caters to your learning jounery.<br>Earn Bragging Rights:<br> Compete with fellow cloud enthusiasts and conquer leaderboards. Rack up points, collect badges that validate your prowess, and showcase your cloud achievements to the world!ourney.<br>Unlock Valuable Rewards: <br>As you progress through the Arcade, you'll accumulate points that can be redeemed for enticing prizes. The spoils of victory await the most dedicated cloud champions!",
    desp3: "",
  }

    {
    title: "The Google Cloud Arcade is your one-stop shop for:",
    desp: "Transformative Learning: Go beyond theory and dive headfirst into practical exercises that solidify your understanding of Google Cloud's vast potential.",
    desp2: "Boosted Confidence: With each challenge overcome, your confidence in your cloud abilities will soar, empowering you to tackle complex projects with ease.",
    desp3: "A Thriving Community: Connect with a network of passionate cloud learners, share experiences, and forge valuable connections within the vibrant Google Cloud community.",
  }

    {
    title: "Ready to embark on your cloud gaming odyssey?",
    desp: "Join the Google Cloud Arcade today and transform your learning into an unforgettable adventure!",
    desp2: "",
    desp3: "", 
  }
];

const showCards3 = () => {
  let output = "";
  info.forEach(
    ({ title, desp , desp2 , desp3}) =>
      (output += `        
        <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card_info card1">
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
              ${desp3}
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
document.addEventListener("DOMContentLoaded", showCards3);
