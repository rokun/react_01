// Header.js
import React from 'react';

function Header({ title }) {
  return (
    <div id="header">
      <div class="container">
          <h1>{title}</h1>
      </div>
  </div>
  );
}

export default Header;