import styled from "styled-components";

import beansBlack from '../../assets/image/beans-black.svg'
import beans from '../../assets/image/coffee-beans-black.png'

const Nav = styled.nav `
    font-weight: 400;
`
const FooterDiv = styled.footer `
    
    margin: 0 auto;
    text-align: center;
`
const A = styled.a `
    text-decoration: none;
    color: #000000;
    font-size: 12px;
    margin-right: 40px;
`
const LineImg = styled.div `
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0; 
`

const LineAfter = styled.div `
    width: 60px;
    height: 15px;
    border-bottom: 1px solid black;
`
const LineBefore = styled.div `
    height: 15px;
    width: 60px;
    border-bottom: 1px solid black;
`

const Beans = styled.img `
    height: 30px;
    width: 29px;
    margin: 0 25px;
`
const Footer = () => {
    return (
        <FooterDiv>
            <Nav>
                <A href=''><img src={beansBlack}/>Cofee house</A>
                <A href=''>Our coffee</A>
                <A href=''>For your pleasure</A>
            </Nav>
            <LineImg>
                <LineBefore/>
                <Beans src={beans} alt='Coffe Beans'/>
                <LineAfter/>
            </LineImg>
        </FooterDiv>
    )
}

export default Footer