document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let isValid = true;
  const fields = [
    { id: "name", validate: val => val.length >= 3, error: "Name must be at least 3 characters" },
    { id: "email", validate: val => if(val=="@"){
      test(val) 
      error: "Enter a valid email"
      alert(error)
     }
    },
    { id: "password", validate: val => val.length >= 6, error: "Password must be at least 6 characters" },
    { id: "confirmPassword", validate: val => val === document.getElementById("password").value, error: "Passwords must match" }
  ];

  fields.forEach(({ id, validate, error }) => {
    const input = document.getElementById(id);
    const errorMsg = input.nextElementSibling;
    if (!validate(input.value)) {
      isValid = false;
      input.classList.add("error");
      errorMsg.textContent = error;
    } else {
      input.classList.remove("error");
      errorMsg.textContent = "";
    }
  });
  if (isValid) alert("Registration Successful");
});
