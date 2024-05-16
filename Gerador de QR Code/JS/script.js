const container = document.querySelector(".container")
const btnQrCode = document.querySelector("#form-qr button")

const inputQrCode = document.querySelector("#form-qr input")

const imgQrCode = document.querySelector("#code-qrcode img")

// Eventos 

// Gerar QR Code
const generateQrCode = () => {

    const inputQrCodeValue = inputQrCode.value;

    if(!inputQrCodeValue) return;

    btnQrCode.innerHTML = "Gerando codigo..."

    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputQrCodeValue}`

    imgQrCode.addEventListener("load", () => {
        container.classList.add("active")
        btnQrCode.innerHTML = "QR Code gerado!"
    })
};



btnQrCode.addEventListener("click", () => {
    

    generateQrCode()
})

inputQrCode.addEventListener("keydown", (e) => {
    
    if(e.code === "Enter"){
        generateQrCode()
    }

    
})

// Limpar área do QR Code
inputQrCode.addEventListener("keyup", () => {

    if(!inputQrCode.value){
        container.classList.remove("active")
        btnQrCode.innerHTML = "Gerar QR Code"
    }
    
})