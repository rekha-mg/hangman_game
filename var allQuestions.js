 var allQuestions = [
	    {
		    question: 'What is the capital city of Australia?',
		    answer :'Melbourne', 
		    id : 0
		},
		{
		    question: 'Who won the 2014 FIFA World Cup?',
		   	answer: 'Germany',
			 id:1
		},
		{
		    question: 'What book series is authored by J.K Rowling?',
			answer: 'Harry Potter',
		 	id: 2
		},
		{	   
		    question: 'The Eiffel Tower is located in which following country?',
		    answer: 'France',
		    id: 3
		}
	];
  var str;
  var pos=-1;
  var i;
  var qno=[];
  var repeat=false;
  
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function playGame(){
		i=getRndInteger(0,4);
    str=allQuestions[i].answer;
   	  
    checkQnorepeated(i);
}
 function checkQnorepeated( k ){
   for(let j=0;j<qno.length;j++){
      if(k === qno[j]){
      repeat = true;
      }
      else{
        qno.push(i);
      }
   }
  }
  // Loop is repeated as per questions stored
  for(let n=0;n<allQuestions.length;n++){
  playGame();
  
  }
    console.log(qno);


		
    
    
  

