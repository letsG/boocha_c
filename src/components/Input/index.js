import React from 'react'

const Input = (props) => {
    return (
        <div className={'input'}
        >
            <h6 className="label">
                {props.data.label}
            </h6>
            {
                props.data.type === 'textarea'
                    ? <textarea id={props.data.id}
                                onChange={props.onChange}
                                placeholder={props.data.placeholder}
                                className={props.data.className}

                    />
                    : <input type={props.data.type}
                             id={props.data.id}
                             onChange={props.onChange}
                             placeholder={props.data.placeholder}
                             value={props.data.value}
                             onClick={props.onClick}
                             className={props.data.className}
                    />
            }
        </div>
    )
};

export default Input;