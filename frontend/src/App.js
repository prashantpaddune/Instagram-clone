import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import {reducer,initialState} from './reducers/userReducer'
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";
import UserProfile from './components/screens/UserProfile';
import SubscribedUserPosts from './components/screens/SubscribesUserPosts'

export const UserContext = createContext();

const Routing = () => {
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch({type:"USER",payload:user})
        } else {
            if (!history.location.pathname.startsWith('/reset'))
                history.push('/signin')
        }
    },[])
  return (
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/create" exact component={CreatePost} />
          <Route path="/profile/:userid" component={UserProfile} />
          <Route path="/myfollowingpost" exact component={SubscribedUserPosts} />
      </Switch>
  );
}

function App() {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <UserContext.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Navbar />
                <Routing />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
