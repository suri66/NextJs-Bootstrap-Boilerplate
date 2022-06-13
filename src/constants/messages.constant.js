export const COMMON_MESSAGES = Object.freeze({
  INVALID_LOGIN_TOKEN: 'Your token is expired or invalid. Please login again.',
  SAVE_SUCSSESS: 'saved successfully.',
  UPDATE_SUCSSESS: 'updated successfully.',
  DELETE_SUCCESS: 'deleted successfully.',
  INVALID_CREDENTIALS: 'Oops! Either your email or password is incorrect.',
});

export const FORM_ERROR_MESSAGES = Object.freeze({
  LOGIN_MESSAGES: {
    emailInvalid: 'Email is invalid.',
    emailRequired: 'Email is required.',
    passwordRequired: 'Password is required.',
    passwordValidation:
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    newPassword: 'New password is required.',
    confirmPassword: 'Confirm password is required.',
    matchPassword: 'Password must match.',
  },
  REGISTER_MESSAGES: {
    firstName: 'First Name is required.',
    lastName: 'Last Name is required.',
    emailInvalid: 'Email is invalid.',
    emailRequired: 'Email is required.',
    address: 'Address is required.',
    city: 'City is required.',
    gender: 'Gender is required.',
    hobbies: 'Atleast one hobby should be selected.',
  },
});
