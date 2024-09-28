const modeToggleBtn = document.getElementById("modeToggle");
        const body = document.body;

        modeToggleBtn.addEventListener("click", function() {
            body.classList.toggle("dark-mode");
            if (body.classList.contains("dark-mode")) {
                modeToggleBtn.textContent = "Light Mode";
            } else {
                modeToggleBtn.textContent = "Dark Mode";
            }
        });



let submitbtn = document.getElementsByClassName("form-btn btn common-btn");
submitbtn.addEventListener("click", function(event){
  event.preventDefault()
  
})

