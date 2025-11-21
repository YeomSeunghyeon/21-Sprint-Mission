const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const passwordInput=document.getElementById("passwordInput");
const passwordError=document.getElementById("passwordError");
const nicknameInput=document.getElementById("nicknameInput");
const nicknameError=document.getElementById("nicknameError");
const passwordCheckInput=document.getElementById("passwordCheckInput");
const passwordCheckError=document.getElementById("passwordCheckError");
const signupButton=document.getElementById("signupButton");

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

  checksignupButton()
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
    checksignupButton()
});
nicknameInput.addEventListener("blur",()=>{
  const value=nicknameInput.value.trim();
  
  if(!value){
    nicknameInput.classList.add("inputError");
    nicknameError.textContent="닉네임을 입력해주세요.";
  }else{
  nicknameInput.classList.remove("inputError");
  nicknameError.textContent="";
  };
  checksignupButton()
});
passwordCheckInput.addEventListener("blur",()=>{
  const password=passwordInput.value.trim();
  const passwordcheck=passwordCheckInput.value.trim();

  if(password!==passwordcheck){
   passwordCheckInput.classList.add("inputError");
   passwordCheckError.textContent="비밀번호가 일치하지 않습니다.";
  }else{
  passwordCheckInput.classList.remove("inputError");
  passwordCheckError.textContent="";
  }
  checksignupButton()
});
function checksignupButton(){
  const emailValid=emailInput.value.trim() && !emailError.textContent;
  const passwordValid=passwordInput.value.trim() && !passwordError.textContent;
  const nicknameValid=nicknameInput.value.trim() && !nicknameError.textContent;
  const passwordCheckValid=passwordInput.value.trim()===passwordCheckInput.value.trim();
  if(emailValid&&passwordValid&&nicknameValid&&passwordCheckValid){
    signupButton.classList.remove("disabled");

  }else{
    signupButton.classList.add("disabled");
  }
}

signupButton.addEventListener("click", () => {
  if (!signupButton.classList.contains("disabled")) {
    window.location.href = "/login.html"
  }
});