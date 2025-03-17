import React from 'react';
import Menu from './Menu';
import Intro from './Intro';
import Info from './Info';
import Sessoes from './Sessoes';
import Rodape from './Rodape';

const Home = () => {
    return (
        <div>
            <Menu />
            <Intro />
            <hr style={{ height: "5px", backgroundColor: "#DF1C00", border: "none" }} />
            <Info />
            <hr style={{ height: "5px", backgroundColor: "#DF1C00", border: "none" }} />
            <Sessoes />
            <hr style={{ height: "5px", backgroundColor: "#DF1C00", border: "none" }} />
            <Rodape />
        </div>
    );
}

export default Home;