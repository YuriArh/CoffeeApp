import styled from 'styled-components';

import img from '../../assets/image/girl.jpg'
import beans from '../../assets/image/coffee-beans-black.png'

const Div = styled.div `
    display: flex;
    width: 700px;
    margin-top: 70px;
    margin: 70px auto;
`

const Img = styled.img `
    margin-right: 80px;
`

const H2 = styled.h2 `
    font-family: 'Merienda', sans-serif;
    margin: 0 auto;
    font-size: 24px;
    font-weight: 400;
`
const Describe = styled.div `
    display: flex;
    flex-direction: column;
    font-family: 'Merienda', sans-serif;
    font-weight: 400;
    font-size: 14px;
    width: 350px;
`

const Beans = styled.img `
    height: 30px;
    width: 29px;
    margin: 0 25px;
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
const LineAfterAll = styled.div `
    width: 240px;
    margin: 0 auto;
    border-bottom: 1px solid black;
`

const Text = styled.p `
    text-align: center;
`

const DescribeBlock = () => {
    return (
        <div>
            <Div>
                <Img src={img} alt='girlPhoto'/>
                <Describe>
                    <H2>About our beans</H2>
                    <LineImg>
                        <LineBefore/>
                        <Beans src={beans} alt='Coffe Beans'/>
                        <LineAfter/>
                    </LineImg>
                    <Text>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    </Text>
                    <Text>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.<br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    </Text>
                </Describe>
            </Div>
            <LineAfterAll/>
        </div>
    )
}

export default DescribeBlock