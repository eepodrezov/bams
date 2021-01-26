import logo from './logo.svg';
import './App.css';
import Home from "./componetns/Home/Home"
import Intro from './componetns/Intro/Intro'
import Work from './componetns/Work/Work'
import Results from './componetns/Results/Results'
import Clients from './componetns/Clients/Clients'
import Quote from './componetns/Quote/Quote'
import Subscribe from './componetns/Subscribe/Subscribe'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import arrowright from './componetns/Quote/Quote_1/Arrow Right.svg'
import { ReactSVG } from 'react-svg'
import arrowleft from './componetns/Quote/Quote_1/Arrow Left.svg'

function App() {
  const next = <ReactSVG src={arrowright}/>;
  const prev = <ReactSVG src={arrowleft}/>;
  return (
    <div className="App">
      <Carousel nextIcon={next} prevIcon={prev} autoplay={false}>
        <Carousel.Item>
          <Home />
        </Carousel.Item>
        <Carousel.Item>
          <Intro />
        </Carousel.Item>
        <Carousel.Item>
          <Work />
        </Carousel.Item>
        <Carousel.Item>
          <Results />
        </Carousel.Item>
        <Carousel.Item>
          <Clients /> 
        </Carousel.Item>
        <Carousel.Item>
          <Quote />
        </Carousel.Item>
        <Carousel.Item>
            <Subscribe />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
