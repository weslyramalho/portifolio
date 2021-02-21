import styled from "styled-components"
import { Text } from "../../foundation/layout/Text"
import { CabecalhoWrapper } from "../Cabecalho/styles/CabecalhoWrapper"

const NavBarWrapper = styled.div`
display: block;
position: absolute;
width: 136px;
height: 67px;
right: 270px;
top: 0px;

`

export function NavBar(){
  const links =[
    {
      texto: 'Sobre Min',
      url: '/sobre',
    },
    {
      texto: 'Contato',
      url:'/conato',
    }
  ]
    return(
        <CabecalhoWrapper.NavBar>
          {links.map((link)=> {
            return (
              <li key={link.url}>
                <Text variant="smallestException" tag="a" href= {link.url}>
                  {link.texto}
                  </Text>


              </li>
            )
          })}
        </CabecalhoWrapper.NavBar>
        
    )
  }