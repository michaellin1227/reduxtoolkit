import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Profile from './components/Profile';
import Counter from './components/Counter';
import userSlice from './store/userSlice';
import counterSlice from './store/counterSlice';

// store 
const store = configureStore({
  // reducer 如何操作、改變、取得state的function
  reducer: {
    // key : value
    user: userSlice,
    counter: counterSlice,

  }

})
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profile />
        <hr />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
