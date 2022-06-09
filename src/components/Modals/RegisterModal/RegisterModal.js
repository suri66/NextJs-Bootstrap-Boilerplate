import React from 'react';
import { Button, Modal, ModalHeader, Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import CustomInputs from '../../_Common/FormElements/CustomInputs/CustomInputs';
import CustomTextAreas from '../../_Common/FormElements/CustomTextAreas/CustomTextAreas';
import CustomDropdown from '../../_Common/FormElements/CustomDropdown/CustomDropdown';
import styles from './RegisterModal.module.css';
import CustomRadios from '../../_Common/FormElements/CustomRadios/CustomRadios';
import Customcheckbox from '../../_Common/FormElements/CustomCheckbox/Customcheckbox';
import schema from '../../../lib/validationSchemas/registerSchema';

function RegisterModal({ toggleModal, isOpen }) {
  return (
    <Modal centered toggle={toggleModal} isOpen={isOpen} fullscreen="sm" size="lg">
      <div className="p-4">
        <ModalHeader toggle={toggleModal} className="border-0">
          Sign Up
        </ModalHeader>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
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
              <div className="d-flex flex-row justify-content-end">
                <Button color="primary" type="submit" className="mx-3 w-25">
                  {isSubmitting ? <Spinner>Loading..</Spinner> : 'Save'}
                </Button>
                <Button className="ml-2" onClick={toggleModal}>
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}
RegisterModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default RegisterModal;
