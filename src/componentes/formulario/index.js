import CampoTexto from '../CampoTexto'
import './Form.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados pra criar o card do Colaborador. </h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome..." />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo..." />
                <CampoTexto label="Imagem" placeholder="Digite o caminho da sua imagem..." />
            </form>
        </section>
    )
}
export default Formulario