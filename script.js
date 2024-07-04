const form = document.getElementById("form");
const username = document.getElementById("user-name");
const email = document.getElementById("Email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//. show error message
function ShowError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-contral error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//. show success out line

function ShowSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-contral success";
}

/////////////// refoctorin code
function checkRiquired(iputArray) {
  iputArray.forEach(function (input) {
    // console.log(input);
    if (input.value.trim() === "") {
      ShowError(input, ` ${getFiledName(input)}  is Required.`);
    } else {
      ShowSuccess(input);
    }
  });
}

////////// getFiled Name
function getFiledName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
/// chek email
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  if (re.test(input.value.trim())) {
    ShowSuccess(input);
  } else {
    ShowError(input, " Email is Not Valid!");
  }
}

//////////////// check match password

function matchPassword(input1, input2) {
  if (input1.value !== input2.value) {
    ShowError(input2, "Password do  Not Match.");
  }
}
///////////////////////// check length function

function chekckLength(input, min, max) {
  if (input.value.length < min) {
    ShowError(input, ` ${getFiledName(input)} must be at ${min}  Charactors.`);
  } else if (input.value.length > max) {
    ShowError(
      input,
      ` ${getFiledName(input)} must be less than  at ${max}  Charactors.`
    );
  } else {
    ShowSuccess(input);
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRiquired([username, email, password, password2]);
  chekckLength(username, 3, 15);
  chekckLength(password, 6, 25);
  checkEmail(email);
  matchPassword(password, password2);
});

/////////////
// if (username.value === "") {
//     ShowError(username, "User Name is Required ");
//   } else {
//     ShowSuccess(username);
//   }
//   if (email.value === "") {
//     ShowError(email, "Email is Required ");
//   } else if (!isValidEmail(email.value)) {
//     ShowError(email, "Email is Not Valid ");
//   } else {
//     ShowSuccess(email);
//   }
//   if (password.value === "") {
//     ShowError(password, "Password is Required ");
//   } else {
//     ShowSuccess(password);
//   }
//   if (password2.value === "") {
//     ShowError(password2, "password repet is Required ");
//   } else {
//     ShowSuccess(password2);
//   }
