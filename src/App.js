import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import ReviewForm from '../src/Screens/ReviewForm/ReviewForm'
import ReviewComplete from './Screens/ReviewComplete'
import ReviewNotSent from './Screens/ReviewNotSent'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


Amplify.configure(awsconfig)

function App() {


  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='review/:id' element={<ReviewForm />} />
        <Route path='complete' element={<ReviewComplete />} />
        <Route path='review-already-complete' element={<ReviewNotSent />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
