function home(){
    document.getElementById("homes").style.color="rgb(33, 249, 33)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}

function program(){
    document.getElementById("programs").style.color="rgb(33, 249, 33)";
    
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("homes").style.color="white";
    

}
function plan(){
    document.getElementById("plans").style.color="rgb(33, 249, 33)";
    document.getElementById("homes").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}
function blog(){
    document.getElementById("blogs").style.color="rgb(33, 249, 33)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="white";

}
function contact(){
    document.getElementById("contacts").style.color="rgb(33, 249, 33)";
    document.getElementById("plans").style.color="white";
    document.getElementById("homes").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";

}


function btn(){
    confirm("are you sure join this page")
}

function submit(){
    let name=document.getElementById("name");
    let number=document.getElementById("number");

    if(name.value == ""){
    alert("please enter your name")
    }

     else if(number.value == ""){
        alert("please enter in number")
        return false;
    }
    
     else{
         alert("Thanks for Join : " + name.value)
         return true;
    }

}

function color(){
  var image = document.getElementById("image")
  var image1 = document.getElementById("image1")
  var image2 = document.getElementById("image2")

  image.style.color="blue"
  image.style.backgroundColor="white"
  image.style.border="1px solid white"

  image1.style.color="blue"
  image1.style.backgroundColor="white"
  image1.style.border="1px solid white"


  image2.style.color="blue"
  image2.style.backgroundColor="white"
  image2.style.border="1px solid white"
}

