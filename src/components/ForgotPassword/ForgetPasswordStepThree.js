import { React, useState } from 'react';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
import CustomInputs from '../_Common/FormElements/CustomInputs/CustomInputs';
import styles from './forgetpassword.module.css';
import { resetPasswordSchema } from '../../lib/validationSchemas/loginSchema';
// import { resetPasswordSchema } from '../../lib/validationSchemas/loginSchema';

function ForgetPasswordStepThree() {
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
        <CardBody className={styles.cardBody}>
          <div className={styles.heading}>
            <CardTitle tag="h2" className="mb-3">
              Set up a new password
            </CardTitle>
            <CardSubtitle className=" text-muted" tag="h6">
              Please enter your new password in the fields below
            </CardSubtitle>
          </div>
          <Formik
            initialValues={{ confirmpassword: '', newpassword: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={resetPasswordSchema}
          >
            <Form className={styles.form}>
              <div className={styles.inputContainer}>
                <InputGroup className="my-4 w-100">
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
                </InputGroup>
                <InputGroup>
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
                </InputGroup>
              </div>
              <div className="d-flex align-items-center flex-column">
                <Button color="primary" className="w-100 my-4" type="submit" size="lg">
                  Reset Password
                </Button>
                <Link href="/login">
                  <a className={styles.link}>Back to Login</a>
                </Link>
              </div>
            </Form>
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
}

export default ForgetPasswordStepThree;
