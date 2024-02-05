import './App.css';
import CustomerAdd from './redux/CustomerAdd';
import CustomerView from './redux/CustomerView';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
   <Provider store={store}>
    	<div className="App">
		<h1>React Redux Customer Example</h1>
        	<CustomerAdd/>
		  	<CustomerView/>
    	</div>
   </Provider>
  );
}

export default App;
   