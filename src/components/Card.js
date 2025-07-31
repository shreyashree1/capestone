import '../assets/styles/Card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={props.img} className="App-logo" alt="logo" />
            </div>
            <div className='card-content'>
                <div className='card-header'>
                    <div className='card-title'>{props.name}</div>
                    <div className='card-price'>$ <span>{props.price}</span></div>
                </div>
                <p className='card-desc'>{props.desc}</p>
                <a href='#' className='card-link'>Order a delivery</a>
            </div>
        </div>
    );
}

export default Card;