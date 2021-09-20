import React from 'react';
// import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';


const Corpo = styled.div `
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top:30px
`
const PageContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
  margin-bottom: 10px;
`
const TextoMaior = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
const TextoMenor = styled.h3 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
function App() {
  return (
    <Corpo>
      <PageContainer>
        <TextoMaior>Dados pessoais</TextoMaior>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQFZcAhul7bfVQ/profile-displayphoto-shrink_200_200/0/1627555380990?e=1633564800&v=beta&t=M2s0CdqbCbGan59Uu7dExT8F7b-MlYFxaoAGSw6K7oo" 
          nome="Magdiel Silva" 
          descricao="Oi, eu sou o Magdiel Silva. Sou estudante de Desenvolvimento Web Full Stack na Labenu. Também sou arquiteto e músico nas horas vagas. Estou adorando front-end e gosto de codar ouvindo música instrumental."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
          icone="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-email-icon-png-image_1757854.jpg"
          item="Email"
          texto="arq.magdielsilva@gmail.com"
          />
        <CardPequeno
          icone="https://w1.pngwing.com/pngs/547/849/png-transparent-black-circle-address-symbol-font-awesome-user-interface-pointer-line-angle.png"
          item="Endereço"
          texto="Rua Miguel Barbar, 400, Vila Gustavo Correia, Carapicuíba-SP."
          />
      </PageContainer>
      <PageContainer>
        <TextoMaior>Experiências profissionais</TextoMaior>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/sync/C4D27AQF-evl-jAaeaw/articleshare-shrink_1280_800/0/1630892199057?e=1631210400&v=beta&t=kraMRfXCgDjaLQWB4FN1R56B3DHSaMFDV-1HjEbD5UA" 
          nome="MS Arquitetura e Obras" 
          descricao="Projetos de arquitetura, urbanismo e design" 
        />
      </PageContainer>
      <PageContainer>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQELOBcbm2_Q5w/company-logo_200_200/0/1616519637215?e=1639008000&v=beta&t=cxrmpb4EBfGa6t4IA4VZXaex1fxJGaxE2ecCid33ZpQ" 
          nome="CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior" 
          descricao="Bolsista de pós-graduação" 
        />
      </PageContainer>
      <PageContainer>
        <TextoMaior>Minhas redes sociais</TextoMaior>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageContainer>
      </Corpo>
  );
}

export default App;








































// function App() {
//   return (
//     <div className="App">
//       <div className="page-section-container">
//         <h2>Dados pessoais</h2>
//         <CardGrande 
//           imagem="https://media-exp1.licdn.com/dms/image/C5603AQFZcAhul7bfVQ/profile-displayphoto-shrink_200_200/0/1627555380990?e=1633564800&v=beta&t=M2s0CdqbCbGan59Uu7dExT8F7b-MlYFxaoAGSw6K7oo" 
//           nome="Magdiel Silva" 
//           descricao="Oi, eu sou o Magdiel Silva. Sou estudante de Desenvolvimento Web Full Stack na Labenu. Também sou arquiteto e músico nas horas vagas. Estou adorando front-end e gosto de codar ouvindo música instrumental."
//         />
        
//         <ImagemButton 
//           imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
//           texto="Ver mais"
//         />

//         <CardPequeno
//           icone="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-email-icon-png-image_1757854.jpg"
//           item="Email"
//           texto="arq.magdielsilva@gmail.com"
//           />

//         <CardPequeno
//           icone="https://w1.pngwing.com/pngs/547/849/png-transparent-black-circle-address-symbol-font-awesome-user-interface-pointer-line-angle.png"
//           item="Endereço"
//           texto="Rua Miguel Barbar, 400, Vila Gustavo Correia, Carapicuíba-SP."
//           />
          
//       </div>

//       <div className="page-section-container">
//         <h2>Experiências profissionais</h2>
//         <CardGrande 
//           imagem="https://media-exp1.licdn.com/dms/image/sync/C4D27AQF-evl-jAaeaw/articleshare-shrink_1280_800/0/1630892199057?e=1631210400&v=beta&t=kraMRfXCgDjaLQWB4FN1R56B3DHSaMFDV-1HjEbD5UA" 
//           nome="MS Arquitetura e Obras" 
//           descricao="Projetos de arquitetura, urbanismo e design" 
//         />
        
//         <CardGrande 
//           imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQELOBcbm2_Q5w/company-logo_200_200/0/1616519637215?e=1639008000&v=beta&t=cxrmpb4EBfGa6t4IA4VZXaex1fxJGaxE2ecCid33ZpQ" 
//           nome="CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior" 
//           descricao="Bolsista de pós-graduação" 
//         />
//       </div>

//       <div className="page-section-container">
//         <h2>Minhas redes sociais</h2>
//         <ImagemButton 
//           imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
//           texto="Facebook" 
//         />        

//         <ImagemButton 
//           imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
//           texto="Twitter" 
//         />        
//       </div>
//     </div>
//   );
// }

// export default App;
