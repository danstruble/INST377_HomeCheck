import React from "react";
import Layout from "../components/Layout";
import DocumentationContent from "../components/DocumentationContent";

export default class Documentation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <DocumentationContent />
      </Layout>
    );
  }
}
