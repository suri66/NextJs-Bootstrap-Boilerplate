import { React, useState } from 'react';
import { Button, Card, CardTitle, InputGroupText, Spinner } from 'reactstrap';
import { Form, Formik } from 'formik';
import CustomInputs from '../_Common/FormElements/CustomInputs/CustomInputs';
import CustomTextAreas from '../_Common/FormElements/CustomTextAreas/CustomTextAreas';
import CustomDropdown from '../_Common/FormElements/CustomDropdown/CustomDropdown';
import styles from './RegisterPage.module.css';
import CustomRadios from '../_Common/FormElements/CustomRadios/CustomRadios';
import Customcheckbox from '../_Common/FormElements/CustomCheckbox/Customcheckbox';
import schema from '../../lib/validationSchemas/registerSchema';

function RegisterPage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const newPasswordInputText = () => (
    <InputGroupText onClick={toggleNewPassword} className={styles.postIcon}>
      {showNewPassword ? 'Hide' : 'Show'}
    </InputGroupText>
  );
  const confirmPasswordInputText = () => (
    <InputGroupText onClick={toggleConfirmPassword} className={styles.postIcon}>
      {showConfirmPassword ? 'Hide' : 'Show'}
    </InputGroupText>
  );
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardTitle tag="h2" className="text-center">
          Sign Up
        </CardTitle>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            newpassword: '',
            confirmpassword: '',
            email: '',
            address: '',
            city: '',
            Gender: '',
            hobbies: [],
          }}
          onSubmit={(values, submitProps) => {
            console.log('values', values);
            setTimeout(() => {
              submitProps.setSubmitting(false);
            }, 2000);
          }}
          validationSchema={schema}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.formSection}>
                <CustomInputs
                  requiredmsg="*"
                  title="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
                <CustomInputs
                  requiredmsg="*"
                  title="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
                <CustomInputs
                  title="New password"
                  type={showNewPassword ? 'text' : 'password'}
                  id="new-password"
                  name="newpassword"
                  placeholder="Your new password"
                  requiredmsg="*"
                  newPasswordInputText={newPasswordInputText}
                  isNewPasswordIcon
                />
                <CustomInputs
                  title="Confirm password"
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmpassword"
                  placeholder="Your new password"
                  requiredmsg="*"
                  confirmPasswordInputText={confirmPasswordInputText}
                  isConfirmPasswordIcon
                />
                <text-centerCustomInputs
                  requiredmsg="*"
                  title="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <CustomTextAreas
                  requiredmsg="*"
                  title="Address"
                  id="address"
                  type="textarea"
                  name="address"
                  placeholder="Enter your address"
                />
                <CustomDropdown title="City" id="city" requiredmsg="*" name="city" type="select" />
                <CustomRadios
                  title="Gender"
                  type="radio"
                  name="Gender"
                  id="gender"
                  requiredmsg="*"
                />
                <Customcheckbox
                  name="hobbies"
                  title="Hobbies"
                  type="checkbox"
                  id="hobbies"
                  requiredmsg="*"
                />
              </div>
              <div className="d-flex flex-row justify-content-center ">
                <Button color="primary" type="submit" className="mx-3 w-100 ">
                  {isSubmitting ? <Spinner>Loading..</Spinner> : 'Save'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default RegisterPage;
