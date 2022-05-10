import {ReactComponent as GitHubIcon} from 'assests/img/github.svg'
import './styles.css'
function Navbar(){
/* criada a função navbar(), que vai ser exportada para que seja 
adicionada dentro do arquivo app.tsx. Assim, basta chamar essa função
dentro do arquivo app.tsx para que a nossa aplicação principal estaja
com a navbar configurada. Isso permite que cada arquivo lide com um função
própria e específica dele.  */
    return (
        <header> 
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/heitor-jsr">
              <div className="dsmovie-contact-container">
                <GitHubIcon/>
                <p className="dsmovie-contact-link">/heitor-jsr</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;