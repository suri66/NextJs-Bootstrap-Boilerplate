import { useField } from 'formik';
import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

function CustomInputs({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <Label htmlFor={props.id}>
        {props.title}&nbsp;
        {props.requiredmsg}
      </Label>
      <Input {...props} {...field} invalid={Boolean(meta.touched && meta.error)} />
      {meta.touched && meta.error && <FormFeedback name={props.name}>{meta.error}</FormFeedback>}
    </FormGroup>
  );
}
CustomInputs.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};
export default CustomInputs;
