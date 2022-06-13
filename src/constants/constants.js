export const APP_INFO = {
  name: 'Website',
  website: 'https://website.com',
};

export const ROUTES = [
  {
    path: '/',
    name: 'Jobs List',
    isPublic: false,
    ROLES: ['ADMIN', 'PILOT'],
  },
  {
    path: '/user-management',
    name: 'User Management',
    isPublic: false,
    ROLES: ['ADMIN', 'PILOT'],
  },
];

export const PASSWORD_VALIDATION_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
