import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email('Email is invalid.').required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

export const schema = yup.object().shape({
  email: yup.string().email('Email is invalid.').required('Email is required.'),
});
