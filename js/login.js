const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const passwordInput=document.getElementById("passwordInput");
const passwordError=document.getElementById("passwordError");
const loginButton=document.getElementById("loginButton");
  emailInput.addEventListener("blur", () => {
    const value = emailInput.value.trim();


    if (!value) {
    emailInput.classList.add("inputError");
    emailError.textContent = "이메일을 입력해주세요.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    emailInput.classList.add("inputError");
    emailError.textContent = "잘못된 이메일 형식입니다.";
  } else {
    emailInput.classList.remove("inputError");
    emailError.textContent = "";
  }

  checkLoginButton();  
  });
passwordInput.addEventListener("blur",()=>{
    const value= passwordInput.value.trim();

    if(!value){
        passwordInput.classList.add("inputError");
        passwordError.textContent="비밀번호를 입력해주세요.";
 
    }

    else if(value.length<8){
        passwordInput.classList.add("inputError");
        passwordError.textContent="비밀번호를 8자 이상 입력해주세요.";
    
    }
    else{ passwordInput.classList.remove("inputError");
    passwordError.textContent="";
    }
    checkLoginButton()
});

function checkLoginButton(){
  const emailValid=emailInput.value.trim() && !emailError.textContent;
  const passwordValid=passwordInput.value.trim() && !passwordError.textContent;
  if(emailValid&&passwordValid){
    loginButton.classList.remove("disabled");

  }else{
    loginButton.classList.add("disabled");
  }
}

loginButton.addEventListener("click", () => {
  if (!loginButton.classList.contains("disabled")) {
    window.location.href = "/item.html"
  }
});