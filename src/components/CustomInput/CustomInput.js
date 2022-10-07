import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from "@mui/material";
import {useField} from "formik";


const CustomInput = (props) => {
    const [field, meta, helpers] = useField(props);
    const {label, type, customChange} = props;   

    const isError = meta.touched && meta.error;

    const handleChange = (event) => {
        if (customChange) {
            customChange(event.target.value, helpers.setValue);
            return;
        }
        field.onChange(event);
    }

    

    return (
        <>
            <TextField {...field}            
            margin="normal"           

                onChange={handleChange}
                       label={label}
                       type={type}
                       color={isError ? 'error' : 'primary'}/>
            <span className='error'>{isError ? meta.error : ''}</span>
        </>
    )
}

CustomInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
};
CustomInput.defaultProps = {
    type: 'text',
    placeholder: '',
};

export default CustomInput;
