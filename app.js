let string = "";
let input = document.querySelector(".calculator-screen");
let buttons = document.querySelectorAll(".calculator-keys button");



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.value;        // for calculation
    let display = button.innerText; // for showing on screen

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
        input.style.textAlign = "right";
         input.style.animation = "none";     // reset
        input.offsetHeight;                 // force reflow
        input.style.animation = "resultUp 0.6s cubic-bezier(.22,1,.36,1)";
        
        
      } catch {
        string = "";
        input.value = "Error";
      }
    }

    else if (value === "all-clear") {
      string = "";
      input.value = "";
      input.style.textAlign = "left"; 
    }

    else {
      string += value;          
      input.value += display;  //  screen shows ×
    }
  });
});

