import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import ReviewForm from '../src/Screens/ReviewForm/ReviewForm'
import ReviewComplete from './Screens/ReviewComplete/ReviewComplete'
import ReviewNotSent from './Screens/ReviewComplete/ReviewNotSent'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserInfoPage from './Screens/User/UserInfoPage'


Amplify.configure(awsconfig)

function App() {


  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='review/:id' element={<ReviewForm />} />
        <Route path='complete' element={<ReviewComplete />} />
        <Route path='review-already-complete' element={<ReviewNotSent />} />
        <Route path='userInfo/:id' element={<UserInfoPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
