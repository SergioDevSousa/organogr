import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListasSuspensas from '../ListasSuspensas'
import './Form.css'


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Designer',
        'Mobile',
        'Inovação eGestão'
    ]

const aoSalvar = (evento) =>{
    evento.preventDefault()
    console.log('Form foi submetido')
}

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados pra criar o card do Colaborador. </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome..." />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo..." />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o caminho da sua imagem..." />
                <ListasSuspensas obrigatorio={true} label="Time" itens = {times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario