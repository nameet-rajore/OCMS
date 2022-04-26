import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import store from '../src/store';
import {themeOptions} from '../src/theme';
import { useDispatch, useSelector } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (<>
    <ThemeProvider theme={themeOptions}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  </>)
}

export default MyApp
