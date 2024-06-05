import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="http://github.com/SergioDevSousa" rel="noopener noreferrer" target="_blank">
                        <img src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000" alt="icon-github" />
                    </a>
                </li>
                <li>
                    <a href="twitter.comhttps://www.linkedin.com/in/sergiosousa-ti/" rel="noopener noreferrer" target="_blank">
                        <img src="https://img.icons8.com/?size=100&id=9pFq5Dj6Mz1d&format=png&color=000000" alt="icon-linkendin" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura. Aluno - Sérgio Sousa
            </p>
        </section>
    </footer>)
}

export default Rodape
