import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { useField } from 'formik';

function CustomTextAreas({ ...props }) {
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
CustomTextAreas.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};
export default CustomTextAreas;
