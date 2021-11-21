import React from 'react';
import styled from "styled-components";

function Home(props){
    const HomeContainer= styled.div`
        display: flex;
        align-items:center;
        justify-content: center;
        justify-items: center;
        width:100%;
        min-height: 450px;
        `;
    return(
        <HomeContainer>
            <p>Desenvolvido por Gustavo Henrique Krueger para o curso DevinHouse</p>
        </HomeContainer>
    );
}
export default Home;