import React from 'react';
import EmailListForm from '../../src/components/EmailListForm/EmailListForm';
import Layout from '../../src/components/Layout';
import Sidebar from '../../src/components/Sidebar';
import { useSiteMetadata } from '../../src/hooks';

const Subscribe = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout title={`Subscribe - ${siteTitle}`} description='Subscribe' socialImage='static/karen.jpg' >
      <Sidebar isIndex={false}/>
      <EmailListForm/>
    </Layout>
  );
};

export default Subscribe;
