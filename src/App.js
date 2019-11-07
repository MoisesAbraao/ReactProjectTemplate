import React from 'react';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Gotardo" scroll>
                <Navigation>
                    <Link to="/">Page 1</Link>
                    <Link to="/page2">Page 2</Link>
                    <Link to="/page3">Page 3</Link>
                    <Link to="/page4">Page 4</Link>
                </Navigation>
            </Header>
            <Drawer title="Meu Projeto Base">
                <Navigation>
                    <Link to="/">Page 1</Link>
                    <Link to="/page2">Page 2</Link>
                    <Link to="/page3">Page 3</Link>
                    <Link to="/page4">Page 4</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
