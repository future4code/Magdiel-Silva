import React from 'react';
// import './ImagemButton.css'
import styled from 'styled-components';

const ImagemButtonContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const TamanhoImagem = styled.img `
    width: 30px;
    margin-right: 10px;
`
export default function ImagemButton(props) {
    return (
        <ImagemButtonContainer>
        <TamanhoImagem src={props.imagem}/>
        <p>{props.texto}</p>
        </ImagemButtonContainer>
    )
}



// function ImagemButton(props) {
//     return (
//         <div className="image-button-container">
//             <img src={ props.imagem }/>
//             <p>{ props.texto }</p>
//         </div>

//     )
// }

// export default ImagemButton;