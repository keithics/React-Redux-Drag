import CssBaseline from '@mui/material/CssBaseline';
import Portfolio from './components/Portfolio';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Portfolio />
      </Provider>
    </>
  );
};

export default App;
