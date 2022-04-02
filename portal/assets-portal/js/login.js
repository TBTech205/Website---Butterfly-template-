const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function ShowPassword() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  
  if (username == "bananabobs2004@bobcatbot.xyz" && password == "bananabobs2004") {
    window.location.href = './profile/BB2004-P78mf8Ak&ved=0ahUKEwiom4r.html'
  }
  else if (username == "dinotech@bobcatbot.xyz" && password == "littletech") {
    window.location.href = './profile/DT-6MOBFmkmOPHaRWJ2d0id.html'
  }

  else if (username == "snowman@bobcatbot.xyz" && password == "snowie") {
    window.location.href = './P78mf8Ak&ved=0ahUKEwiom4r.html'
  }
  else if (username == "DansUkVlogs@bobcatbot.xyz" && password == "DansUkVlogs/1") {
    window.location.href = './P78mf8Ak&ved=0ahUKEwiom4r.html'
  }
  else if (username == "TomT09@bobcatbot.xyz" && password == "TangoOscarMikeTango09!") {
    window.location.href = './P78mf8Ak&ved=0ahUKEwiom4r.html'
  }

  // Password Validation
  else if (username != "" && password != "") {
    alert("❌ Invalid username or password. Press 'OK' to Retry.");
    location.reload();
  }
   
})


  
//alert("✔️ You have successfully logged in. ✌️ Press 'OK' to continue.");//


