function login(){

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("infoPage").style.display = "block";
    }
    else{
        document.getElementById("error").innerText = "Invalid Login";
    }
}

function logout(){
    document.getElementById("infoPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}