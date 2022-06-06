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
