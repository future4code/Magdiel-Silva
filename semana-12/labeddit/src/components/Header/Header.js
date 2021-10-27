import React, {useContext, useState} from "react"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import { StyledToolbar } from "./styled"
import { goToFeedPage, goToLoginPage } from "../../router/coordinator"
import {useHistory} from "react-router"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"

const Header = () => {
    const history = useHistory()
    const {states, seters} = useContext(GlobalStateContext)

    const logout = () => {
      localStorage.removeItem("token")
    }
  
    const token = localStorage.getItem("token");


    const rightButtonAction = () => {
      if (token){
        console.log("estou aqui oi")
        logout()
        seters.setRightButtonText("Login")
        goToLoginPage(history)
      } else{
        goToLoginPage(history)
      }
    }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeedPage(history)} color="inherit">LabEddit</Button>
       
        <Button onClick={rightButtonAction} color="inherit">{states.rightButtonText}</Button>
      </StyledToolbar>
    </AppBar>
  )
}
export default Header
