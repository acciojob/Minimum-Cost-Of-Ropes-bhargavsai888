function calculateMinCost() {
  //your code here
	var str=document.getElementById('rope-lengths').value;
  
  var arr=str.split(',');
  
  var brr=arr.map(function(str){
  return parseInt(str);
  });
  var crr=[];
	
	while(brr.length>1){
	brr.sort(function(a, b){return a - b});
      
		var a=brr.shift();
		var b=brr.shift();
		var c=a+b;
        crr.push(c);
       
		brr.unshift(c);
        
	}
	
	
    var count=0;
    for(let i=0;i<crr.length;i++){
    count+=crr[i];
    }

	document.getElementById('result').innerHTML=count;
  
} 