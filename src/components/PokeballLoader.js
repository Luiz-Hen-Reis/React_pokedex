import React from "react";

import * as C from "./../App.styles.js";

export const PokeBallLoader = () => {
    const imgLink = 'https://i.gifer.com/4xjS.gif';
    return (
        <C.Pokeball>
            <img src={imgLink} />
        </C.Pokeball>
    )
}