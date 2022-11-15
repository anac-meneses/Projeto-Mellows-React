import footer from '../../src/styles/footer.css';
import mellowRoxo from './img/mellowRoxo.png'

function Footer() {
    return (
        <footer class="footer fixed-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-12">
                        <h6>
                            <i class="fa-solid fa-envelope" id="em"></i>
                            Fale com a gente!
                        </h6>
                        <a href="" class="list">contato@mellows.com.br</a>
                        
                    </div>
                    <div class="col-lg-4 col-sm-12">
                    <h6>
                            <i class="fa fa-github" aria-hidden="true" id="gt"></i>
                            Conheça o projeto:
                        </h6>
                        <a href="https://github.com/Mellows01/Projeto-Mellows-Recode">GitHub</a>
                        
                    </div>
                    <div class="col-lg-4 col-sm-12 ">
                        <h6>
                            <i class="fa-solid fa-globe" id='globo'></i>
                            Nos siga nas redes
                        </h6>
                        <p><i class="fa-brands fa-facebook-f" id='fb'></i><a href="..." class="list"> Facebook </a> <i class="fa-brands fa-instagram" id="ig"></i><a href="..." class="list"> Instagram </a></p> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;