import React from 'react';
import './formGroup.css';

const FormGroup =(props)=>(
    <div className="form-group">
        {props.children}
    </div>
)

export default FormGroup;