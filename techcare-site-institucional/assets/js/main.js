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

// Regex específicos para Clínica
const regexNomeClinica = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]{3,}$/;
const regexCNPJClinica = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
const regexEnderecoClinica = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s,.-]{5,}$/;
const regexTelefoneClinica = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
const regexEmailClinica = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const vetorClinica = [];

if (formClinica) {
    formClinica.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obter elementos pelos IDs
        const inputNomeClinica = document.getElementById("nomeClinicaInputClinica");
        const inputCNPJClinica = document.getElementById("cnpjInputClinica");
        const inputEnderecoClinica = document.getElementById("enderecoInputClinica");
        const inputTelefoneClinica = document.getElementById("telefoneInputClinica");
        const inputEmailClinica = document.getElementById("emailInputClinica");
    
        // Obter valores
        const valorNomeClinica = inputNomeClinica.value.trim();
        const valorCNPJClinica = inputCNPJClinica.value.trim();
        const valorEnderecoClinica = inputEnderecoClinica.value.trim();
        const valorTelefoneClinica = inputTelefoneClinica.value.trim();
        const valorEmailClinica = inputEmailClinica.value.trim();
    
    

        // --- Validações ---
        if (!regexNomeClinica.test(valorNomeClinica)) {
            alert("Nome da clínica inválido. Deve conter pelo menos 3 caracteres.");
            return;
        }
        if (!regexCNPJClinica.test(valorCNPJClinica)) {
            alert("CNPJ inválido. Use o formato XX.XXX.XXX/XXXX-XX");
            return;
        }
        if (!regexEnderecoClinica.test(valorEnderecoClinica)) {
            alert("Endereço inválido. Deve conter pelo menos 5 caracteres.");
            return;
        }
        if (!regexTelefoneClinica.test(valorTelefoneClinica)) {
            alert("Telefone inválido. Use o formato (00) 00000-0000");
            return;
        }
        if (!regexEmailClinica.test(valorEmailClinica)) {
            alert("E-mail inválido");
            return;
        }
        

        // --- Sucesso ---
        vetorClinica.push({
            nomeClinica: valorNomeClinica,
            cnpjClinica: valorCNPJClinica,
            enderecoClinica: valorEnderecoClinica,
            telefoneClinica: valorTelefoneClinica,
            emailClinica: valorEmailClinica,
        });

        console.log(vetorClinica);
        alert("Clínica cadastrada com sucesso!");
        formClinica.reset();
    });
}

// --- Fim Formulário de Cadastro de Clínica ---

// --- Formulário de Consulta (página de marcar consulta) ---
const formConsulta = document.getElementById("form-consulta");
const regexNomeConsulta = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/;
const regexTelefoneConsulta = /^\(\d{2}\)\s\d{5}-\d{4}$/;
const regexCPFConsulta = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const regexDataConsulta = /^\d{2}\/\d{2}\/\d{4}$/;
const regexEmailConsulta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const vetorConsulta = [];

if (formConsulta) {
    formConsulta.addEventListener("submit", (e) => {
        e.preventDefault();

        let inputNomeConsulta = document.getElementById("nomeInputConsulta");
        let inputTelefoneConsulta = document.getElementById("telefoneInputConsulta");
        let inputCPFConsulta = document.getElementById("cpfInputConsulta");
        let inputDataConsulta = document.getElementById("nascimentoInputConsulta");
        let inputEmailConsulta = document.getElementById("emailInputConsulta");
        let selectEspecialidadeConsulta = document.getElementById("especialidadeInputConsulta");
        let selectAreaConsulta = document.getElementById("areaInputConsulta");
        let selectMedicoConsulta = document.getElementById("medicoInputConsulta");

        let valorNomeConsulta = inputNomeConsulta.value.trim();
        let valorTelefoneConsulta = inputTelefoneConsulta.value.trim();
        let valorCPFConsulta = inputCPFConsulta.value.trim();
        let valorDataConsulta = inputDataConsulta.value.trim();
        let valorEmailConsulta = inputEmailConsulta.value.trim();
        let valorEspecialidadeConsulta = selectEspecialidadeConsulta.value;
        let valorAreaConsulta = selectAreaConsulta.value;
        let valorMedicoConsulta = selectMedicoConsulta.value;

        if (!regexNomeConsulta.test(valorNomeConsulta)) {
            alert("Nome inválido. Deve conter pelo menos 3 caracteres.");
            return;
        } else if (!regexTelefoneConsulta.test(valorTelefoneConsulta)) {
            alert("Telefone inválido. Use o formato (00) 00000-0000");
            return;
        } else if (!regexCPFConsulta.test(valorCPFConsulta)) {
            alert("CPF inválido. Use o formato XXX.XXX.XXX-XX");
            return;
        } else if (!regexDataConsulta.test(valorDataConsulta)) {
            alert("Data inválida. Use o formato DD/MM/AAAA");
            return;
        } else if (!regexEmailConsulta.test(valorEmailConsulta)) {
            alert("E-mail inválido");
            return;
        } else if (valorEspecialidadeConsulta === "") {
            alert("Selecione uma especialidade");
            return;
        } else if (valorAreaConsulta === "") {
            alert("Selecione uma área geográfica");
            return;
        } else if (valorMedicoConsulta === "") {
            alert("Selecione um médico");
            return;
        }

        vetorConsulta.push({
            nomeConsulta: valorNomeConsulta,
            telefoneConsulta: valorTelefoneConsulta,
            cpfConsulta: valorCPFConsulta,
            dataConsulta: valorDataConsulta,
            emailConsulta: valorEmailConsulta,
            especialidadeConsulta: valorEspecialidadeConsulta,
            areaConsulta: valorAreaConsulta,
            medicoConsulta: valorMedicoConsulta
        });

        console.log(vetorConsulta);
        alert("Consulta agendada com sucesso!");
        formConsulta.reset();
    });
}



