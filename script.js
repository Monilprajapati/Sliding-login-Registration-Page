const loginBtn = document.querySelectorAll(".login-btn"),
  registerBtn = document.querySelectorAll(".register-btn"),
  lostPassBtn = document.querySelectorAll(".lost-pass-btn"),
  box = document.querySelector(".box"),
  loginForm = document.querySelector(".login-form"),
  registerForm = document.querySelector(".register-form"),
  lostPasswordForm = document.querySelector(".lost-password-form");

let rg_fName = document.getElementById("rg_fName"),
  rg_lName = document.getElementById("rg_lName"),
  rg_email = document.getElementById("rg_email"),
  lg_email = document.getElementById("lg_email"),
  rg_pw = document.getElementById("rg_pw"),
  lg_pw = document.getElementById("lg_pw"),
  rg_display = document.getElementById("rg_display"),
  lg_display = document.getElementById("lg_display"),
  rgSubmit = document.getElementById("rgSubmit"),
  lgSubmit = document.getElementById("lgSubmit"),
  resetBtn = document.getElementById("resetBtn"),
  forgotEmail = document.getElementById("forgotEmail");

let details = JSON.parse(localStorage.getItem("data"));

details.push(
  {
    fname: "Monil",
    lname: "Prajapati",
    email: 123,
    pw: 111,
  },
)

const validateEmail = (email) => {
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(email);
};

rgSubmit.onclick = () => {
  if (
    rg_fName.value === "" ||
    rg_lName.value === "" ||
    rg_email.value === "" ||
    rg_pw.value === "" ||
    rg_fName.value === ""
  ) {
    rg_display.innerText = "All fields are required!";
  } else {
    if (!validateEmail(rg_email.value)) {
      rg_display.innerText = "Enter the valid email!";
    } else {
      details.push({
        fname: rg_fName.value,
        lname: rg_lName.value,
        email: rg_email.value,
        pw: rg_pw.value,
      });
      localStorage.setItem("data", JSON.stringify(details));
      rg_fName.value = "";
      rg_lName.value = "";
      rg_email.value = "";
      rg_pw.value = "";
      rg_display.innerText = "You have successfully Registered!";
    }
  }
};

lgSubmit.onclick = () => {
  let condition = false;
  details = JSON.parse(localStorage.getItem("data"));
  if (lg_email.value === "" || lg_pw.value === "") {
    lg_display.innerText = "All fields are required!";
  } else {
    if (!validateEmail(lg_email.value)) {
      lg_display.innerText = "Enter the valid Email!";
    } else {
      for (let i = 0; i < details.length; i++) {
        if (
          lg_email.value === details[i].email &&
          lg_pw.value === details[i].pw
        ) {
          lg_display.innerText = "";
          alert(
            "Hey " +
              details[i].fname +
              " " +
              details[i].lname +
              " You have succesfully Loggedin!!"
          );
          condition = true;
        }
      }
      if (!condition) {
        lg_display.innerText = "User Not Found!";
      }
      lg_email.value = "";
      lg_pw.value = "";
    }
  }
};

resetBtn.onclick = () => {
  if (forgotEmail.value === "") {
    alert("Email is required");
  } else {
    if (!validateEmail(forgotEmail.value)) {
      alert("Enter the valid email");
    } else alert(" Reset password mail sent");
  }
};

registerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    box.classList.add("slide-active");
    registerForm.classList.remove("form-hidden");
    loginForm.classList.add("form-hidden");
    lostPasswordForm.classList.add("form-hidden");
  });
});

loginBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    box.classList.remove("slide-active");
    registerForm.classList.add("form-hidden");
    loginForm.classList.remove("form-hidden");
    lostPasswordForm.classList.add("form-hidden");
  });
});

lostPassBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    registerForm.classList.add("form-hidden");
    loginForm.classList.add("form-hidden");
    lostPasswordForm.classList.remove("form-hidden");
  });
});
