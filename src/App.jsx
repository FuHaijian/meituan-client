import './App.css'
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
