import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import Main from './pages/Main/Main';
import {provider, Provider} from 'react-redux';
import configureStore from './redux/config'

function App() {

  const [store] = useState(configureStore())

  return (
    <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
             
          <Route exact path="/users"  component={UserPage}/>         
          <Route exact path="/users/:id" component={UserProfilePage}/>
          <Route exact path="/main" component={Main}/>
            
          
          <Route path="/">
            <HomePage />
          </Route>
          
          <Route>
            Not found
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
export default  App;


// function* test() {
//   yield  50;
//   yield  20;
//   yield  10;
//   return 0;

// }

// const gen = test()

// let value;
// while(!(value = gen.next()).done) {
//   console.log(value)
// }
// console.log([...test()])
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())n

// console.log(gen.next())



