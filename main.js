Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90

    
})
var camera = document.getElementById("camera")
Webcam.attach(camera)

function emtionpic(){
    Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML ="<img id='capture_image' src='"+data_uri+"'>"
    })
}

console.log('ml5.version',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TXiNKMRUo/model.json",modelloaded)
function modelloaded(){
    console.log("Modelloaded")
}
function predictpic(){
    img=document.getElementById("capture_image")
    
    classifier.classify(img,gotresult)
    
}
function gotresult (result) {
    
    if (result) {
        console.log(result)
        document.getElementById("emotion1").innerHTML = result[0].label;
        document.getElementById("emotion2").innerHTML = result[1].label;
    }
}

if (results[0].label == "One") {
     document.getElementById("update_emoji").innerHTML = "&#9757;"
}
if (results[0].label == "Rock") {
    document.getElementById("update_emoji").innerHTML = "&#129304;"
}
if (results[0].label == "Thumbs UP") {
    document.getElementById("update_emoji").innerHTML = "&#128077;"
}
if (results[0].label == "Peace") {
    document.getElementById("update_emoji2").innerHTML = "&#128076;"
}

