import restaurantfood from '../assets/images/restaurantfood.jpg';
import '../assets/styles/Hero.css';

function Hero() {
    return (
        <div className="hero">
            <div className='hero-wrapper'>
                <div className='container'>
                    <div className='hero-inner'>
                        <div className='hero-content'>
                            <div className='hero-title'>Little Lemon</div>
                            <div className='hero-place'>Chicago</div>
                            <p className='hero-desc'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                            <button type='button' className='hero-btn'>Reserv a Table</button>
                        </div>
                        <div className='hero-img'>
                            <img src={restaurantfood} className="" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;