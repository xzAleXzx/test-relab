import React from 'react'
import {BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import {LoginPage, MainPage, StorePage} from './pages';

const App: React.FC = () => {

  return (
      <>
        <BrowserRouter>
            <Switch>
                {/* Логин */}
                <Route exact path='/login' component={LoginPage}></Route>
                <NavBar>
                    {/* Главная страница */}
                    <Route exact path='/' component={MainPage}></Route>
                    {/* Магазин */}
                    <Route exact path='/store' component={StorePage}></Route>
                    <Redirect to='/' />
                </NavBar>
            </Switch>
        </BrowserRouter>
      </>
  )
}

export default App;