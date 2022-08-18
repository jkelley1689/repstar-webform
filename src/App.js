import ReviewForm from '../src/Screens/ReviewForm/ReviewForm'
import ReviewComplete from './Screens/ReviewComplete/ReviewComplete'
import ReviewNotSent from './Screens/ReviewComplete/ReviewNotSent'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserInfoPage from './Screens/User/UserInfoPage'



function App() {


  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='review/:id' element={<ReviewForm />} />
        <Route path='complete' element={<ReviewComplete />} />
        <Route path='review-already-complete' element={<ReviewNotSent />} />
        <Route path='repInfo/:id' element={<UserInfoPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
