import React from 'react';
import { useField } from 'formik';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

function Customcheckbox({ ...props }) {
  const [field, meta] = useField(props);
  console.log(meta);
  const hobbies = ['Coding', 'Reading', 'Baking', 'Fishing', 'Blogging', 'Fashion', 'Acting'];
  return (
    <FormGroup>
      <Label>
        {props.title} &nbsp;
        {props.requiredmsg}
      </Label>
      <div className="d-flex flex-wrap w-100">
        {hobbies.map((hobby) => (
          <FormGroup key={hobby} className="w-25">
            <Input
              type={props.type}
              id={hobby}
              {...field}
              value={hobby}
              checked={field.value.includes(hobby)}
            />

            <Label check htmlFor={hobby} className="mx-2">
              {hobby}
            </Label>
          </FormGroup>
        ))}
      </div>
      {meta.touched && meta.error ? (
        <FormFeedback name={props.name} className="d-block">
          {meta.error}
        </FormFeedback>
      ) : null}
    </FormGroup>
  );
}
Customcheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};
export default Customcheckbox;
