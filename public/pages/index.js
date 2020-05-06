import React from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';


export default class IndexPage extends React.Component {

  constructor() {

    super();

  }

  render() {

    return (
      <Layout>
        <Home>This is home</Home>
      </Layout>
    );

  }

}
