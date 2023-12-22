import './App.css';
import Profile from './components/Profile';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './store/userSlice';

// store 
const store = configureStore({
  // reducer 如何操作、改變、取得state的function
  reducer: {
    // key : value
    user: userSlice,

  }

})
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profile />
      </div>
    </Provider>
  );
}

export default App;
