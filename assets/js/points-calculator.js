const informationcards = document.querySelector(".about_pointscalculator-cards");
const info = [
  {
    title: "<b>Effortlessly Track Your Google Cloud Arcade Points with Btecky Point Calculator</b>",
    desp: "Introducing the Btecky Point Calculator, your ultimate free solution for effortlessly calculating your Google Cloud arcade points. Designed with user-friendliness in mind, this tool ensures that you can easily track and manage your points without any hassle. As a special benefit, our YouTube channel subscribers get exclusive access to this convenient tool, helping them maximize their learning and achievements in the Google Cloud arcade.<br>",
    desp2: "The Btecky Point Calculator not only tallies your arcade points but also keeps you informed about your completed skill badges and any bonus points you've earned. This comprehensive overview allows you to monitor your progress and set new goals efficiently. Whether you're aiming to earn more badges or simply want to keep an eye on your current standings, the Btecky Point Calculator provides all the necessary information in one place.",
    desp3: "<br>We are dedicated to continuously improving the Btecky Point Calculator to offer you the best service possible. Our team is constantly working on updates and enhancements to ensure that you have a seamless and rewarding experience. Join our growing community and make the most of your Google Cloud learning journey with the Btecky Point Calculator.",
  },
];

const showCards1 = () => {
  let output = "";
  info.forEach(
    ({ title, desp , desp2 , desp3}) =>
      (output += `        
        <div class="col gaap"  data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card_info card1_1">
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
document.addEventListener("DOMContentLoaded", showCards1);

















function myFunction() {
  // Declare variables
  var input, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < title.length; i++) { // Use title.length for loop
    if (
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
            const response = await fetch(`https://arcadehelper.vercel.app/api/facilitator?url=${encodeURIComponent(profileUrl)}`, {
            headers: {
                'x-api-key': 'FAC42-GCLOUD'
            }
        });

    if (!response.ok) {
      throw new Error('Failed to fetch badge points');
    }

    const data = await response.json();
    totalPointsElem.textContent = `Total Points: ${data.totalPoints}`;
    const badges = data.badges;
    const badgeSummary = {};
    let types = ["levels", "trivia", "special_badge", "certificate_zone", "skill_badge", "monsoon_badge"];

    // Initialize the badgeSummary object with the types
    types.forEach(type => {
      badgeSummary[type] = { badges: [], count: 0, points: 0 };
    });

    types.push("Digital_Leader")

    // Populate the badgeSummary object with badge data
    let digitalLeaderBadgesCount = 0;
    let digitalLeaderBadges = [];

    badges.forEach(badge => {
      const { name, type, points } = badge;

      if (type === "skill_badge" && points === 1) {
        // If it's a monsoon badge, categorize it separately
        badgeSummary["monsoon_badge"].badges.push(name);
        badgeSummary["monsoon_badge"].count += 1;
        badgeSummary["monsoon_badge"].points += points;
      } else if (type == "Digital_Leader") {
        digitalLeaderBadgesCount++;
        digitalLeaderBadges.push(name);
      } else if (badgeSummary[type]) {
        badgeSummary[type].badges.push(name);
        badgeSummary[type].count += 1;
        badgeSummary[type].points += points;
      }
    });

    let digitalLeaderBadgesPoint = (digitalLeaderBadgesCount == 6) ? 5 : 0
    
    badgeSummary["Digital_Leader"] = { badges: digitalLeaderBadges, count: digitalLeaderBadgesCount, points: digitalLeaderBadgesPoint }

    const arcadeGamesCount = badgeSummary['levels'].count;
    const triviaGamesCount = badgeSummary['trivia'].count;
    const skillBadgesCount = badgeSummary['skill_badge'].count + badgeSummary["monsoon_badge"].count;

    // Update milestone progress bars
    updateMilestoneProgress('milestone1', arcadeGamesCount, 2, triviaGamesCount, 2, skillBadgesCount, 8);
    updateMilestoneProgress('milestone2', arcadeGamesCount, 3, triviaGamesCount, 4, skillBadgesCount, 18);
    updateMilestoneProgress('milestone3', arcadeGamesCount, 5, triviaGamesCount, 6, skillBadgesCount, 28);
    updateMilestoneProgress('ultimateMilestone', arcadeGamesCount, 6, triviaGamesCount, 8, skillBadgesCount, 42);

    // Populate the dropdown with badge types
    const dropdown = document.getElementById('badgeDropdown');
    dropdown.innerHTML = '<option value="all">All Badges</option>';
    types.forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
      dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', function () {
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
          // Create an <h3> element
        const typeHeader = document.createElement('h3');

        // Transform the badge type string to capitalize each word and set as text content
        typeHeader.textContent = type
          .split('_') // Split the string at underscores
          .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
          .join(' '); // Join the words with spaces

          // Append the <h3> element to the summaryDiv
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

      const tableTitle = document.createElement('h3');
      tableTitle.textContent = 'Badge Summary';

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
          const typehead = type
           .split('_') // Split the string at underscores
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the words with spaces

    rowsHtml += `
        <tr>
                  <td>${typehead}</td>
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
      summaryDiv.appendChild(tableTitle);
      summaryDiv.appendChild(summaryTable);
    }

    dropdown.value = "all";
    displayAllBadgeSummary();

    document.querySelector(".toggler").style.display = "block";

    const showMilestoneToggle = document.getElementById('toggler-1');

    showMilestoneToggle.addEventListener('change', () => {
        document.getElementById("milestones").style.display = showMilestoneToggle.checked ? "block" : "none"
    });

    const showSummaryToggle = document.getElementById('toggler-2');

    showSummaryToggle.addEventListener('change', () => {
        document.getElementById("badge-summary").style.display = showSummaryToggle.checked ? "block" : "none"
        document.getElementById("badgeDropdown").style.display = showSummaryToggle.checked ? "block" : "none"
    });

    const togglers = ["milestoneToggle", "summaryToggle", "badgebox"];

    for (const toggle of togglers) {
      document.getElementById(toggle).style.display = "block";
    }

  } catch (err) {
    errorMessageElem.textContent = err.message;
  } finally {
    calculateButton.textContent = 'Calculate Points';
    calculateButton.disabled = false;
  }
});

  
function updateMilestoneProgress(milestoneId, arcadeGamesCount, requiredArcade, triviaGamesCount, requiredTrivia, skillBadgesCount, requiredSkillBadges) {
    const progressBar = document.getElementById(milestoneId);
    const progressText = document.getElementById(`${milestoneId}-text`);
    const progressHeader = document.getElementById(`${milestoneId}-heading`);

    if (progressHeader.textContent.endsWith("🔒") || progressHeader.textContent.endsWith("🏆")) {
      progressHeader.textContent = progressHeader.textContent.slice(0, -2);
    }

    if (!progressBar || !progressText) {
        console.error(`Cannot find progress bar or text for milestone: ${milestoneId}`);
        return;
    }

    arcadeGamesCount = Math.min(arcadeGamesCount , requiredArcade);
    triviaGamesCount = Math.min(triviaGamesCount , requiredTrivia);
    skillBadgesCount = Math.min(skillBadgesCount  , requiredSkillBadges);

    const overallProgress = (arcadeGamesCount + triviaGamesCount + skillBadgesCount) / (requiredArcade + requiredTrivia + requiredSkillBadges);
    const percentage = (overallProgress * 100).toFixed(2);

    if (percentage < 100) {
        progressHeader.textContent = progressHeader.textContent + '🔒'
    } else {
        progressHeader.textContent = progressHeader.textContent + '🏆'
    }

    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Completed (${arcadeGamesCount}/${requiredArcade} Arcade, ${triviaGamesCount}/${requiredTrivia} Trivia, ${skillBadgesCount}/${requiredSkillBadges} Skill Badge)`;
}
  
  
  
  
  
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
  
  
