import React from "react";
import { useHistory } from "react-router";
import SingUpImage from "../../assets/SingUpImage.png";
import { StyledSingUpPage, ContainerImage, } from "./styled";
import SingUpForm from "./SingUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const SingUpPage = () => {
  useUnprotectedPage()

  const history = useHistory();
  
  return (
    <StyledSingUpPage>
      <h2></h2>
      <ContainerImage src={SingUpImage} />
      <SingUpForm/>
    </StyledSingUpPage>
  );
};

export default SingUpPage