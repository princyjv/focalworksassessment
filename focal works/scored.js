
// comma and full stop are considering as characters from the given data

// the lengths of months and calendar is greater than 7 so the points should be counted as 3 instead of 1.

// The percentage  mentioned in the question is 37.5% and after calculating actual percentage  is 31.5% .Here the answers are not accurate because the lengths misrepresented

var c=["There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year.",
                "There are Twenty-Four hours in a day. A year has 14 months."];


 var regExp=/[0-9]/g ,score=[],percentage=0;
//loop for array c 
for(var j=0;j<c.length;j++)
{
  var res=0;
  var output=c[j].split(" ");
  //loop for each string assigning score
  for(var i=0; i<output.length; i++){
 
  if(output[i].match(regExp)&&((output[i]==12)||(output[i]==30) )){
   
        res= res+4;
  }
else if((output[i].length) > 7){
   res= res + 3;
 
  }
  else if((output[i].length) >=5 && (output[i].length) <=7 ){
    res = res+1;
   
  }
   
 }
//maxPossibleScore and point score is pushed in score array 
  score.push(res); 

  //loop for the output
for( var i=1;i<score.length;i++) {
 percentage= score[i]/score[i-1] * 100;
 console.log(`MaxPossibleScore : ${score[0]}\n PointScored : ${score[1]}\nPercentageRatio : ${percentage.toFixed(1)}%`);

}

}



  
  
  


  