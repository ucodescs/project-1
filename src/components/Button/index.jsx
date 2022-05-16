import { Component } from "react";

import './styles.css';

export class Button extends Component{
    
    render(props) {
        const { text, onClick, disabled } = this.props;

        return(
            <button
                onClick={onClick}
                className='button'
                disabled = {disabled}
            >
                {text}
            </button>
        )
    }
}