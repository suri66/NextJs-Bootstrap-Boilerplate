import React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { Field, useField } from 'formik';
import styles from './customradios.module.css';

function CustomRadios({ ...props }) {
  const [field, meta] = useField(props);
  const gender = ['Male', 'Female', 'Other'];
  console.log(field);
  return (
    <FormGroup>
      <Label htmlFor={props.name}>
        {props.title} &nbsp;
        {props.requiredmsg}
      </Label>
      <FormGroup className=" d-flex flex-direction-row">
        {gender.map((item) => (
          <div key={item} className="mx-2">
            <Field type="radio" name={props.name} value={item} className={styles.radio} />
            <Label>{item}</Label>
          </div>
        ))}
      </FormGroup>
      <div className={styles.errorMessage}>
        {meta.touched && meta.error ? (
          <FormFeedback name={props.name} className="d-block">
            {meta.error}
          </FormFeedback>
        ) : null}
      </div>
      {/* <FormFeedback name={props.name}>{meta.error}</FormFeedback> */}
    </FormGroup>
  );
}
CustomRadios.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  requiredmsg: PropTypes.string.isRequired,
};
export default CustomRadios;
