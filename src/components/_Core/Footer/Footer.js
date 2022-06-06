/**
 * @name Footer.js
 * @description App Footer
 * @version 0.0.0
 */

import { Col, Row } from 'reactstrap';
import { APP_INFO } from '../../../constants/constants';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
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

export default Footer;
