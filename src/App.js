import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import greekSalad from '../src/assets/images/greek-salad.jpg';
import bruschetta from '../src/assets/images/bruchetta.svg';
import lemmonDessert from '../src/assets/images/lemon-dessert.jpg';

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>
      <Hero />
      <div className='container'>
        <div className='card-row'>
          <Card img={greekSalad} name="Greek Salad" price="12.99" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crutons." />
          <Card img={bruschetta} name="bruschetta" price="5.99" desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
          <Card img={lemmonDessert} name="lemmon Dessert" price="5.00" desc="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
        </div>
      </div>
    </div>
  );
}

export default App;
