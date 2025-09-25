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


// --- Formulário de Cadastro de Clínica ---
const formClinica = document.getElementById("form-clinica");
const regexNomeClinica = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]{3,}$/;
const regexCNPJClinica = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
const regexEnderecoClinica = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s,.-]{5,}$/;
const regexTelefoneClinica = /^\(\d{2}\)\s\d{5}-\d{4}$/;
const regexEmailClinica = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;
const vetorClinica = [];

if (formClinica) {
    formClinica.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obter elementos dos campos pelos IDs
        const inputNomeClinica = document.getElementById("nomeClinicaInputClinica");
        const inputCNPJ = document.getElementById("cnpjInputClinica");
        const inputEndereco = document.getElementById("enderecoInputClinica");
        const inputTelefone = document.getElementById("telefoneInputClinica");
        const inputEmail = document.getElementById("emailInputClinica");
        const selectEspecialidade = document.getElementById("especialidadeInputClinica");
        const selectArea = document.getElementById("areaInputClinica");
        const selectMedico = document.getElementById("medicoResponsavelInputClinica");

        // Obter valores
        const valorNomeClinica = inputNomeClinica.value.trim();
        const valorCNPJ = inputCNPJ.value.trim();
        const valorEndereco = inputEndereco.value.trim();
        const valorTelefone = inputTelefone.value.trim();
        const valorEmail = inputEmail.value.trim();
        const valorEspecialidade = selectEspecialidade.value;
        const valorArea = selectArea.value;
        const valorMedico = selectMedico.value;

        // Validações
        if (!regexNomeClinica.test(valorNomeClinica)) {
            alert("Nome da clínica inválido. Deve conter pelo menos 3 caracteres.");
            return;
        } else if (!regexCNPJClinica.test(valorCNPJ)) {
            alert("CNPJ inválido. Use o formato XX.XXX.XXX/XXXX-XX");
            return;
        } else if (!regexEnderecoClinica.test(valorEndereco)) {
            alert("Endereço inválido. Deve conter pelo menos 5 caracteres.");
            return;
        } else if (!regexTelefoneClinica.test(valorTelefone)) {
            alert("Telefone inválido. Use o formato (00) 00000-0000");
            return;
        } else if (!regexEmailClinica.test(valorEmail)) {
            alert("E-mail inválido");
            return;
        } else if (valorEspecialidade === "") {
            alert("Selecione uma especialidade");
            return;
        } else if (valorArea === "") {
            alert("Selecione uma área geográfica");
            return;
        } else if (valorMedico === "") {
            alert("Selecione um médico responsável");
            return;
        }

        // Sucesso - armazenar dados
        vetorClinica.push({
            nomeClinica: valorNomeClinica,
            cnpj: valorCNPJ,
            endereco: valorEndereco,
            telefone: valorTelefone,
            email: valorEmail,
            especialidade: valorEspecialidade,
            area: valorArea,
            medicoResponsavel: valorMedico
        });

        console.log(vetorClinica);
        alert("Clínica cadastrada com sucesso!");
        formClinica.reset();
    });
}
// --- Fim Formulário de Cadastro de Clínica ---

// --- Formulário de Consulta (página de marcar consulta) ---
const formConsulta = document.querySelector(".appointment-form");
const regexNomeConsulta = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/;
const regexTelefoneConsulta = /^\(\d{2}\)\s\d{5}-\d{4}$/;
const regexCPFConsulta = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const regexDataConsulta = /^\d{2}\/\d{2}\/\d{4}$/;
const regexEmailConsulta = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;
const vetorConsulta = [];

if (formClinica) {
    formClinica.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Obter elementos dos campos pelos IDs
        let inputNomeClinica = document.getElementById("nomeClinicaInputClinica");
        let inputCNPJ = document.getElementById("cnpjInputClinica");
        let inputEndereco = document.getElementById("enderecoInputClinica");
        let inputTelefone = document.getElementById("telefoneInputClinica");
        let inputEmail = document.getElementById("emailInputClinica");
        let selectEspecialidade = document.getElementById("especialidadeInputClinica");
        let selectArea = document.getElementById("areaInputClinica");
        let selectMedico = document.getElementById("medicoResponsavelInputClinica");

        // Obter valores
        let valorNomeClinica = inputNomeClinica.value.trim();
        let valorCNPJ = inputCNPJ.value.trim();
        let valorEndereco = inputEndereco.value.trim();
        let valorTelefone = inputTelefone.value.trim();
        let valorEmail = inputEmail.value.trim();
        let valorEspecialidade = selectEspecialidade.value;
        let valorArea = selectArea.value;
        let valorMedico = selectMedico.value;

        // Validações
        if (!regexNomeClinica.test(valorNomeClinica)) {
            alert("Nome da clínica inválido. Deve conter pelo menos 3 caracteres.");
            return false;
        } else if (!regexCNPJClinica.test(valorCNPJ)) {
            alert("CNPJ inválido. Use o formato XX.XXX.XXX/XXXX-XX");
            return false;
        } else if (!regexEnderecoClinica.test(valorEndereco)) {
            alert("Endereço inválido. Deve conter pelo menos 5 caracteres.");
            return false;
        } else if (!regexTelefoneClinica.test(valorTelefone)) {
            alert("Telefone inválido. Use o formato (00) 00000-0000");
            return false;
        } else if (!regexEmailClinica.test(valorEmail)) {
            alert("E-mail inválido");
            return false;
        } else if (valorEspecialidade === "") {
            alert("Selecione uma especialidade");
            return false;
        } else if (valorArea === "") {
            alert("Selecione uma área geográfica");
            return false;
        } else if (valorMedico === "") {
            alert("Selecione um médico responsável");
            return false;
        } else {
            // Sucesso - armazenar dados
            vetorClinica.push({
                nomeClinica: valorNomeClinica,
                cnpj: valorCNPJ,
                endereco: valorEndereco,
                telefone: valorTelefone,
                email: valorEmail,
                especialidade: valorEspecialidade,
                area: valorArea,
                medicoResponsavel: valorMedico
            });
            
            console.log(vetorClinica);
            alert("Clínica cadastrada com sucesso!");
            
            // Limpar formulário
            formClinica.reset();
            return false;
            
        }
    });
}


