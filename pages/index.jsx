import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import QuemSomos from '../components/quemSomos';
import ContatoBanner from '../components/contatoBanner';

export default function Home() {
  return (
    <>
    
      <Header />
      <section id="home-banner" class="clearfix mb-5">
        <div id="caroselNavegadorBanner" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#caroselNavegadorBanner" data-slide-to="0" class="active"></li>
            <li data-target="#caroselNavegadorBanner" data-slide-to="1" class=""></li>
          </ol>
          <div class="carousel-inner">

            <div class="carousel-item active">
              <img src="4.png" class="d-block w-100" alt="2" />
              <div class="carousel-caption col-lg-4 col-md-5 col-sm-4 col-6 text-left">
                <h5 class="mb-2">2</h5>
                <p><a class="border-0 rounded pt-1 pb-1 pl-4 pr-4" href="/parkype/">Conheça mais</a></p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="3.png" class="d-block w-100" alt="Nossos Estacionamentos" />
              <div class="carousel-caption col-lg-4 col-md-5 col-sm-4 col-6 text-left">
                <h5 class="mb-2">Estacionamentos segurados para a sua tranquilidade</h5>
                <p><a class="border-0 rounded pt-1 pb-1 pl-4 pr-4" href="/estacionamentos/">Conheça mais</a></p>
              </div>
            </div>

          </div>
          <a class="carousel-control-prev" href="#caroselNavegadorBanner" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#caroselNavegadorBanner" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      <div class="container"><h3 class="titulo-home mb-5">Sobre nós</h3></div>
      <QuemSomos />
      <ContatoBanner />
      <section id="servicos">
        <div class="container">
          <h3 class="titulo-home mt-5 mb-5">Serviços</h3>
          <div id="servicos-itens" class="row d-flex justify-content-between">
            <div class="col-xl-5 col-md-6 mb-5">
              <div class="row">
                <div class="col-lg-12 mb-5"><img src="servicos-locacao.png" alt="Serviços Locação" class="img-fluid rounded" /></div>
                <div class="col-lg-12 mb-3"><h3>Locação de espaço</h3></div>
                <div class="col-lg-12">
                  A locação para guarda de frota segue a mesma dinâmica para locação individual, com diferencial de preço por se tratar de um volume de veículos maior.<br />
                  <a href="servicos" title="Serviços" class="rounded mt-3 pt-1 pb-1 pl-4 pr-4">Saiba Mais</a>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-md-6 mb-5">
              <div class="row">
                <div class="col-lg-12 mb-3"><h3>Convênios</h3></div>
                <div class="col-lg-12 mb-5">
                  O serviço de convênio segue a regra que o cliente achar mais conveniente para querer oferecer ao seu cliente.<br />
                  <a href="servicos" title="Serviços" class="rounded mt-3 pt-1 pb-1 pl-4 pr-4">Saiba Mais</a>
                </div>
                <div class="col-lg-12"><img src="servicos-convenios.png" alt="Convênios" class="img-fluid rounded" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
}
