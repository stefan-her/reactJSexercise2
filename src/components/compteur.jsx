import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Compteur = (props) => {

    const inc = props.inc;

    const [v, setCount] = useState(0);
    const increment = () => { setCount(prev => prev + inc); }; ///<- bonne pratique de la lambda
    const reset = () => { setCount(0); };

    return (
        <>
            <h1>Compteur</h1>
            <div>{v}</div>
            <button onClick={increment}>inc</button>
            { (v > 0) && <button onClick={reset}>reset</button> }
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