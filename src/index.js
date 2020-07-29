import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Pagina404 from './pages/pagina404'
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
// import 

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);