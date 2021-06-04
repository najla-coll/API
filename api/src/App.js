import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import UserList from './UserList'



function App() {
  return (
    <div className="App">
           <h1>An API that provides us with list of users </h1>
           <UserList />
    </div>
  );
}

export default App;
