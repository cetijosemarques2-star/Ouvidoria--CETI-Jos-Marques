function trocarAba(id){
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active")
  })

  document.getElementById(id).classList.add("active")
}

function toggleDark(){
  document.body.classList.toggle("dark")
}

function enviarMsg(){
  let input = document.getElementById("msgInput")
  let chat = document.getElementById("chatBox")

  if(input.value.trim() !== ""){
    let msg = document.createElement("div")
    msg.className = "msg"
    msg.textContent = input.value

    chat.appendChild(msg)
    input.value = ""

    chat.scrollTop = chat.scrollHeight
  }
}
