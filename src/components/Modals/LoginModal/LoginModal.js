import React from 'react';
import Link from 'next/link';
import { Button, Modal, ModalHeader, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import CustomInputs from '../../_Common/FormElements/CustomInputs/CustomInputs';
import schema from '../../../lib/validationSchemas/loginSchema';

function LoginModal({ toggleModal, isOpen }) {
  return (
    <Modal centered fullscreen="sm" isOpen={isOpen} size="md" toggle={toggleModal} className="p-3">
      <div style={{ padding: '20px' }}>
        <ModalHeader
          toggle={toggleModal}
          className="fw-bold fs-6 p-4"
          style={{ borderBottom: 'none' }}
        >
          Hi,Welcome Back!
        </ModalHeader>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, submitProps) => {
            console.log('values', values);
            setTimeout(() => {
              submitProps.setSubmitting(false);
            }, 2000);
            // console.log(actions, 'actions');
          }}
          validationSchema={schema}
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

                <div className="mb-4 text-end" onClick={toggleModal}>
                  <Link href="/ForgotPassword">Forgot Password?</Link>
                </div>
                <Button
                  color="primary"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner color="success">Loading..</Spinner> : 'Login'}
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </Modal>
  );
}
LoginModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default LoginModal;
