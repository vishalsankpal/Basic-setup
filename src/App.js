import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
//import Rainbow from './Components/Hoc/Rainbow';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch >
        {//this wont allow to match 2 navigation at a time .it match only one 
          //It match url and routs from top  and it will use the 1st result 
        }
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          
          {//<Route exact path="/post/:post_id" component={Post} />
          //or if you wanted to run without switch then you can try this
          }
          <Route path='/:post_id' component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
