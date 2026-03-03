import "./Sobre.css";

export const Sobre = ({categoria}) =>
{
    return(
        <div id={categoria}>
            <div id="resumo">
                <h2>Sobre mim</h2>

                <p>
                Olá! Meu nome é Mayra e minha jornada no desenvolvimento web
                começou em janeiro de 2024. O que começou como curiosidade se 
                tornou paixão quando mergulhei de cabeça no HTML e CSS em 2025.
                Hoje, busco constantemente aprender novas tecnologias 
                para criar experiências digitais incríveis e funcionais.
                </p>
            </div>

            <div id="meus-conhecimentos">
                <h2>Meus conhecimentos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        </div>
    )
}