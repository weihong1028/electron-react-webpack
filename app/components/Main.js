import React from 'react';

require('normalize.css/normalize.css');
require('styles/App.scss');


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Hello World</h1>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/repos">Repos</a></li>
        </ul>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
