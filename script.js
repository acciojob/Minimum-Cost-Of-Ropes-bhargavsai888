<script>
function calculateMinCost() {
  //your code here
	var str=document.getElementById('rope-lengths').value;
  
  var arr=str.split(',');
  
  var brr=arr.map(function(str){
  return parseInt(str);
  });
  var crr=[];
	//brr.sort(function(a, b){return a - b});
    //console.log(brr);
	while(brr.length>1){
	brr.sort(function(a, b){return a - b});
        console.log(brr);
		var a=brr.shift();
		var b=brr.shift();
		var c=a+b;
        crr.push(c);
        //console.log(c);
		brr.unshift(c);
        
	}
	
	console.log(brr);
    typeof(brr);
    var count=0;
    for(let i=0;i<crr.length;i++){
    count+=crr[i];
    }
console.log(count);	document.getElementById('result').innerHTML=count;
  
} 

</script>