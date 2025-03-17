import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Cadastro.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [idade, setIdade] = useState("");
    const [errors, setErrors] = useState({ nome: false, cpf: false, idade: false });
    const [errorMessage, setErrorMessage] = useState(""); // Armazena erro do backend
    const navigate = useNavigate();

    const validarCPF = (cpf) => cpf.length === 11 && !isNaN(cpf);

    const validarIdade = (dataNascimento) => {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);

        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth();
        const mesNascimento = nascimento.getMonth();
        const diaAtual = hoje.getDate();
        const diaNascimento = nascimento.getDate();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade >= 18;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errors };

        if (name === "nome") {
            setNome(value);
            newErrors.nome = value.trim() !== "" && value.trim().length < 3;
        } else if (name === "cpf") {
            setCpf(value);
            newErrors.cpf = value.trim() !== "" && !validarCPF(value);
        } else if (name === "idade") {
            setIdade(value);
            newErrors.idade = value.trim() !== "" && !validarIdade(value);
        }

        setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Limpa mensagem de erro antes da requisição

        if (!errors.nome && !errors.cpf && !errors.idade) {
            try {
                const response = await axios.post("http://localhost:5000/cadPost", {
                    nome,
                    cpf,
                    idade
                });

                if (response.status === 200) {
                    alert("Cadastro realizado com sucesso!");
                    navigate("/"); // Redireciona para a página inicial
                }
            } catch (error) {
                if (error.response) {
                    setErrorMessage(error.response.data.message || "Erro ao cadastrar.");
                } else {
                    setErrorMessage("Erro ao conectar com o servidor.");
                }

                // Esconde o erro após 3 segundos
                setTimeout(() => setErrorMessage(""), 3000);
            }
        }
    };

    return (
        <div className={styles.container2}>
            <button className={styles.thisButton} onClick={() => navigate("/")}>Voltar</button>
            <br /> <br />
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.centro}>Faça o seu cadastro para utilizar o fórum</h1>

                <div className={styles["input-group"]}>
                    <label htmlFor="nome">
                        <i className="fas fa-user"></i> Nome Completo
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome completo"
                        required
                    />
                    <p className={errors.nome ? "show-error" : ""} id="nomeerro">
                        {errors.nome && "Digite um nome válido"}
                    </p>
                </div>

                <div className={styles["input-group"]}>
                    <label htmlFor="cpf">
                        <i className="fas fa-id-card"></i> CPF
                    </label>
                    <input
                        type="number"
                        id="cpf"
                        name="cpf"
                        value={cpf}
                        onChange={handleChange}
                        placeholder="00000000000"
                        required
                    />
                    <p className={errors.cpf ? "show-error" : ""} id="cpferro">
                        {errors.cpf && "Digite um CPF válido"}
                    </p>
                </div>

                <div className={styles["input-group"]}>
                    <label htmlFor="idade">
                        <i className="fas fa-calendar-alt"></i> Data de Nascimento
                    </label>
                    <input
                        type="date"
                        id="idade"
                        name="idade"
                        value={idade}
                        onChange={handleChange}
                        required
                    />
                    <p className={errors.idade ? "show-error" : ""} id="idadeerro">
                        {errors.idade && "Você precisa ter mais de 18 anos para se cadastrar"}
                    </p>
                </div>

                {errorMessage && <p className="show-error">{errorMessage}</p>}

                <button className={styles.thisButton} type="submit">Cadastrar-se</button>
            </form>
        </div>
    );
};

export default Cadastro;