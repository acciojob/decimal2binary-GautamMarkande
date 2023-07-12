function decimalToBinary(num) {
  // Write your code here
	let ans = "";
	while(num!==0){
		ans = ans + num%2;
		num = num/2;
	}
	alert(ans);
	return ans;
}

window.decimalToBinary = decimalToBinary;