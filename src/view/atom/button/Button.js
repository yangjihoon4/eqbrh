import React from 'react';
import './Button.scss';

function Button(props) {
    const {className, ...rest} = props
    return (
        <button type={'button'} className={`main-button ${(className && className)}`} {...rest} />
    );
}

export default Button;
