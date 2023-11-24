import * as React from 'react';
import HomeStack from './navigation/root/index';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {ThemeProvider} from 'styled-components';
import theme from './style/theme/theme';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomeStack />
      </ThemeProvider>
    </Provider>
  );
}
