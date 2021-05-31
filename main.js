Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach('#camera')
function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OG7r9h_K5/model.json",modelloaded);
function modelloaded(){
    console.log("Model Loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Prediction 1 is"+prediction_1+"and prediction 2 is"+prediction_2;
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById("image");
    classifier.classify(img,gotresults)
}
function gotresults(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("emotion_name").innerHTML=result[0].label;
        document.getElementById("emotion_name1").innerHTML=result[1].label;
        prediction_1=result[0].label;
        prediction_2=result[1].label;
        speak()
        if (result[0].label=="Happy"){
            document.getElementById("emoji_picture").innerHTML="&#128522;";
        }
        if (result[0].label=="Angry"){
            document.getElementById("emoji_picture").innerHTML="&#128545;";
        }
        if (result[0].label=="Tasty"){
            document.getElementById("emoji_picture").innerHTML="&#128523;";
        }
        if (result[0].label=="Rich"){
            document.getElementById("emoji_picture").innerHTML="&#129297;";
        }
        if (result[0].label=="Vomiting"){
            document.getElementById("emoji_picture").innerHTML="&#129326;";
        }
        if (result[0].label=="Sleepy"){
            document.getElementById("emoji_picture").innerHTML="&#129393;";
        }
        if (result[1].label=="Happy"){
            document.getElementById("emoji_picture1").innerHTML="&#128522;";
        }
        if (result[1].label=="Angry"){
            document.getElementById("emoji_picture1").innerHTML="&#128545;";
        }
        if (result[1].label=="Tasty"){
            document.getElementById("emoji_picture1").innerHTML="&#128523;";
        }
        if (result[0].label=="Rich"){
            document.getElementById("emoji_picture1").innerHTML="&#129297;";
        }
        if (result[0].label=="Vomiting"){
            document.getElementById("emoji_picture1").innerHTML="&#129326;";
        }
        if (result[0].label=="Sleepy"){
            document.getElementById("emoji_picture1").innerHTML="&#129393;";
        }
    }
}