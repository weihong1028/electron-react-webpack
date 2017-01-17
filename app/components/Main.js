import React from 'react';
import $ from 'jquery';

require('normalize.css/normalize.css');
require('styles/App.scss');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Hello World</h1>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <ul>
          <li><a href="#/about">About Jack</a></li>
          <li><a href="#/repos">Repos Sharon</a></li>
          <li onClick={this.fetchDemo}>testProxy</li>
        </ul>
      </div>
    );
  }

  fetchDemo() {
    let url = 'http://localhost:8001/RAP/mockjs/3/api/chartsetting/chart/1477637259081';
    // let url = 'http://localhost:8001/RAP';
    fetch(url).then((response) => {
      console.log('response', response);
    }).then((json) => {
      console.log('json', json);
    });
  }

  ajaxDemo() {
    let url = 'http://localhost:8001/RAP/mockjs/3/api/chartsetting/chart/1477637259081';
    $.ajax({
      url: url,
      success: (response) => {
        console.log('response', response);
      }
    });
  }

}

AppComponent.defaultProps = {
};

export default AppComponent;
