document.addEventListener("DOMContentLoaded", ()=>{

document
.getElementById("contactForm")
.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const data = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        sujet: document.getElementById("sujet").value,
        message: document.getElementById("message").value
    };

    console.log(data);
    const response = await axios.post("localhost:3000/form",data);
    alert ("Message a été envoyé")
})
});