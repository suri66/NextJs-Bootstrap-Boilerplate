import { useField } from 'formik';
import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './custominputs.module.css';

function CustomInputs({ ...props }) {
  const [field, meta] = useField(props);
  // console.log(meta);
  return (
    <FormGroup className="w-100">
      <Label htmlFor={props.id}>
        {props.title}&nbsp;
        {props.requiredmsg}
      </Label>
      <div className={styles.inputContainer}>
        <Input {...props} {...field} invalid={Boolean(meta.touched && meta.error)} />
        {props.isConfirmPasswordIcon ? props.confirmPasswordInputText() : ''}
        {props.isNewPasswordIcon ? props.newPasswordInputText() : ''}
        {meta.touched && meta.error && <FormFeedback name={props.name}>{meta.error}</FormFeedback>}
      </div>
    </FormGroup>
  );
}
CustomInputs.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
  isNewPasswordIcon: PropTypes.bool,
  isConfirmPasswordIcon: PropTypes.bool,
  newPasswordInputText: PropTypes.func,
  confirmPasswordInputText: PropTypes.func,
};

CustomInputs.defaultProps = {
  isNewPasswordIcon: false,
  isConfirmPasswordIcon: false,
  newPasswordInputText: () => {},
  confirmPasswordInputText: () => {},
};

export default CustomInputs;
