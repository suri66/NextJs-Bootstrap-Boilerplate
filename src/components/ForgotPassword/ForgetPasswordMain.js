import { React, useState } from 'react';

import ForgetPasswordStepTwo from './ForgetPasswordStepTwo';
import ForgotPasswordStepOne from './ForgotPasswordStepOne';

function ForgetPasswordMain() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (values, submitProps) => {
    setIsEmailSent(true);
    submitProps.setSubmitting(false);
    console.log('values', values, isEmailSent);
  };
  return (
    <>
      {isEmailSent ? (
        <ForgetPasswordStepTwo />
      ) : (
        <ForgotPasswordStepOne handleSubmit={handleSubmit} />
      )}
      ;
    </>
  );
}

export default ForgetPasswordMain;
