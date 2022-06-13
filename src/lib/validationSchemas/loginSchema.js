import * as yup from 'yup';
import { FORM_ERROR_MESSAGES } from '../../constants/messages.constant';
import { PASSWORD_VALIDATION_REGEX } from '../../constants/constants';

const {
  emailInvalid,
  emailRequired,
  passwordRequired,
  passwordValidation,
  newPassword,
  confirmPassword,
  matchPassword,
} = FORM_ERROR_MESSAGES.LOGIN_MESSAGES;

export default yup.object().shape({
  email: yup.string().email(emailInvalid).required(emailRequired),
  password: yup.string().required(passwordRequired),
});

export const schema = yup.object().shape({
  email: yup.string().email(emailInvalid).required(emailRequired),
});

export const resetPasswordSchema = yup.object().shape({
  newpassword: yup
    .string()
    .required(newPassword)
    .matches(PASSWORD_VALIDATION_REGEX, passwordValidation),
  confirmpassword: yup
    .string()
    .required(confirmPassword)
    .oneOf([yup.ref('newpassword'), null], matchPassword),
});
