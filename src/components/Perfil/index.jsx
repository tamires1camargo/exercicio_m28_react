import './perfil.css'

const Pagina = () => {
    const abertura = {
        finalidade: 'Calcule seu IMC',
        fotografia: 'https://cdn.pixabay.com/photo/2014/07/28/11/18/scale-403585_1280.jpg'
    }

    return (
        <div>
            <h1 className='perfil-titulo'>{abertura.finalidade}</h1>
            <img className='perfil-balanca' src={abertura.fotografia}  />
        </div>
    )
}

export default Pagina;