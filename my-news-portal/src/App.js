import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import './App.css';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:title" element={<ArticlePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
