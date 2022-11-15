import '../../styles/home.css';

function Cadastro() {
    return (
        <>
            <section id='body'>
            <div className="container mb-5 " id="formCadastro">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">Nome:</label>
                    <div className="col-sm-10">
                        <input type="nome" className="form-control" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">Data de nascimento:</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" placeholder="nome@exemplo.com"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control"  placeholder="nome@exemplo.com"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">Confirme o email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control"  placeholder="nome@exemplo.com"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Senha:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Confirmação de senha:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" />
                    </div>
                    <div className="mt-3">
                        <button type="button" className="btn">Cadastrar</button></div>
                </div>

            </div>
            </section>
        </>
    );
}

export default Cadastro;