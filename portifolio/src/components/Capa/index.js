import styled from "styled-components"

const CoverWrapper2 = styled.img`
position: absolute;
padding-top: 0px;
margin-top: -110px;
transform: rotate(30 deg);
width: 479.81px;
height: 719.39px;
left: 0px;
top: 0px;
`
const CoverWrapper = styled.img`

position: absolute;
width: 479.81px;
height: 719.39px;
margin-right: 0px;
left: 800px;
top: 180px;
transform: rotate(30 deg);
`
const TextCoverWrapper = styled.text`
position: absolute;
width: 800px;
height: 108px;
left: 300px;
top: 300px;

font-family: Fira Sans Condensed;
font-style: normal;
font-weight: normal;
font-size: 90px;
line-height: 108px;
/* identical to box height */

text-align: center;
text-transform: uppercase;

color: #000000;

`
const TextPortifolio = styled.h1`
position: absolute;
width: 166px;
height: 58px;
left: 637px;
top: 350px;

font-family: Fira Sans Condensed;
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 58px;
/* identical to box height */

text-align: center;
text-transform: capitalize;

color: #000000;
`
export function Cover(){
    return (
      <div>
      <CoverWrapper2 src="/planta 2.svg" ></CoverWrapper2>
      <TextCoverWrapper>Wesly Ramalho</TextCoverWrapper>
      <TextPortifolio>Portifolio</TextPortifolio>
  
      <CoverWrapper src="/planta 1.svg" ></CoverWrapper>
      </div>
    )
  }