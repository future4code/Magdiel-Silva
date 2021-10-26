import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import { StyledToolbar } from "./styled"
import { goToFeedPage, goToLoginPage } from "../../router/coordinator"
import {useHistory} from "react-router"

const Header = () => {
    const history = useHistory()

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeedPage(history)} color="inherit">LabEddit</Button>
        <Button onClick={() => goToLoginPage(history)} color="inherit">Login</Button>
      </StyledToolbar>
    </AppBar>
  )
}
export default Header
