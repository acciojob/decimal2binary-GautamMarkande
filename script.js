function decimalToBinary(num) {
  // Write your code here
	let ans = "";
	while(num!=0){
		ans = ans + num%2;
		num = num/2;
	}
	console.log(ans);
}

window.decimalToBinary = decimalToBinary;