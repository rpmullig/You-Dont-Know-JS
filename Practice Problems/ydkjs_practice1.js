/* ydkjs_practice1.js
/* 
/* Author: Robert Mulligan
/* Created: 3:51 AM 12/22/2017
/* Updated: 3:51 AM 12/22/2017/*
/*
/* Practice from book 1, chapter 1 for You Don't Know JS
/* The program takes does a simple phone purchase throuhg a loop
/* 
*/

const TAX_RATE = 0.08;
const PHONE_COST = 800.00;
const ACCESSORY_COST = 20.00;
const ACCESSORY_SPENDING_LIMIT = 75; 

var bankBalanceInput = window.prompt("What is your bank balance? "); 
var bankBalance = bankBalanceInput; 
var phoneCount = 0; 
var acceessoryCount = 0; 

console.log("Phone cost: $" + String(PHONE_COST.toFixed(2)));  

/* continues till you can't afford to buy more */
while( bankBalance >= PHONE_COST) { 
	
	bankBalance -= PHONE_COST;
	phoneCount++;
	
	var accessorySpending = 0; 
	
	/* You keep buying accessories till you either hit threshold or run out of money */ 
	while(bankBalance >= ACCESSORY_COST && accessorySpending <= ACCESSORY_SPENDING_LIMIT ) {
			bankBalance -= ACCESSORY_COST;
			acceessoryCount++; 
			accessorySpending += ACCESSORY_COST; 
	}
		
}

/* console input, which requires opening browswer console */ 
console.log("You bought " + String(phoneCount) + " phones and " + String(acceessoryCount) + " accessories."); 
console.log("You spent $" + String(Math.abs(bankBalance - bankBalanceInput).toFixed(2)) + " after you started with $" + bankBalanceInput);
console.log("Current bank balance: $" + String(bankBalance.toFixed(2))); 

