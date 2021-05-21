import Link from 'next/link';

export default function Header() {
    return (
        <header class="container-fluid clearfix">
            <button id="bt-menu" onClick="toggleMenu()" class="d-block d-sm-none rounded"><i class="fas fa-bars"></i></button>
            <div class="container topo-container">
                <div class="topo row">
                    <div id="logo" class="col-lg-2 col-12 col-md-12">
                        <h1>
                            <Link href="/">
                                <a><img src="logo.png" /></a>
                            </Link>
                        </h1>
                    </div>
                    <div id="menu" class="col-lg-10 col-md-12">
                        <ul>
                            <li class="d-block d-sm-none" id="menu-titulo">MENU</li>
                            <li>
                                <Link href="/">
                                    <a title="Página Inicial">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/quemSomos">
                                    <a title="Quem Somos">Quem Somos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/estacionamentos">
                                    <a title="Estacionamentos">Estacionamentos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicos">
                                    <a title="Serviços">Serviços</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato">
                                    <a title="Fale Conosco">Contato</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </header>
    );
}