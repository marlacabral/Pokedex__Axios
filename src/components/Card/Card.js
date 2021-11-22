import './Card.css';

const Card = (props) => (
    <>
        <div className='card'>
            <h2>Nome: {props.nome}</h2>
            <h3>{props.movimentos}</h3>
            <img className='image' src={props.imagem} alt={props.name} />
        </div>
        
    </>
)

export default Card;