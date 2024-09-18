function updateValue(id, value) {
    if (id === 'totalGuestsValue') {
        document.getElementById(id).textContent = value;
    } else {
        document.getElementById(id).textContent = value + '%';
    }
}

function calculateGeneral() {
    // Get input values
    const hoursServed = parseFloat(document.getElementById('hoursServed').value);
    const totalGuests = parseFloat(document.getElementById('totalGuests').value);
    const percentageDrinkers = parseFloat(document.getElementById('percentageDrinkers').value);
    const averageDrinkers = parseFloat(document.getElementById('averageDrinkers').value);
    const beerDrinkers = parseFloat(document.getElementById('beerDrinkers').value);
    const wineDrinkers = parseFloat(document.getElementById('wineDrinkers').value);
    const cocktailDrinkers = parseFloat(document.getElementById('cocktailDrinkers').value);
    const beerType = document.getElementById('beerType').value;
    const wineType = document.getElementById('wineType').value;

    // Calculate total number of drinks
    const totalDrinks = (totalGuests * (percentageDrinkers / 100)) * (hoursServed * averageDrinkers);

    // Calculate drinks per type
    const beerServings = totalDrinks * (beerDrinkers / 100);
    const wineServings = totalDrinks * (wineDrinkers / 100);
    const cocktailServings = totalDrinks * (cocktailDrinkers / 100);

    // Convert to cases and bottles
    const beerCases = Math.ceil(beerServings / 24); // 24 beers per case
    const wineBottles = Math.ceil(wineServings / 5); // 5 servings per wine bottle (750ml)
    const liquorBottles1750ml = Math.ceil(cocktailServings / 39.45); // 1.75L bottle has 39.45 servings of 1.5 oz

    // Display general results
    document.getElementById('generalResult').innerHTML = `
        <h2>General Results:</h2>
        <p>Beer Cases: ${beerCases} (24-pack, ${beerType})</p>
        <p>Wine Bottles (750ml): ${wineBottles} (${wineType})</p>
        <p>Liquor Bottles (1.75L): ${liquorBottles1750ml}</p>
    `;
}

function calculateLiquorBreakdown() {
    const vodkaDrinkers = parseFloat(document.getElementById('vodkaDrinkers').value);
    const bourbonDrinkers = parseFloat(document.getElementById('bourbonDrinkers').value);
    const ginDrinkers = parseFloat(document.getElementById('ginDrinkers').value);
    const tequilaDrinkers = parseFloat(document.getElementById('tequilaDrinkers').value);
    const rumDrinkers = parseFloat(document.getElementById('rumDrinkers').value);
    const specialtyDrinkers = parseFloat(document.getElementById('specialtyDrinkers').value);
    
    // Calculate servings for each liquor type
    const totalLiquorServings = 100; // Assume 100 servings total for simplicity
    const vodkaServings = totalLiquorServings * (vodkaDrinkers / 100);
    const bourbonServings = totalLiquorServings * (bourbonDrinkers / 100);
    const ginServings = totalLiquorServings * (ginDrinkers / 100);
    const tequilaServings = totalLiquorServings * (tequilaDrinkers / 100);
    const rumServings = totalLiquorServings * (rumDrinkers / 100);
    const specialtyServings = totalLiquorServings * (specialtyDrinkers / 100);

    const vodkaBottles = Math.ceil(vodkaServings / 39.45);
    const bourbonBottles = Math.ceil(bourbonServings / 39.45);
    const ginBottles = Math.ceil(ginServings / 39.45);
    const tequilaBottles = Math.ceil(tequilaServings / 39.45);
    const rumBottles = Math.ceil(rumServings / 39.45);
    const specialtyBottles = Math.ceil(specialtyServings / 39.45);

    // Display liquor breakdown
    document.getElementById('liquorResult').innerHTML = `
        <h2>Liquor Breakdown (Based on 1.75L Bottles):</h2>
        <p>Vodka Bottles: ${vodkaBottles} (1.75L) - Recommended: Tito's ($28.99), Grey Goose ($42.99)</p>
        <p>Bourbon Bottles: ${bourbonBottles} (1.75L) - Recommended: Maker's Mark ($44.99), Bulleit ($46.99)</p>
        <p>Gin Bottles: ${ginBottles} (1.75L) - Recommended: Bombay Sapphire ($31.99), Hendrick's ($59.99)</p>
        <p>Tequila Bottles: ${tequilaBottles} (1.75L) - Recommended: Jose Cuervo ($23.99), Don Julio ($79.99)</p>
        <p>Rum Bottles: ${rumBottles} (1.75L) - Recommended: Bacardi ($18.99), Captain Morgan ($17.99)</p>
        <p>Specialty Bottles: ${specialtyBottles} (1.75L) - Optional: Bailey's, Kahlua, Grand Marnier</p>
    `;
}
