import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function Route({ path, children, exact }) {
  const { pathname } = window.location;

  if (exact) {
    if (pathname === path) {
      return children;
    }
  } else {
    if (pathname.includes(path)) {
      return children;
    }
  }

  return null;
}


export default function App() {
  const { pathname } = window.location;

  let id = pathname.split('/')[2]

  return (
    <div className="App">
      <Header />
          
      <Route path='/' exact>
        <Home />
      </Route>   
      <Route path='/about'>
        <About />
      </Route>   
      <Route path='/post'>
        <div>
          <h1>Статья №{id}</h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio fuga animi
              aliquam sit id veritatis, doloribus ducimus quas, dignissimos non minima quia amet possimus?
              Impedit nemo ducimus fuga rem!
          </p>
          <a href="/"><button>Назад</button></a>
        </div>
      </Route>

      <br />
      <Footer />
    </div>
  );
}
