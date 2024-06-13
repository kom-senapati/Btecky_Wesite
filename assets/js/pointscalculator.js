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
    } catch (err) {
        errorMessageElem.textContent = err.message;
    } finally {
        calculateButton.textContent = 'Calculate Points';
        calculateButton.disabled = false;
    }
});