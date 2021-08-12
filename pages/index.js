import { Fragment } from "react"
import Card1 from "../components/cards/card1"
import Card2 from "../components/cards/card2"

import Header from "../components/header/header"
import Instruction from "../components/instruction/instruction"
import Navbar from "../components/navbar/navbar"

function Home () {
  return(
    <Fragment >
      <Navbar />
      <Header />
      <Instruction />
      <Card1 /> 
      <Card2 />
    </Fragment>
  )
}

export default Home