import React from "react";
import * as C from './../App.styles.js';

export const NavBar = () => {
    const imgUrl = 'https://www.pinclipart.com/picdir/big/379-3791327_pokemon-logos-png-vector-pokemon-logo-transparent-background.png';

    return (
        <div>
            <C.NavBarContainer>
                <img src={imgUrl} width={300} alt="pokemon logo" />
            </C.NavBarContainer>
        </div>
    )
}