import React from "react";
import * as C from "./../App.styles.js";

export const Pagination = ({ setPage, page, totalPages, handleLeftClick, handleRightClick }) => {
    return (
        <C.PaginationContainer>
            <button onClick={handleLeftClick}>⬅</button>
            <div>Página {page} de {totalPages}</div>
            <button onClick={handleRightClick}>➡</button>
        </C.PaginationContainer>
    )
}