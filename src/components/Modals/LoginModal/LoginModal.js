import React from 'react';
import Link from 'next/link';
import { Button, Card, CardTitle, Spinner } from 'reactstrap';
import { Formik, Form } from 'formik';
import CustomInputs from '../../_Common/FormElements/CustomInputs/CustomInputs';
import logInSchema from '../../../lib/validationSchemas/loginSchema';
import styles from './login.module.css';

function LoginModal() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardTitle className="fw-bold p-4" tag="h2">
          Hi,Welcome Back!
        </CardTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, submitProps) => {
            console.log('values', values);
            setTimeout(() => {
              submitProps.setSubmitting(false);
            }, 2000);
            // console.log(actions, 'actions');
          }}
          validationSchema={logInSchema}
        >
          {({ isSubmitting }) => (
            <>
              <Form className="m-3">
                <CustomInputs
                  requiredmsg="*"
                  title="Email address"
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your email address"
                />
                <CustomInputs
                  requiredmsg="*"
                  title="Password"
                  id="examplePassword"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />

                <div className="mb-4 text-end">
                  <Link href="/forgotPassword">Forgot Password?</Link>
                </div>
                <Button
                  color="primary"
                  type="submit"
                  className="w-100 mb-3"
                  onClick={() => console.log('clicked')}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner color="success">Loading..</Spinner> : 'Login'}
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default LoginModal;
