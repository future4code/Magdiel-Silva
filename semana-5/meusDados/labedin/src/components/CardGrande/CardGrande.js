import React from 'react';
// import './CardGrande.css';
import styled from 'styled-components';

const BigcardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    height: 200px;
`
const TamanhoImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`
const TítuloNome = styled.h4 `
    margin-bottom: 15px;
`
const Div = styled.div`
    display: flex;
    flex-direction: columm;
    justify-items: flex-start;
`
export default function CardGrande(props) {
    return (
        <BigcardContainer>       
        <TamanhoImagem src={props.imagem}/>
        <Div>
            <TítuloNome>{props.nome}</TítuloNome>
            <p>{props.descricao}</p>
        </Div>
        </BigcardContainer>
    )
}


// function CardGrande(props) {
//     return (
//         <div className="bigcard-container">
//             <img src={ props.imagem } />
//             <div>
//                 <h4>{ props.nome }</h4>
//                 <p>{ props.descricao }</p>
//             </div>
//         </div>
//     )
// }

// export default CardGrande;