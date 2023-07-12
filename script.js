function calculateMinCost() {
  //your code here
	var str=document.getElementById('rope-lengths').value;
  
  var arr=str.split(',');
	while(arr.length>1){
		arr.sort();
		var a=arr.shift();
		var b=arr.shift();
		var c=a+b;
		arr.unshift(c);
	}
	var final=arr.join();
	console.log(final);
	document.getElementById('result').value=final;
  
}  
