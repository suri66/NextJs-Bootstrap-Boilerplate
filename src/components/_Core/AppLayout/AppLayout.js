/**
 * @name AppLayout.js
 * @description App layout wrapper With Sticky Footer
 * @version 0.0.0
 */

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import NextHead from '../NextHead/NextHead';
import Footer from '../Footer/Footer';
import styles from './applayout.module.css';

function AppLayout({ children }) {
  // const router = useRouter();
  // const currentRoutePath = router?.pathname;
  // const isPublicRoute = constants.PUBLIC_ROUTES.includes(currentRoutePath);

  useEffect(() => {
    // if (process.browser && !isPublicRoute) {
    //   if (!getLocalStorageItem('token')) {
    //     toaster.error({ message: messageConstant.INVALID_LOGIN_TOKEN });
    //     clearUserLocalStorage();
    //     setTimeout(() => {
    //       window.location.href = '/login';
    //     }, 2500);
    //   }
    // }
  }, []);

  return (
    <div data-testid="layout">
      <NextHead />
      <Header />
      <div>{children}</div>
      <Footer className={styles.stickyFooter} />
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
