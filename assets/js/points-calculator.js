const informationcards = document.querySelector(".about_pointscalculator-cards");
const info = [
  {
    title: "title",
    desp: "d--1",
    desp2: "d--2",
    desp3: "d--3",
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
  
  
  
  
  
  // document.addEventListener('contextmenu', function(e) {
  //   e.preventDefault();
  // });
  // document.addEventListener('keydown', function(e) {
  //   if (e.key === 'F12' || 
  //       (e.ctrlKey && e.shiftKey && e.key === 'I') || 
  //       (e.ctrlKey && e.shiftKey && e.key === 'J') || 
  //       (e.ctrlKey && e.key === 'U')) {
  //       e.preventDefault();
  //   }
  // });
  
  