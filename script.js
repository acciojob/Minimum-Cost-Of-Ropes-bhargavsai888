// function calculateMinCost() {
//   //your code here
// 	var str=document.getElementById('rope-lengths').value;
  
//   var arr=str.split(',');
  
//   var brr=arr.map(function(str){
//   return parseInt(str);
//   });
//   var crr=[];
	
// 	while(brr.length>1){
// 	brr.sort(function(a, b){return a - b});
      
// 		var a=brr.shift();
// 		var b=brr.shift();
// 		var c=a+b;
//         crr.push(c);
       
// 		brr.unshift(c);
        
// 	}
	
	
//     var count=0;
//     for(let i=0;i<crr.length;i++){
//     count+=crr[i];
//     }

// 	document.getElementById('result').innerHTML=count;

function calculateMinCost() {
  var str = document.getElementById('rope-lengths').value;
  var arr = str.split(',');
  var ropes = arr.map(function(str) {
    return parseInt(str);
  });

  // Helper function to get the minimum value and its index from an array
  function getMin(arr) {
    var min = arr[0];
    var minIndex = 0;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    return { value: min, index: minIndex };
  }

  var totalCost = 0;
  while (ropes.length > 1) {
    var min1 = getMin(ropes);
    ropes.splice(min1.index, 1);
    var min2 = getMin(ropes);
    ropes.splice(min2.index, 1);
    var sum = min1.value + min2.value;
    totalCost += sum;
    ropes.push(sum);
  }

  document.getElementById('result').innerHTML = totalCost;
}

} 