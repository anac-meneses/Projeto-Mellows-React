
import React from 'react';
import livroint1 from '../img/livroint1.jpg';
import livroint2 from '../img/livroint2.jpg';
import livroint3 from '../img/livroint3.jpg';
import '../../styles/li.css'

function LivrosInt() {
    return (


        <>

            <div id='corpo'>
                <h1 id="titleLI">Livros Interativos</h1>
                <p id="Nivel">Escolha um nível para começar:</p>

                <select className="form-select" aria-label="Default select example" id="select">
                    <option defaultValue>Clique aqui</option>
                    <option value="1">Iniciante</option>
                    <option value="2">Intermediário</option>
                    <option value="3">Avançado</option>
                </select>



                <div className='containerint mx-auto mt-5 col-md-10 col-11'>
                    <div className="corpo" id='card'>
                        <div className="card" id='cardBody' >
                            <div className="card-body p-0 ">
                                <div className="card-content">

                                    <div className="profile mb-4 mt-3"> <img src={livroint1} alt-te="true" alt="Uma donninha preocupada" /> </div>

                                    <div className="card-subtitle">
                                        <p> <small className="text-muted"> <i className="fas fa-quote-left"></i> Quando a Doninha se
                                            depara
                                            com uma forte e furiosa tempestade, decide construir uma fortaleza e se
                                            refugiar.
                                            Mas, depois, conhece a Toupeira, que adora brincar ao vento e na chuva.
                                            Conseguirá aprender a ultrapassar os medos? <i
                                                className="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                                    </div>
                                    <small
                                        className="intro text-muted">Link aqui</small>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='cardBody' >

                            <div className="card-body p-3" id='cardMeio'>

                                <div className="profile mb-4 "> <img src={livroint2} alt-te="true" alt=" Eu e o meu avô" /> </div>

                                <div className="card-subtitle">
                                    <p> <small className="text-muted"> <i className="fas fa-quote-left "></i> O avô do Ursinho é
                                        maravilhoso! Constrói cabanas, acende fogueiras, abraça como poucos ursos o
                                        sabem
                                        fazer. Aconteça o que acontecer, estará sempre por perto, para quando o Ursinho
                                        precisar...<i className="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                                </div>
                                <div className="card-body company"><small className="intro text-muted">Link aqui</small> </div>
                            </div>

                        </div>
                        <div className="card" id='cardBody' >

                            <div className="card-body p-0">

                                <div className="profile mb-4 mt-3"> <img src={livroint3} alt-te="true" alt=" A caixa das preocupações"/> </div>

                                <div className="card-subtitle">
                                    <p> <small className="text-muted"> <i className="fas fa-quote-left"></i> O Milo tem muitas
                                        preocupações. Felizmente, a irmã Mia, sabe como ajudar. “Quando partilhamos as
                                        nossas preocupações, elas parecem mais pequenas”, confortou-o a irmã. <i
                                            className="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                                </div>
                                <div className="card-body company"> <small
                                    className="intro text-muted">Link aqui</small> </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default LivrosInt;