import PropTypes from 'prop-types';
// import AppLayout from '../components/_Core/AppLayout/AppLayout';
import ErrorBoundary from '../components/_Providers/ErrorBoundary';
// import AppLayout1 from '../components/_Core/AppLayout1/AppLayout1';
// import AppLayout2 from '../components/_Core/AppLayout2/AppLayout2';
import AppLayout3 from '../components/_Core/AppLayout3/AppLayout3';
//
// global css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const isLoggedInUser = true;
  if (isLoggedInUser) {
    return (
      <ErrorBoundary>
        <AppLayout3>
          <Component {...pageProps} />
          <br />
          <br />
        </AppLayout3>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      <br />
      <br />
    </ErrorBoundary>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MyApp;
