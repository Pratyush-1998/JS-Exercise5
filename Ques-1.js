function interest(amount,rate,year){

	// calculate principal
	let p = amount/(1 + rate * year);

	// simple interest
	let si = (p*rate*year)/100;
	console.log('Simple Interest = ',si);
}

// taking input
let amount = prompt('Enter amount ?');
let rate = prompt('Enter interest rate ?');
let year = prompt('Enter years ?');

interest(amount,rate,year); 