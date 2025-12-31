var qrtext = document.querySelector('#qrtext')
var btn = document.querySelector('#btn')
var QRCODE = document.querySelector('#QRCODE')

btn.addEventListener('click',()=>{
    if(qrtext.value ===''){
        alert('enter text / website/name generate QR Code')
        return
    }
    QRCODE.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`
})