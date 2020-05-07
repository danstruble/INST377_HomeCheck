import React from 'react';
import Layout from '../components/Layout';
import AboutContent from '../components/AboutContent';

export default class About extends React.Component {

  constructor() {

    super();

  }

  render() {

    return (<Layout>
      <AboutContent></AboutContent>
    </Layout>
    );

  }

}
