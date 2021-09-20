import React from "react";
// import './CardPequeno.css'
import styled from 'styled-components';

const SmallcardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;

`
const TamanhoImagem = styled.img `
    width: 20px;
    margin-right: 10px;

`
const Div = styled.div`
    display: flex;
    align-items: center;

`

export default function CardPequeno(props) {
    return (
        <SmallcardContainer>
        <TamanhoImagem src={props.icone}/>
        <Div>
            <h4>{props.item}</h4>
            <p>{props.texto}</p>
        </Div>


        </SmallcardContainer>
    )
}

// function CardPequeno(props) {
//     return (
//         <div className="smallcard-container">
//             <img src={props.icone} />
//             <div>
//                 <h4>{props.item}</h4>
//                 <p>{props.texto}</p>
//             </div>
//         </div>
//     )

// }

// export default CardPequeno;

