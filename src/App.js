import React, { Component } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
