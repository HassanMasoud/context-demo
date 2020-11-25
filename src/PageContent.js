import React, { Component } from "react";

class PageContent extends Component {
  render() {
    const styles = {
      backgroundColor: "white",
      width: "100vw",
      height: "100vh",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;