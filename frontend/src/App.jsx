import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home/Home";
import Termo from "./components/Cadastro/Termo";
import Cadastro from "./components/Cadastro/Cadastro";
import DeficienciaPage from "./components/Deficiencias/DeficienciaPage";

import amputacao from "./components/Pages/fisicas/Amputacao";
import nanismo from "./components/Pages/fisicas/Nanismo";
import plegia from "./components/Pages/fisicas/Plegia";
import poliomelite from "./components/Pages/fisicas/Poliomelite";
import cegueira from "./components/Pages/sensoriais/Cegueira";
import surdez from "./components/Pages/sensoriais/Surdez";
import down from "./components/Pages/intelectuais/Down";
import cri from "./components/Pages/intelectuais/Cri";
import angelman from "./components/Pages/intelectuais/Angelman";
import williams from "./components/Pages/intelectuais/Williams";
import tdah from "./components/Pages/neurodivergentes/TDAH";
import autismo from "./components/Pages/neurodivergentes/Autismo";
import dislexia from "./components/Pages/neurodivergentes/Dislexia";

import Chat from "./components/Chat/Chat";

const componentsMap = {
    amputacao, nanismo, plegia, poliomelite, cegueira, surdez,
    down, cri, angelman, williams, tdah, autismo, dislexia
};

const DynamicComponent = () => {
    const { deficiencia } = useParams();
    const Component = componentsMap[deficiencia];
    return Component ? <Component /> : <h1>Página não encontrada</h1>;
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/termo" element={<Termo />} />
                <Route path="/cad" element={<Cadastro />} />
                <Route path="/:tipo" element={<DeficienciaPage />} />
                <Route path="/:tipo/:deficiencia" element={<DynamicComponent />} />
                <Route path="/chat/:tipo" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;