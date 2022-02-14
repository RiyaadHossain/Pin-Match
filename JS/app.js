/*  =============== Get All Variables =============== */
const pin_Input = document.getElementById("pin-input")
const pin_Display = document.getElementById("pin-display")
const number_Btn = document.getElementById("number-btn")
const error = document.getElementById("error")
const succeed = document.getElementById("succeed")

// =============== Generate Pin ===============
function genPin(){
    let random = Math.round(Math.random() * 10000)
    if(random.toString().length < 4){
        return genPin()
    } else{
        pin_Input.value = random
    }
}


// Number Button 
number_Btn.addEventListener("click", (ev) => {
    let btn_Value = ev.target.innerText
    if(btn_Value != "C" && btn_Value != "<" && btn_Value != "Submit"){
        pin_Display.value += btn_Value
    } else if(btn_Value == "C"){
        pin_Display.value = ""
    }
})

// =============== Submit Pin ===============
function submitPin(){
    if(pin_Input.value == pin_Display.value){
        succeed.style.display = "block"
        error.style.display = "none"
    } else{
        succeed.style.display = "none"
        error.style.display = "block"
    }
    pin_Display.value = ""
}


