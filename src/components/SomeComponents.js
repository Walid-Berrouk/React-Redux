import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, signIn, signOut } from '../redux/actions'

function SomeComponent1() {

  const counter = useSelector(state => state.countReducer);
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div style={{padding: 20, border: "2px solid black"}}>
      <h3>I'm The first Child Component, I'm Charged of setting the Counter :</h3>
      <p>Counter : {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

function SomeComponent2() {

  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch()
  
  const handleSignIn = () => {
    dispatch(signIn())
  }

  const handleSignOut = () => {
    dispatch(signOut())
  }


  return (
    <div style={{padding: 20, border: "2px solid black"}}>
      <h3>I'm The Second Child Component, I'm Charged of the Log In Part :</h3>
      <p>I'm Logged: {isLogged ? "Yes" : "No"}</p>
      {isLogged ?
        <div>
          <h1>Hi, I'm Walid, Nice to meet You !</h1>
        </div>
        :
        <></>

      }
      <button onClick={handleSignIn}>Log In</button>
      <button onClick={handleSignOut}>Log Out</button>

    </div>
  )
}

export {
    SomeComponent1,
    SomeComponent2
}

