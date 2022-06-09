import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { useField } from 'formik';

function CustomDropdown({ ...props }) {
  const [field, meta] = useField(props);

  const cities = ['Ahmedabad', 'Surat', 'Vadodra', 'Mumbai', 'Chennai'];
  return (
    <FormGroup>
      <Label for={props.name}>
        {props.title}&nbsp;
        {props.requiredmsg}
      </Label>
      <Input {...props} {...field} invalid={Boolean(meta.touched && meta.error)}>
        <option value="">Please select your city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Input>
      {meta.touched && meta.error && <FormFeedback name={props.name}>{meta.error}</FormFeedback>}
    </FormGroup>
  );
}
CustomDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};
export default CustomDropdown;
