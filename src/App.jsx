import imagemDev from "../src/assets/imagens/pessoa.png"
import iconeGitHub from "../src/assets/imagens/github.png"
import iconeLinkedin from "../src/assets/imagens/linkdin.png"


function App() {

  return (
    <main>
      <section>
        <p>
          Olá Seja bem-vindo(a)(e) ao meu Portifólio.
        </p>

        <p>
          Meu nome é <span>Mayra</span> e eu sou uma desenvolvedora web
        </p>

        <div id="redes-sociais">
          <a href="#">
            <img src={iconeGitHub} alt="" srSet = ""/>
          </a>
          < a href="#">
          <img src={iconeLinkedin} alt="" srcSet="" />
          </a>
        </div>

        <a href="#sobreMim">
          <button> Conheça mais sobre mim</button>
        </a>

      </section>
      
      <section>
        <img id="imagemDev" src={imagemDev}/>
      </section>
    </main>

  )
}

export default App
