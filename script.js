// ---HAMBURGER MENU---

const navMenu = document.querySelector(".nav-menu")
const  hamburger = document.querySelector(".hamburger")


hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open")
    hamburger.classList.toggle("is-active")
})

// ---SERVICES SECTION -IMAGE ZOOM--- 

const img = document.querySelectorAll("img")
console.log(img)

img.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.2)"
    })
})

img.forEach((element) => {
    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)"
    })
})

// ---FOCUS ON FORM ON SCROLL---

const focus = document.getElementsByTagName('input')[0].focus()

// ---FORM VERIFICATION---

const form = document.getElementById("form")
const firstName = document.getElementById("person-name")
const lastName = document.getElementById("person-surname")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("confirm-password")
const termsCond = document.getElementById("terms-conditions")
const newsletter = document.getElementById("newsletter")

const notifName = document.querySelector(".notif-name")
const notifSurname = document.querySelector(".notif-surname")
const notifPhone = document.querySelector(".notif-phone")
const notifEmail = document.querySelector(".notif-email")
const notifPass = document.querySelector(".notif-password")
const notifPassConf = document.querySelector(".notif-password-confirm")
const notifPassMatch = document.querySelector(".notif-password-match")
const notifTerms = document.querySelector(".notif-terms")
const notifBlank = document.querySelector(".notif-blank")
 

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (firstName.value === "") {
        notifName.style.display = "block"
    } else {
        notifName.style.display = "none"
    }

    if (lastName.value === "") {
        notifSurname.style.display = "block"
    } else {
        notifSurname.style.display = "none"
    }

    if (phone.value === "") {
        notifPhone.style.display = "block"
    } else {
        notifPhone.style.display = "none"
    }

    if (email.value === "") {
        notifEmail.style.display = "block"
    } else {
        notifEmail.style.display = "none"
    }

    if (password.value === "") {
        notifPass.style.display = "block"
    } else {
        notifPass.style.display = "none"
    }

    if (passwordConfirm.value === "") {
        notifPassConf.style.display = "block"
    } else {
        notifPassConf.style.display = "none"
    }

    if (password.value !== passwordConfirm.value) {
        notifPassMatch.style.display = "block"
        notifBlank.style.display = "block"
    } else {
        notifPassMatch.style.display = "none"
        notifBlank.style.display = "none"
    }

    if (!termsCond.checked) {
        notifTerms.style.display = "block"
    } else if (termsCond.checked) {
        notifTerms.style.display = "none"
    }
})

// ---PASSWORD MATCH---

passwordConfirm.addEventListener("input", () => {
    if (passwordConfirm.value.length >= 8 && password.value != passwordConfirm.value){
        notifPassMatch.style.display = "block"
    } else if (passwordConfirm.value.length >= 8 && password.value == passwordConfirm.value) {
        notifPassMatch.style.display = "none"
    }
})

