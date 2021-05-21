export default function Footer() {
    return (
        <footer class="container-fluid clearfix">
            <div id="rodape-logo" class="container-fluid">
                <div class="container text-center">
                    <img src="logo.png" />
                </div>
            </div>
            <div class="container">
                <div id="rodape-info" class="row d-flex justify-content-around text-center">

                    <div class="col-xl-2 col-lg-4 col-md-4 col-5 rodape-info"><img src="icon-telefone.png"  class="mb-2" /><br />(34) 3321-8581</div>
                    <div class="col-xl-3 col-lg-4 col-md-4 col-7 rodape-info"><img src="icon-mail.png"  class="mb-2" /><br />contato@parkype.com.br</div>
                    <div class="col-xl-3 col-lg-4 col-md-4 col-12 rodape-info"><img src="icon-mapa.png" class="mb-2" /><br />Av. Nenem Sabino, 1970<br />Santos Dumont, Uberaba/MG</div>


                </div>
            </div>
        </footer>
    );
}