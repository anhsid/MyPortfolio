function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email:document.getElementById("email").value ,
       message:document.getElementById("message").value ,
    };    



    const service  = "service_klhbio7";
    const templateID = "template_3btn16v";

    emailjs.send(serviceID,templateIDpa,params)
    .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("name").value = "";
        document.getElementById("name").value = "";
        console.log(res);    
         alert("your message sent successfully");
    }
)
.catch(err=>console.log(error));
}