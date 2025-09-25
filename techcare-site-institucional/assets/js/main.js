// --- Formulário CTA (index.html) ---
const frmCta = document.getElementById("frm-cta");
const regexCta = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;
const vetorCta = [];

if (frmCta) {
    frmCta.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputCta = document.getElementById("inputCta"); 
        let valorInputCta = inputCta.value; 
        if (!regexCta.test(valorInputCta)) {
            alert("Somente E-mail");
            return false;
        } else {
            vetorCta.push(valorInputCta);
            console.log(vetorCta);
            alert("Sucesso");
            return false;
        }
    });
}


// --- Formulário Contato (contato.html) ---
const formContato = document.getElementById("form-contato");
const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ ]{3,}$/;
const regexEmail = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;
const regexTelefone = /^\(?\d{2}\)?[\s]?\d{5}-?\d{4}$/;
const vetorContato = [];

if (formContato) {
    formContato.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputNomeContato = document.getElementById("nome-frm-contato");
        let inputEmailContato = document.getElementById("email-frm-contato");
        let inputTelefoneContato = document.getElementById("telefone-frm-contato");
        let inputTextareaContato = document.getElementById("mensagem-frm-contato");

        let valorInputNomeContato = inputNomeContato.value;
        let valorInputEmailContato = inputEmailContato.value;
        let valorInputTelefoneContato = inputTelefoneContato.value;
        let valorInputTextareaContato = inputTextareaContato.value;

        if (!regexNome.test(valorInputNomeContato)) {
            alert("Nome inválido");
            return false;
        } else if (!regexTelefone.test(valorInputTelefoneContato)) {
            alert("Telefone inválido");
            return false;
        } else if (!regexEmail.test(valorInputEmailContato)) {
            alert("E-mail inválido");
            return false;
        } else {
            alert("Enviado com sucesso!");
            vetorContato.push({
                nome: valorInputNomeContato,
                email: valorInputEmailContato,
                telefone: valorInputTelefoneContato,
            });
            console.log(vetorContato);
            inputNomeContato.value = "";
            inputEmailContato.value = "";
            inputTelefoneContato.value = "";
            inputTextareaContato.value = "";
            inputNomeContato.value.focus();
            return false;

        }
    });
}
// --- Fim Formulário Contato (contato.html) ---

// --- Formulário de Consulta (página de marcar consulta) ---
const formConsulta = document.querySelector(".appointment-form");
const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/;
const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
const regexEmail = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;
const vetorConsulta = [];

if (formConsulta) {
    formConsulta.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Obter elementos dos campos
        let inputNome = document.getElementById("nomeInputConsulta");
        let inputTelefone = document.getElementById("telefoneInputConsulta");
        let inputCPF = document.getElementById("cpfInputConsulta");
        let inputData = document.getElementById("nascimentoInputConsulta");
        let inputEmail = document.getElementById("emailInputConsulta");
        let selectEspecialidade = document.getElementById("especialidadeInputConsulta");
        let selectArea = document.getElementById("areaInputConsulta");
        let selectMedico = document.getElementById("medicoInputConsulta");

        // Obter valores
        let valorNome = inputNome.value.trim();
        let valorTelefone = inputTelefone.value.trim();
        let valorCPF = inputCPF.value.trim();
        let valorData = inputData.value.trim();
        let valorEmail = inputEmail.value.trim();
        let valorEspecialidade = selectEspecialidade.value;
        let valorArea = selectArea.value;
        let valorMedico = selectMedico.value;

        // Validações
        if (!regexNome.test(valorNome)) {
            alert("Nome inválido. Deve conter pelo menos 3 caracteres alfabéticos.");
            return false;
        } else if (!regexTelefone.test(valorTelefone)) {
            alert("Telefone inválido. Use o formato (00) 00000-0000");
            return false;
        } else if (!regexCPF.test(valorCPF)) {
            alert("CPF inválido. Use o formato 000.000.000-00");
            return false;
        } else if (!regexData.test(valorData)) {
            alert("Data inválida. Use o formato DD/MM/AAAA");
            return false;
        } else if (!regexEmail.test(valorEmail)) {
            alert("E-mail inválido");
            return false;
        } else if (valorEspecialidade === "") {
            alert("Selecione uma especialidade");
            return false;
        } else if (valorArea === "") {
            alert("Selecione uma área geográfica");
            return false;
        } else if (valorMedico === "") {
            alert("Selecione um médico");
            return false;
        } else {
            // Sucesso - armazenar dados
            vetorConsulta.push({
                nome: valorNome,
                telefone: valorTelefone,
                cpf: valorCPF,
                dataNascimento: valorData,
                email: valorEmail,
                especialidade: valorEspecialidade,
                area: valorArea,
                medico: valorMedico
            });
            
            console.log(vetorConsulta);
            alert("Consulta marcada com sucesso!");
            
            // Limpar formulário (opcional)
            formConsulta.reset();
            return false;
        }
    });
}
// --- Fim Formulário de Consulta ---