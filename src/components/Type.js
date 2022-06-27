import React from "react";

export const Type = ({ type }) => {
    const typeColors = {
        bug: '#A1AB25', 
        dark: '#403024',
        dragon: '#756FD3',
        electric: '#F8BC28',
        fairy: '#DB95D1',
        fighting: '#823425',
        fire: '#DA390F',
        flying: '#A1BFF2',
        ghost: '#5E64AB',
        grass: '#74BE3D',
        normal: '#C0BDBE',
        rock:'#A08F64',
        ground: '#D1A955',
        poison: '#8D468B',
        steel: '#A19EA0',
        ice: '#ADE2FB',
        psychic: '#DF497B',
        water: '#388CE3'
    };


    return (
        <div style={{
            backgroundColor: `${typeColors[type]}`,
            color: '#FFF',
            borderRadius: '5px',
            padding: '0px 10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        }}>
            {type}
        </div>
    );
}