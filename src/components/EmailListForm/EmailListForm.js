import React, { useState } from 'react';
import * as styles from './EmailListForm.module.scss';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const EmailListForm: React.FunctionComponent<{}> = () => {

  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToMailchimp(email, { FNAME: fname })
      .then((data) => {
        console.table(data)
        alert(data.msg);
      })
      .catch((error: Error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.EmailListForm}>
      <h1>Subscribe</h1>

      <div className="">
      <p>
    <label>First Name</label>
    <input type="text" name="FNAME" required="" onChange={({ currentTarget: {value} }) => setFname(value)}
/>
</p>
<p>
    <label>Email Address</label>
    <input type="email" name="EMAIL" required="" onChange={({ currentTarget: {value} }) => setEmail(value)}
/>
</p>
</div>


      <div className={styles.Wrapper}>
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default EmailListForm;
