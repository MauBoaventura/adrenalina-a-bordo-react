import React from 'react';

function DiaSemana(props) {
    return (
        <div className={props.value}>{props.name}</div>
    )
}

export default DiaSemana