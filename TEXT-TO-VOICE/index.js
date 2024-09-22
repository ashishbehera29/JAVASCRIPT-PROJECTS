function speak() {
    var text = document.getElementById("input").value;
    var utterance = new SpeechSynthesisUtterance(text);
     window.speechSynthesis.speak(utterance);
    } 
