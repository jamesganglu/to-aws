import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';


import './styles/general.scss';

import Navbar from './components/NavBar';
import Home from './containers/Home';
import Articles from './containers/Articles';
import Article from './containers/Article';
import Login from './containers/Login';
import Register from './containers/Register';
import RegisterThankyou from './containers/RegisterThankyou';
import Page404 from './containers/Page404';

Amplify.configure(awsconfig);


class App extends React.Component{
  async componentDidMount(){
    try{
      const section = await Auth.currentSession();
      console.log(section);
    }catch(err){
      console.log(err);
    }
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Articles} />
              <Route path="/post/:id" component={Article} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              
              <Route path="/register-thankyou" component={RegisterThankyou} />
              <Route path="*" component={Page404} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
