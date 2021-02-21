import styled from 'styled-components'
import { Cover } from '../src/components/Capa'
import { Cards } from '../src/components/cards'
import { Cabecalho } from '../src/components/commons/Cabecalho'
import Footer from '../src/components/commons/Footer'
import { Box } from '../src/components/foundation/layout/Box'
import { Grid } from '../src/components/foundation/layout/Grid'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`




function header(){
  return
}

 

export default function Home() {
  return (
<Box
 flex= {1}
 display= "flex"
 flexWrap= "wrap"
 flexDirection= "column"
 justifyContent= "space-between"
>
     <Grid.Container
     marginTop={{
       xs: '32px',
       md: '75px',
     }}
     >
       <Cover />
       <Cabecalho />
       <Cards />
       </Grid.Container>

       <Footer />
  </Box>
  )
}