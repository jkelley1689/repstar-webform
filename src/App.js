import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import ReviewForm from '../src/Screens/ReviewForm'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'


Amplify.configure(awsconfig)

function App() {


  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='review/:id' element={<ReviewForm />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
