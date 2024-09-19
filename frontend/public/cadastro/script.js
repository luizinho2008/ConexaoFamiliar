const checkForm = {
    nome: false,
    cpf: false,
    idade: false
};

// Função para validar CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(9))) {
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

// Função para validar idade
function isValidAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    // Se a data de nascimento ainda não teve o aniversário no ano atual
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    
    return age;
}

// Validação do nome
document.getElementById("nome").addEventListener("input", (e) => {
    const nome = e.target.value;
    if (nome.length < 3 || nome.length > 50) {
        document.getElementById("nomeerro").style.display = "block";
        checkForm.nome = false;
    } else {
        document.getElementById("nomeerro").style.display = "none";
        checkForm.nome = true;
    }
    checkButton();
});

// Validação do CPF
document.getElementById("cpf").addEventListener("input", (e) => {
    let cpf = e.target.value;
    
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    
    if (cpf.length < 11 || !isValidCPF(cpf)) {
        document.getElementById("cpferro").style.display = "block";
        checkForm.cpf = false;
    } else {
        document.getElementById("cpferro").style.display = "none";
        checkForm.cpf = true;
    }
    checkButton();
});

// Validação da idade
document.getElementById("idade").addEventListener("input", (e) => {
    const date = e.target.value;
    if (!date || isValidAge(date) < 18) {
        document.getElementById("idadeerro").style.display = "block";
        checkForm.idade = false;
    } else {
        document.getElementById("idadeerro").style.display = "none";
        checkForm.idade = true;
    }
    checkButton();
});

// Habilita ou desabilita o botão com base na validação dos campos
const checkButton = () => {
    let enable = true;

    Object.keys(checkForm).forEach(key => {
        if (!checkForm[key]) {
            enable = false;
        }
    });

    document.getElementById("button").disabled = !enable;
}