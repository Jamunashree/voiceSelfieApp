// creating an instance for SpeechRecognition using the API
var SpeechRecognition = window.webkitSpeechRecognition;

// invoking the constructor of SpeechRecognition
var recognition = new SpeechRecognition();

// getting the reference to the textbox
var textbox = document.getElementById("textinput");

// content that we speak which is getting embedding inside the textbox
var content = "";

// continuously listen to the incoming audio through the mic
recognition.continuous = true;

// when the recognition starts, onstart callback function is executed
recognition.onstart = function(){
  console.log("Speech recognition has started")
}

// speechend call back function is being called when the recognition ends 
recognition.onspeechend = function(){
  console.log("Speech recognition has ended")
}

// incase of any errors while recognition
recognition.onerror = function(){
  console.log("There's an error. Please try again")
}

// onresult callback function is executed while getting the speech 
recognition.onresult = function(event){
  console.log("Getting the results");
  // the speech we get as the result of recognition's start function
  var current = event.resultIndex;
  // creating an instance for getting the results from SpeechRecognitionResultList object
  var transcript = event.results[current][0].transcript

  content += transcript 

  textbox.innerHTML= content
}

//starting the recognition
function speechtext(){
  if(content.length){
    content += ''
  }
  recognition.start()
}
