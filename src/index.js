module.exports = function toReadable (number) {
	let numberOut = '';
  let map = new Map ([
	  [1, 'one'],
	  [2, 'two'],
	  [3, 'three'],
	  [4, 'four'],
	  [5, 'five'],
	  [6, 'six'],
	  [7, 'seven'],
	  [8, 'eight'],
	  [9, 'nine'],
	  [10, 'ten'],
	  [11, 'eleven'],
	  [12, 'twelve'],
	  [13, 'thirteen'],
	  [14, 'fourteen'],
	  [15, 'fifteen'],
	  [16, 'sixteen'],
	  [17, 'seventeen'],
	  [18, 'eighteen'],
	  [19, 'nineteen'],
	  [20, 'twenty'],
	  [30, 'thirty'],
	  [40, 'forty'],
	  [50, 'fifty'],
	  [60, 'sixty'],
	  [70, 'seventy'],
	  [80, 'eighty'],
	  [90, 'ninety'],
	  [100, 'hundreed']	
  ]);
	 if (number <= 20 && number !== 0) {
	numberOut = map.get(number);
 	} else if (number == 0) {
	numberOut = 'zero';
}
 		else if (number > 20 && number <= 99 && number % 10 !== 0) 
 		{
	 		let a = Math.floor(number / 10) * 10;
	 		let b = number - a;
	 		numberOut = map.get(a) + ' ' + map.get(b);
 		}
		else if (number > 20 && number <= 99 && number % 10 == 0) {
			numberOut = map.get(number);
		}
 		else if (number >= 100 && number <= 999) 
 		{
	 		let a = Math.floor(number / 100); // even hundreds
	 		let b = Math.floor(number % 100 / 10) * 10; // even dozens
			let c = number - (a * 100) - b; // units
			let d = number - (a * 100); // gross dozens
			console.log(a);
			console.log(b);
			console.log(c);
			console.log(d);
	 		if (d % 10 === 0 && number % 100 !== 0) {
			console.log('krugloye'); 
			numberOut = map.get(a) + ' ' + 'hundred' + ' ' + map.get(d);
			} else if (d <= 20 && number % 100 !== 0)	{
			console.log('do 20');
			numberOut = map.get(a) + ' hundred ' + map.get(d);
			} else if (number % 100 === 0) {
			console.log('kratno 100');
			numberOut = map.get(a) + ' ' + 'hundred';
			} else {
			numberOut = map.get(a) + ' ' + 'hundred' + ' ' + map.get(b) + ' ' + map.get(c);
			}
		}
return numberOut;
}