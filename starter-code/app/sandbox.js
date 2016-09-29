function init () {
  console.log('dom loaded')
var body = document.querySelector('body')

var chat = document.createElement('div')
var info = document.createElement('info')
var image=document.createElement('img')
var user=document.createElement('div')
var time = document.createElement('div');
var  msg=document.createElement('div')

chat.classList.add('chat-message')
image.classList.add("profile-pic")
image.src=netizen42.png;
info.classList.add("info")
user.classList.add("username")
time.classList.add("timestamp")
msg.classList.add("message")
msg.textContent = "Hiiiiii"
info.appendChild('image')
info.appendChild('user')
info.appendChild('time')
info.appendChild('msg')























}
