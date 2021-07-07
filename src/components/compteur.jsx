import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Compteur = (props) => {

    const inc = props.inc;

    const [v, setCount] = useState(0);
    const increment = (() => {
        setCount(v + inc);
        
    });


    return (
        <>
            <h1>Compteur</h1>
            <div>{v}</div>
            <button onClick={increment}>inc</button>

            <button>reset</button>
        </>
    );
}

Compteur.defaultProps = {
    inc: 1
}

Compteur.propTypes = {
    inc: PropTypes.number
}

export default Compteur;