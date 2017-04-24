import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Bluemix from './Containers/Bluemix';

const renderComponent = Component => {
  render(
    <AppContainer>
      <Component grid />
    </AppContainer>,
    document.getElementById('app')
  );
};

renderComponent(Bluemix);

if (module.hot) {
  module.hot.accept('./Containers/Bluemix', () => {
    render(
      <AppContainer>
        <Bluemix grid />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
