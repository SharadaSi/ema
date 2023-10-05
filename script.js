// ---HAMBURGER MENU TOGGLE---

const navMenu = document.querySelector(".nav-menu")
const  hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelectorAll(".nav-link");

//Fnctn to close the dropdown menu when link is clicked
const closeMenu = () => {
    navMenu.classList.remove("open");
    hamburger.classList.remove("is-active");
}

//Toggle the menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open")
    hamburger.classList.toggle("is-active")
})

// Close menu when a nav-link is clicked
navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});


// ---SERVICES SECTION -IMAGE ZOOM--- 

const img = document.querySelectorAll("img")

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


// ---SCROLL UP LABEL---

const body = document.querySelector("body")
const topLabel = document.getElementById("scroll-up-label")
console.log(topLabel);

window.addEventListener("scroll", () => {
    const vh = window.innerHeight
    const scrolled = window.scrollY
    if (scrolled > vh) {
        topLabel.style.transform = "scale(1)"
    }

    if (vh > scrolled) {
        topLabel.style.transform = "scale(0)"
    }
})

// ---SCROLL BACK TO THE TOP---

topLabel.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// ---DARK N LIGHT THEME SWITCH---

const switchMode = document.querySelector("input[type=checkbox]")
const formImage = document.getElementById("form-image")

switchMode.addEventListener("change", () => {
    if (switchMode.checked) {
        document.body.classList.add("dark-mode")
        formImage.classList.add("dark-mode")
    } else if (!switchMode.checked) {
        document.body.classList.remove("dark-mode")
        formImage.classList.remove("dark-mode")
    }
})