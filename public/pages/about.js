import React from 'react';
import Layout from '../components/Layout';
import AboutContainer from '../components/AboutContainer';

export default class About extends React.Component {

  constructor() {

    super();

  }

  render() {

    return (<Layout>
      <AboutContainer></AboutContainer>
    </Layout>
    );

  }

}
