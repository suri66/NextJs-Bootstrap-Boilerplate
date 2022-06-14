import React from 'react';
import Link from 'next/link';
import { Card, CardBody, CardSubtitle, CardTitle, Button } from 'reactstrap';
import styles from './forgetpassword.module.css';

function ForgetPasswordStepTwo() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardBody className={styles.cardBody}>
          <CardTitle tag="h2" className="mb-3">
            Please check your email
          </CardTitle>
          <CardSubtitle className=" text-muted" tag="h6">
            Follow the link sent to your email address
          </CardSubtitle>

          <div className="d-flex align-items-center flex-column">
            <Button color="primary" className="w-100 my-4" type="submit" size="lg">
              Resend recovery email
            </Button>
            <Link href="/login">
              <a className={styles.link}>Back to Login</a>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ForgetPasswordStepTwo;
