// add solution here

const facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function theBeatlesPlay(array_musicians, array_instruments) {
  var empty_array = [];
  var array_length = array_musicians.length;
  for (var i = 0; i < array_length; i ++){ 
  empty_array.push(array_musicians[i] + " plays " +  array_instruments[i]);
  }
      return empty_array;
}

function johnLennonFacts(John_facts){
  var array_length = John_facts.length;
  var empty_array = [];
  var i = 0;
  while (array_length > 0){
  empty_array.push(John_facts[i] + "!!!");
  i ++;
  }
  return empty_array;
}


/*function johnLennonFacts(facts)
{ 
  var eFacts = [];
  let i = 0;
    while (i < 4){
    eFacts.push(facts[i] + "!!!"); 
    i++;
      return eFacts;
     }
}*/
