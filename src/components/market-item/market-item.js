import styled from "styled-components";

import marketImg from '../../assets/image/market-item.png';

const Button = styled.button `
    box-sizing: border-box;
    width: 220px;
    height: 260px;
    background-color: #ffffff;
    border: none;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    padding: 0;
`

const Img = styled.img `
    margin-top: 37px;
`
const DivText = styled.div `
    font-family: 'Merienda', sans-serif;
    text-align: end;
    font-size: 14px;
    margin: 14px 25px 22px 23px;
`

const ItemName = styled.p `
    margin: 0 0 9px 0;
    padding: 0;
`

const ItemCountry = styled.p `
    margin: 0 0 9px 0;
    padding: 0;
`

const ItemPrice = styled.p `
    margin: 0 0 9px 0;
    padding: 0;
    font-weight: 700;
`

const MarketItem = (props) => {
    const {name, price, country} = props;
    return (
        <Button>
            <Img src={marketImg}></Img>
            <DivText>
                <ItemName>{name}</ItemName>
                <ItemCountry>{country}</ItemCountry>
                <ItemPrice>{price}$</ItemPrice>
            </DivText>
        </Button>
    )
}

export default MarketItem 