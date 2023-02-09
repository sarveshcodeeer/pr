
song1 = "" ; 
song = "" ; 
lwx = 0 ; 
lwy = 0 ; 
rwx = 0; 
rwy = 0 ; 
score1 = 0 ;
score2 = 0 ; 
st = "" ; 
st1 = "" ; 
function preload() {
    song = loadSound("hi.mp3") ; 
    song1 = loadSound("ho.mp3") ; 
}

    function setup() {
    
    canvas = createCanvas(300 , 300) ;
    canvas.center() ;
    video = createCapture(VIDEO) ; 
    video.size(300 , 300) ; 
    video.hide() ;
    pes = ml5.poseNet(video , modelLoaded) ; 
    pes.on( 'pose' , gotPoses) ; 
    } ; 



function modelLoaded() {
    console.log("model has loaded commander")
} ; 
function gotPoses(results)  {

    if(results.length>0){
        console.log(results) ; 
        
     score1 = results[0].pose.keypoints[9].score  ;
     score2 = results[0].pose.keypoints[10].score  ;
   lwx = results[0].pose.leftWrist.x ; 
    lwy = results[0].pose.leftWrist.y ; 
    rwx = results[0].pose.rightWrist.x ; 
    rwy = results[0].pose.rightWrist.y ; 
    
    } ; 
    } ; 

    function draw() {

        image(video , 0 , 0 , 300 , 300) ;
        st = song.isPlaying() ;  
        st1= song1.isPlaying() ; 
    fill("red") ; 
stroke("blue") ; 

        

        if(score1 > 0.2) {

circle(lwx , lwy , 20 ) ; 
song1.stop() ; 
if(st== false ){
song.play() ;
document.getElementById("hi").innerHTML = "song played is Can't stop this feeling"  ; 

} ; 
        } ; 

        

        if(score2 > 0.2) {

circle(rwx , rwy , 20 ) ; 
song.stop() ; 
if(st1== false ){
song1.play() ;
document.getElementById("hi").innerHTML = "song played is worth nothing"  ; 

} ; 
        } ;   
    } ; 