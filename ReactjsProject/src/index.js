import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyD1T478tOSu0FLehyIeSceHoRufHHdoJls';

import SearchBar from './components/search_bar'

const App = () => {
return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render( <App />
  , document.querySelector('.container'));
