function convertToRoman(num) {
  	const val = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];
  const roman = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];

  let result=''
  for(let i=0;i<val.length;i++){
	  while(num>=val[i]){
		  result+=roman[i]
	  num-=val[i]
	  }
	  
  }
document.getElementById('roman').textContent=result


return result

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(3));




// do not edit below this line
module.exports = convertToRoman
