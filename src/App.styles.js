import styled from "styled-components";

// Pokeball Loader
export const Pokeball = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    min-height: 500px;
    img {
        width: 300px;
        height: 300px;
    }
`;

// App
export const MainContainer = styled.div`
    margin: auto;
    max-width: 990px;
    background-color: #3c5aa6;
`;

// Nav Bar
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DA471B;
    padding: 5px;
    border-bottom: 2px solid #FFC904;
`;

// Search Pokemon Bar
export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    width: 90%;
`;

export const SearchPokemonBarContainer = styled.div`
    width: 90%;
    display: flex;
    
    input {
        flex: 1;
        padding: 10px;
        border-radius: 3px 0 0 3px;
        border: 1px solid #000;
        border-right: none;
        outline: none;
        box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
    }
`;

export const SearchButton = styled.div`
    button {
        padding: 10px;
        border-radius: 0 3px 3px 0;
        border: 1px solid #000;
        border-left: none;
        outline: none;
        background: #3761A8;
        color: #fff;
        font-weight: 400;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
    }
`;

// Pokemon Cards
export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 250px;
    background-color: #263238;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 15px 15px 15px;
    margin-bottom: 30px;
    justify-self: center;
`;
    
export const PokemonId = styled.div`
    padding: 5px;
    background-color: #CEBF7B;
    display: inline-block;
    width: 2rem;
    border-radius: 5px 0 5px 0;
    margin-bottom: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CardImg = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 8px;
    border-radius: 5px;
    align-items: center;
    background-color: #364147;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    img {
        width: 100px;
        height: 100px;
    }
`;

export const CardName = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    color: #fff;
    margin: 10px 0 20px 0;
    text-shadow: 2px 7px 5px rgba(0,0,0,0.3);
`;

export const CardBottom = styled.h5`
    display: block;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    text-transform: capitalize;
`;

export const ShowPokemonSearched = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

// Pokedex
export const PokedexTitle = styled.h1`
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 3rem;
    text-shadow: 2px 7px 5px rgba(0,0,0,0.3);
`;

export const PokedexGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    max-width: 990px;
`;

// Pagination
export const PaginationContainer = styled.div`
    display: flex;
    justify-content: right;
    margin:  0px auto 30px;
    gap: 10px;
    width: 940px;

    div {
        color: #fff;
        font-weight: 400;
    }

    button {
        border-radius: 3px;
        border: 1px solid #000;
        outline: none;
        font-weight: 400;
        cursor: pointer;
    }
`;