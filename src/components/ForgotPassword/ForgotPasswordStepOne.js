import { React } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { Card, CardBody, CardSubtitle, CardTitle, Button } from 'reactstrap';
import { schema } from '../../lib/validationSchemas/loginSchema';
import CustomInputs from '../_Common/FormElements/CustomInputs/CustomInputs';
import styles from './forgetpassword.module.css';

function ForgotPasswordStepOne({ handleSubmit }) {
  return (
    <>
      <div className={styles.container}>
        <Card className={styles.card}>
          <CardBody className={styles.cardBody}>
            <div className={styles.heading}>
              <CardTitle tag="h3">Forgot Your Password?</CardTitle>
              <CardSubtitle className=" text-muted" tag="h6">
                Don&#39;t worry, we will reset it together in no time.
              </CardSubtitle>
            </div>
            <Formik initialValues={{ email: '' }} onSubmit={handleSubmit} validationSchema={schema}>
              <Form className={styles.form}>
                <div className="my-4">
                  <CustomInputs
                    name="email"
                    id="email"
                    requiredmsg="*"
                    title="Email Address"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="d-flex align-items-center flex-column">
                  <Button
                    color="primary"
                    className="w-100 mb-3"
                    type="submit"
                    onClick={() => console.log('clicked')}
                  >
                    Send reset instructions
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
    </>
  );
}
ForgotPasswordStepOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default ForgotPasswordStepOne;
