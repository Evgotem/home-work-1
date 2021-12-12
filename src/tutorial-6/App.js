import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Article } from './pages/Article';

export default function App() {

  const isArticle = useRouteMatch('/post/:id')

  return (
    <div className="App">
      <Header />

      {isArticle ? 'Это статья' : 'Это не статья'}

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/post/:id" exact>
          <Article />
        </Route>
        <Route>
          <h1 style={{ textAlign: 'center' }}>Страница не найдена!</h1>
        </Route>
      </Switch>
      <br />
      <Footer />
    </div>
  );
}
