document.addEventListener("DOMContentLoaded", ()=>{

document
.querySelector("#contactForm")
.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const data = {
        nom: document.querySelector("#nom").value,
        prenom: document.querySelector("#prenom").value,
        email: document.querySelector("#email").value,
        sujet: document.querySelector("#sujet").value,
        message: document.querySelector("#message").value
    };

    console.log(data);
    const response = await axios.post("localhost:3000/form",data);
    console.log(response);
    alert ("Message a été envoyé")
})
});