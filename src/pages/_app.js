import PropTypes from 'prop-types';
import AppLayout from '../components/_Core/AppLayout/AppLayout';
import ErrorBoundary from '../components/_Providers/ErrorBoundary';

// global css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const isLoggedInUser = false;
  if (isLoggedInUser) {
    return (
      <ErrorBoundary>
        <AppLayout>
          <Component {...pageProps} />
          <br />
          <br />
        </AppLayout>
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
