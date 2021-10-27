import React from "react"
import GlobalState from "./GlobalState/GlobalState"
import Router from "./router/Router"

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
    
  )
}

export default App
