import React from 'react'
import Menu from './component/Navbar/navbar'
import SlideShow from './component/SlideShow/slideshow'
import Footer from './component/Footer/footer'
import { Route, Switch } from 'react-router-dom'
import Cards from './component/Cards/index'
import CardInfoList from './component/Cards/cardInfo'

function App() {
  return (
    <div>
        <Menu/>
    <Switch>
        <Route exact path='/' component ={SlideShow}/>
        <Route exact path='/Collection' component ={Cards}/>
        <Route exact path='/infopage' component={CardInfoList}/>
    </Switch>
    </div>
  );
}

export default App;
