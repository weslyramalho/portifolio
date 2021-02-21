import styled from "styled-components"
import React from 'react'
import { NavBar } from "../NavBar"
import { CabecalhoWrapper } from "./styles/CabecalhoWrapper"
import { Logo } from "../Logo"


export function Cabecalho() {
    return (
      <CabecalhoWrapper>
        <Logo />
       <NavBar />
  
      </CabecalhoWrapper>
  
    )
  }