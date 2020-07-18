import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    input.form-control,
    .input-group-prepend,
    span.input-group-text  {
        background-color: transparent;
        border-radius: 0;
        border-left: none;
        border-top: none;
        border-right: none;
        color: #ddd;
    }

    input.form-control:focus {
        background-color: transparent;
        border-bottom: 1px solid #aaa;
        box-shadow: none;
    }
`

const TextareaWrapper = styled.div`
    textarea.form-control {
        background-color: transparent;
        border-radius: 0;
        border-left: none;
        border-top: none;
        border-right: none;
    }

    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
        background-color: transparent;
    }
`

export default function Input(props) {
    if(props.type === "input") {
        return (
            <InputWrapper {...props}>
            <label for="basic-url">{props.label}</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        {props.icon}
                    </span>
                </div>
                <input id={props.name} type={props.text_decoration === "password" ? "password" : "text"} 
                        className="form-control" 
                        placeholder={props.placeholder} 
                        aria-label={props.placeholder} 
                        aria-describedby="basic-addon1">
                </input>
            </div>
        </InputWrapper>
        )
    } else {
        return (
            <TextareaWrapper {...props}>
            <label for="basic-url">{props.label}</label>
            <textarea id={props.name} class="form-control" placeholder={props.placeholder} rows="5"></textarea>
        </TextareaWrapper>
        )
    }
}
