import React from "react";
import classNames from "classnames";

const Button = ({ children, outline, onClick, className }) => {
    const btnClassNames = classNames("button", className, {
        "button--outline": outline,
    });

    return (
        <button onClick={onClick} className={btnClassNames}>
            {children}
        </button>
    );
};

export default Button;
