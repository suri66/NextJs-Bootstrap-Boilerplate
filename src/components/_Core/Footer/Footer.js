/**
 * @name Footer.js
 * @description App Footer
 * @version 0.0.0
 */

import { Col, Row } from 'reactstrap';
import propTypes from 'prop-types';
import { APP_INFO } from '../../../constants/constants';
import styles from './Footer.module.css';

function Footer({ className }) {
  return (
    <div className={`${styles.footer} ${className}`}>
      <Row>
        <Col xl="7" lg="7" md="7" sm="12" xs="12" className="mt-4">
          {/* <img src="/images/footer-logo.png" alt="IB Recruitment" /> */}
          <div className={styles.footerText}>
            Copyright © 2022 {APP_INFO.name} - All Rights Reserved.
          </div>
        </Col>
      </Row>
    </div>
  );
}

Footer.propTypes = {
  className: propTypes.string.isRequired,
};
export default Footer;
