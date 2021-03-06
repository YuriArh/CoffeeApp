import { Component } from 'react';

import styled from "styled-components";

const Div = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 60px;
    font-family: 'Merienda', sans-serif;
    box-sizing: border-box;
    
`

const Search = styled.div `
    display: flex;
    margin-right: 80px;
`
const SearchText = styled.p `
    margin: 5px;
    margin-right: 20px;
    font-size: 14px;
    
`
const FilterText = styled.p `
    margin: 5px;
    margin-right: 35px;
    font-size: 14px;
    
`

const SearchInput = styled.input `
    height: 30px;
    width: 180px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px; 
    border: none;
    font-family: 'Merienda', sans-serif;
    font-size: 12px;
    box-sizing: border-box;
    ::placeholder {
        text-align: center;
        padding: 0;
    }
`

const Filter = styled.div `
    display: flex;
`
const ButtonsMenu = styled.div `

`
const Button = styled.button `
    height: 30px;
    width: 75px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px 0px 0px 4px;
    border: none;
    background-color: #ffffff;
    margin-right: 5px;
    font-family: 'Merienda', sans-serif;
    font-size: 12px;
`


class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsData : [
                {name: 'Brazil'},
                {name: 'Kenya'},
                {name: 'Columbia'},
            ],
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    onFilterSelect = (filter) => {
        this.state({filter});
    }

    render() {
        const buttons = this.state.buttonsData.map(({name}) => {
            return (
                <Button 
                type="button"
                key={name}
                onClick={()=> this.props.onFilterSelect(name)}>
                    {name}
                </Button>
            )
        })
        return (
            <Div>
                <Search>
                    <SearchText>Looking For</SearchText>
                    <SearchInput placeholder={'start typing here...'}
                    value={this.state.term}
                    onChange={this.onUpdateSearch}></SearchInput>
                </Search>
                <Filter>
                    <FilterText>Or filter</FilterText>
                    <ButtonsMenu>
                        {buttons}
                    </ButtonsMenu>
                </Filter>
            </Div>
        )
    }
        
}

export default SearchFilter 