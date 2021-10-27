import axios from "axios";
import {BASE_URL} from "../constants/urls"
import {  goToFeedPage, goToLoginPage } from "../router/coordinator";



export const login = (form, clear, history, set) => {

    axios.post(`${BASE_URL}/users/login`, form)
    .then((response)=>{
      console.log(response.data.token)
      localStorage.setItem("token", response.data.token)
      clear()
      goToFeedPage(history)
      set("Logout")
    })
    .catch((error)=>{
      console.log(error)
      alert("Erro no login")
    })
  }

export const singUp = (form, clear, history) => {
  axios.post(`${BASE_URL}/users/signup`, form)
  .then((response)=>{
    console.log(response)
    localStorage.setItem("token", response.data.token)
    clear()
    goToFeedPage(history)
  })
  .catch((error)=>{
    alert("Erro no cadastro!")
  })
}

