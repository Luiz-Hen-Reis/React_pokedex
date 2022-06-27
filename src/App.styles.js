import styled from "styled-components";

// App
export const MainContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #3c5aa6;
    padding-bottom: 5rem;
    height: fit-content;
`;

// Nav Bar
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DA471B;
    padding: 5px;
`;

// Search Pokemon Bar
export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 10px 50px;
`;

export const SearchPokemonBarContainer = styled.div`
    width: 80%;
    display: flex;
    
    input {
        width: 90%;
        padding: 5px;
        border-radius: 3px;
        border: 1px solid #000;
        outline: none;
    }
`;

export const SearchButton = styled.div`
    button {
        padding: 5px;
        border-radius: 3px;
        border: 1px solid #000;
        outline: none;
        background: #3761A8;
        color: #fff;
        font-weight: 400;
        cursor: pointer;
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