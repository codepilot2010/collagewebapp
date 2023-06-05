var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function start()
{
    
    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content=="take my selfie")
    {
        speak();
    }
}


    function speak()
{
    var synth=window.speechSynthesis;
    Webcam.attach('#camera');
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    
    setTimeout(function()
    {
        img_id="selfie1";
        take_snapshot();
        speak_data="taking your selfie in 10 seconds";
        var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    },5000);

    setTimeout(function()
    {
        img_id="selfie2";
        take_snapshot();
        speak_data="taking your selfie in 15 seconds";
        var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    },10000);
        
    
    setTimeout(function()
    {
        img_id="selfie3";
        take_snapshot();
    },15000);
        



}

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

        }
    });
}