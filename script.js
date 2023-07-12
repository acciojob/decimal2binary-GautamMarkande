function decimalToBinary(num) {
  // Write your code here
	let ans = "";
	while(num!==0){
		 ans = num % 2 + ans;
    num = Math.floor(num / 2);
	}
	
	return ans;
}

window.decimalToBinary = decimalToBinary;