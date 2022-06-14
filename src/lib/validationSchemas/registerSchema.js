import * as yup from 'yup';
import { FORM_ERROR_MESSAGES } from '../../constants/messages.constant';
import { PASSWORD_VALIDATION_REGEX } from '../../constants/constants';

const { firstName, lastName, emailInvalid, emailRequired, address, city, gender, hobbies } =
  FORM_ERROR_MESSAGES.REGISTER_MESSAGES;
const { newPassword, confirmPassword, passwordValidation, matchPassword } =
  FORM_ERROR_MESSAGES.LOGIN_MESSAGES;

export default yup.object().shape({
  firstName: yup.string().required(firstName),
  lastName: yup.string().required(lastName),
  newpassword: yup
    .string()
    .required(newPassword)
    .matches(PASSWORD_VALIDATION_REGEX, passwordValidation),
  confirmpassword: yup
    .string()
    .required(confirmPassword)
    .oneOf([yup.ref('newpassword'), null], matchPassword),
  email: yup.string().email(emailInvalid).required(emailRequired),
  address: yup.string().required(address),
  city: yup.string().required(city),
  Gender: yup.string().required(gender),
  hobbies: yup.array().min(1, hobbies),
});
