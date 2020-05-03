import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<Layout><ContactForm></ContactForm></Layout>);
    }
}
