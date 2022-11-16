import React from 'react'

import mellowVerde from '../img/mellowVerde.png';
import carousel1 from '../img/carousel1.jpg';
import carousel2 from '../img/carousel2.jpg';
import carousel3 from '../img/carousel3.jpg';

import '../../styles/home.css';

function Home() {
    return (
        <section id='body'>
            <div className="container">
                <div className="row mb-5" >
                    <div className="col-md-6">
                        <div className="card mt-5" id="mellowVerde">
                            <img className="card-img-top" src={mellowVerde} alt="card" />
                            <div className="card-body" id='mellowVerde'>
                                <h5 className="card-title">Oi, eu sou o Mellow!</h5>
                                <p className="card-text">Eu e meus amigos queremos aprender junto com vocês, vamos nessa?</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" id="carrossel">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={carousel1} className="imgCarousel" alt="menino lendo" style={{ height: "350px", width: "600px" }} />
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel2} className="imgCarousel" alt="crianças lendo" style={{ height: "350px", width: "600px" }} />
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel3} className="imgCarousel" alt="mãe lendo para filha" style={{ height: "350px", width: "600px" }} />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="row my-2">
                            <p className="text-center" id="legenda">A leitura estimula a imaginação e a criatividade!</p>
                        </div>
                    </div>



                </div>    </div>
        </section>

    );
}
export default Home;