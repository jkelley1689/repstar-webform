import ReviewComplete from './Screens/ReviewComplete/ReviewComplete'
import ReviewNotSent from './Screens/ReviewComplete/ReviewNotSent'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserInfoPage from './Screens/User/UserInfoPage'
import ReviewSubmit from './Screens/ReviewForm/ReviewSubmit'
import NotFound from './Screens/NotFound/NotFound'

function App() {


  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='review/:id' element={<ReviewSubmit />} />
        <Route path='complete' element={<ReviewComplete />} />
        <Route path='review-already-complete' element={<ReviewNotSent />} />
        <Route path='repInfo/:id' element={<UserInfoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
