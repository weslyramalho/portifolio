import styled from "styled-components"
import React from 'react'

const FooterWrapper = styled.footer`
position: absolute;
width: 1440px;
height: 68px;
left: 0px;
top: 2225px;

background: #FFF8E6;
`
export default function Footer(){
    return (
      <FooterWrapper>
        <img></img>
        <img></img>
        <img></img>
      </FooterWrapper>
    )
  }