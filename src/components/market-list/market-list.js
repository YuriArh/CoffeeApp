import styled from "styled-components";

import MarketItem from "../market-item/market-item";

const Ul = styled.ul `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    box-sizing: border-box;
    margin: 60px auto;
    width: 800px;
    padding: 0;
    grid-column-gap: 70px;
    grid-row-gap: 60px;
`

const MarketList = () => {
    return (
        <Ul>
            <MarketItem/>
            <MarketItem/>
            <MarketItem/>
            <MarketItem/>
            <MarketItem/>
            <MarketItem/>
        </Ul>
    )
}

export default MarketList