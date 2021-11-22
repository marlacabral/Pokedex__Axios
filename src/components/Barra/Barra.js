import './Barra.css';

const Barra = (props) => {

    return (
        <div className='barra'>
            <h1 className='barra__titulo'>Pokédex</h1>
            <form onSubmit={props.onSubmit} className='barra__form'>
                <input type='text' className='digite' placeholder='Digite o nome ...' required />
                <input type='submit' className='procurar' value='Procurar' />
            </form>
        </div>
    )
}

export default Barra;