const frmCta = document.getElementById("frm-cta");
const regexCta = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;
const vetorCta = [];

frmCta.addEventListener("submit", (e) =>{
    
    e.preventDefault();
    let inputCta = document.getElementById("inputCta"); 
    let valorInputCta = inputCta.value; 
    if(!regexCta.test(valorInputCta)){

        alert("Somente E-mail")
    }
    else {

        vetorCta.push(valorInputCta);
        console.log(vetorCta);
        
        alert("Sucesso")
        
    }

})