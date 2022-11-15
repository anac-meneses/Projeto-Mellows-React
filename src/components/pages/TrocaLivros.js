import React from 'react';
import { Link } from 'react-router-dom';

import melows from '../img/melows.png';
import rapunzel from '../img/rapunzel.jpg';
import principe from '../img/principe.jpg';
import alice from '../img/alice.jpg'
import '../../styles/home.css'

function TrocaLivros() {
    return (
        <>
            {/* // Banner Principal */}
            < section id='body' >
                <div className="p-5 mb-4 rounded;" id='jumbo'>
                    <h1 className='text-center' id='jumboTitle'>Troca de Livros</h1>
                    <p>A nossa área de troca de livros tem como objetivo distribuir a maior quantidade de livros que pudermos!
                        Olha quantas
                        opções legais temos disponíveis pra você compartilhar com seus amigos:</p>
                    <p className="text-center"><strong>Vem se aventurar com a gente!</strong></p>

                    <button id="btnL" className="btn" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Escolha os livros</button>

                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1"
                        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title " id="sideMenu">Gêneros</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul id='lista'>
                                <li><Link to="" className='link'>Contos</Link></li>
                                <li><Link to="" className='link'>Crônicas</Link></li>
                                <li><Link to="" className='link'>Lendas e Mitos</Link></li>
                                <li><Link to="" className='link'>Fábulas</Link></li>
                            </ul>
                        </div>
                        <picture> <img src={melows} alt="mellows" id='mellow' /></picture>
                    </div>
                </div>


                {/* // conteúdo principal */}
                <main className='flex-container'>

                    <div className="card" id='cardPrincipal' >
                        <img src={rapunzel} className="card-img-top mt-3" alt="rapunzel" id='cardImg' />
                        <div className="card-body text-center" id='cardPrincipal'>
                            <h5 className="card-title">Rapunzel</h5>
                            <p className="card-text">A narrativa infantil que conquistou gerações, fala sobre uma
                                moça de cabelos muito compridos que
                                vivia trancada numa torre, por ordem de uma bruxa malvada.</p>
                            <button className="rounded btn btn-outline-secondary" id="btnDown1"><i className="fa-solid fa-download"></i></button>
                        </div>
                    </div>


                    <div className="card" id='cardPrincipal' >
                        <img src={principe} className="card-img-top mt-3" alt="pequeno principe" id='cardImg' />
                        <div className="card-body text-center" id='cardPrincipal'>
                            <h5 className="card-title">O Pequeno Príncipe</h5>
                            <p className="card-text">A história da amizade
                                entre um homem frustrado por ninguém compreender os seus desenhos, com um principezinho que habita
                                um asteroide no espaço.
                            </p>
                            <button className="rounded btn btn-outline-secondary" id="btnDown2"><i className="fa-solid fa-download"></i></button>
                        </div>
                    </div>

                    <div className="card" id='cardPrincipal' >
                        <img src={alice} className="card-img-top mt-3"
                            alt="alice no pais das maravilhas" id='cardImg' />
                        <div className="card-body text-center" id='cardPrincipal'>
                            <h5 className="card-title">Alice no País das Maravilhas</h5>
                            <p className="card-text">Uma menina curiosa que decide seguir um coelho branco,
                                quando de repente cai em sua toca e é levada a um reino de criaturas estranhas.</p>
                            <button className="rounded btn btn-outline-secondary" id='btnDown3'><i className="fa-solid fa-download"></i></button>
                        </div>
                    </div>
                </main>
                {/* botão de upload */}

                <p className="text-center mt-5"><b>Troque seus livros com outras crianças</b></p>
                <div className="input-group mb-5 mx-auto" id='input'>
                    <input type="file" className="form-control my-2" aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload" />
                    <button className="btn btn-outline-secondary my-2" id='btnInput'><i className="fa-solid fa-upload"></i></button>
                </div>

            </section >
        </>
    );
}

export default TrocaLivros;