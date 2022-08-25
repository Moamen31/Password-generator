let display = document.querySelector("input[type=text]")
let generate = document.querySelector("input[type=submit]")
let copy = document.querySelector(".copy-pass")
let label = document.querySelector("form label")

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_=+\|?></.,;:~`{}"


generate.addEventListener("click", (e) => {
    e.preventDefault();
    let randomPassword = ""
    for (let i = 0; i < 16; i++) {
        randomPassword += chars.charAt(
            Math.floor(Math.random() * chars.length)
        )
    }
    display.value = randomPassword
})

copy.addEventListener("click", () => {
    label.classList.add("active")
    navigator.clipboard.writeText(display.value)
    setInterval(() => {
        label.classList.remove("active")
    }, 5000)
})