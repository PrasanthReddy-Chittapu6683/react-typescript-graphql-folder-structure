import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router";
import { ApolloProvider } from "@apollo/client";

//components
import Header from "../header/header.component";

//pages
import AboutPage from "../../pages/about/about.page";

// css styles
import '../../common/styles'
import './app.component.css';
import HomePage from "../../pages/home/home.page";
import graphQlApolloClient from "../../common/apollo-client";


const App: React.FC = () => {
    return (
        <ApolloProvider client={graphQlApolloClient}>
            <Router>
                <Header />
                <Routes>
                    <>
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/" element={<HomePage />} />
                    </>
                </Routes >
            </Router>
        </ApolloProvider>
    );
}

export default App