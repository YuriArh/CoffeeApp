import styled from 'styled-components';

import beans from '../../assets/image/coffee-beans.svg'
import img from '../../assets/image/coffee-shop.png';

const StyledHeader = styled.header `
    font-family: 'Merienda', sans-serif;
    
    background-image: url(${img});
    height: 260px;
    color: #ffffff;
`
const H1 = styled.h1 `
    text-align: center;
    margin-top: 70px;
    font-size: 40px;
    font-weight: 700;
`
const A = styled.a `
    text-decoration: none;
    color: #ffffff;
    font-size: 12px;
    margin-right: 40px;
`

const Nav = styled.nav `
    padding-top: 30px;
    padding-left: 150px;
    font-weight: 400;
`

const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <A href=''><img src={beans}/>Cofee house</A>
                <A href=''>Our coffee</A>
                <A href=''>For your pleasure</A>
            </Nav>
            <H1>
                Our coffee
            </H1>
        </StyledHeader>
    )
}

export default Header