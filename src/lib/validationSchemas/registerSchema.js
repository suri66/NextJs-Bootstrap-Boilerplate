import * as yup from 'yup';

export default yup.object().shape({
  firstName: yup.string().required('First Name is required.'),
  lastName: yup.string().required('Last Name is required.'),
  email: yup.string().email('Email is invalid.').required('Email is required.'),
  address: yup.string().required('Address is required.'),
  city: yup.string().required('City is required.'),
  Gender: yup.string().required('Gender is required.'),
  hobbies: yup.array().min(1, 'Atleast one hobby should be selected.'),
});
