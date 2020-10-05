import React from 'react'
// import NotFoundImg from '../images/404.png'

const Home = () => (
  <div>
    {/*==========================
  Header
  ============================*/}
    <header id="header">
      <div id="topbar">
        <div className="container">
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href="#" className="linkedin">
              <i className="fa fa-linkedin" />
            </a>
            <a href="#" className="instagram">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo float-left">
          {/* Uncomment below if you prefer to use an image logo */}
          <h1 className="text-light">
            <a href="#intro" className="scrollto">
              <span>MRBS</span>
            </a>
          </h1>
          {/* <a href="#header" class="scrollto"><img src="img/logo.png" alt="" class="img-fluid"></a> */}
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about">Info</a>
            </li>
            <li>
              <a href="#services">Buscador</a>
            </li>
            <li>
              <a href="#portfolio">login</a>
            </li>
          </ul>
        </nav>
        {/* .main-nav */}
      </div>
    </header>
    {/* #header */}
    {/*==========================
    Intro Section
  ============================*/}
    <section id="intro" className="clearfix">
  <div className="container d-flex h-100">
    <div className="row justify-content-center align-self-center">
      <div className="col-md-6 intro-info order-md-first order-last">
        <h2>Sistema de Gestion de proyectos<br /></h2>
      </div>
      <div className="col-md-6 intro-img order-md-last order-first">
      <div className="container d-flex h-100">
        <div className="row justify-content-center align-self-center">
          <div className="container ">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="item active">
                  <img
                    src="img/hola.jpg"
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="item">
                  <img
                    src="img/hola.jpg"
                    alt="Chicago"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="item">
                  <img
                    src="img/hola.jpg"
                    alt="New york"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              {/* Left and right controls */}
              <a
                className="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

    <main id="main">
      {/*==========================
About Us Section
    ============================*/}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <img src="img/about-img.jpg" alt />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="about-content">
                <h2>Informacion</h2>
                <h3>
                  Sistema de Gestion de Proyectos 
                </h3>
               
                <p>
                En la Universidad de San Buenaventura sede Bogotá, 
                no existe un sistema que muestre, organice y preserve 
                los diferentes tipos de trabajos y proyectos presentados 
                por estudiantes y/o profesores en los comités y materias 
                de los programas académicos, lo cual conlleva a una gran 
                cantidad de proyectos que no avanzan significativamente. 
                Por otro lado, los estudiantes no tienen acceso a proyectos 
                viables o en desarrollo, que se encuentran inactivos o en 
                proceso de ejecución para poder integrarse a ellos o darles 
                continuidad. Para solucionar dichos problemas, se debe crear 
                un sistema para la gestión de proyectos de investigaciones en 
                la universidad. 
                El objetivo de este estudio es implementar un repositorio web 
                para dar visibilidad y gestión de las investigaciones desarrolladas
                en la universidad San Buenaventura sede Bogotá.            
                </p>
                <ul>
                <h4>
                Beneficios de utilizar el sistema SGP :
                </h4>
                  <li>
                    <i className="ion-android-checkmark-circle" /> Mejora la visibilidad de los proyectos finalizados y en proceso.
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle" /> Mejora Gestion de proyectos por parte de Universidad.
                  </li>
                  <li>
                    <i className="ion-android-checkmark-circle" /> Mejora la gestion de creacion de patentes y derechos de autor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #about */}
      {/*==========================
Services Section
    ============================*/}
      <section id="services" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3>Services</h3>
            <p>
              Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
              partiendo abhorreant vituperatoribus.
            </p>
          </header>
          <div className="row">
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#fceef3" }}>
                  <i
                    className="ion-ios-analytics-outline"
                    style={{ color: "#ff689b" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#fff0da" }}>
                  <i
                    className="ion-ios-bookmarks-outline"
                    style={{ color: "#e98e06" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Dolor Sitema</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#e6fdfc" }}>
                  <i
                    className="ion-ios-paper-outline"
                    style={{ color: "#3fcdc7" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#eafde7" }}>
                  <i
                    className="ion-ios-speedometer-outline"
                    style={{ color: "#41cf2e" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#e1eeff" }}>
                  <i
                    className="ion-ios-world-outline"
                    style={{ color: "#2282ff" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#ecebff" }}>
                  <i
                    className="ion-ios-clock-outline"
                    style={{ color: "#8660fe" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Eiusmod Tempor</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #services */}
      {/*==========================
Why Us Section
    ============================*/}
      <section id="why-us" className="wow fadeIn">
        <div className="container-fluid">
          <header className="section-header">
            <h3>Why choose us?</h3>
            <p>
              Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
              partiendo abhorreant vituperatoribus.
            </p>
          </header>
          <div className="row">
            <div className="col-lg-6">
              <div className="why-us-img">
                <img src="img/why-us.jpg" alt className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-us-content">
                <p>
                  Molestiae omnis numquam corrupti omnis itaque. Voluptatum
                  quidem impedit. Odio dolorum exercitationem est error omnis
                  repudiandae ad dolorum sit.
                </p>
                <p>
                  Explicabo repellendus quia labore. Non optio quo ea ut ratione
                  et quaerat. Porro facilis deleniti porro consequatur et
                  temporibus. Labore est odio. Odio omnis saepe qui. Veniam
                  eaque ipsum. Ea quia voluptatum quis explicabo sed nihil
                  repellat..
                </p>
                <div className="features wow bounceInUp clearfix">
                  <i className="fa fa-diamond" style={{ color: "#f058dc" }} />
                  <h4>Corporis dolorem</h4>
                  <p>
                    Commodi quia voluptatum. Est cupiditate voluptas quaerat
                    officiis ex alias dignissimos et ipsum. Soluta at enim modi
                    ut incidunt dolor et.
                  </p>
                </div>
                <div className="features wow bounceInUp clearfix">
                  <i
                    className="fa fa-object-group"
                    style={{ color: "#ffb774" }}
                  />
                  <h4>Eum ut aspernatur</h4>
                  <p>
                    Molestias eius rerum iusto voluptas et ab cupiditate aut
                    enim. Assumenda animi occaecati. Quo dolore fuga quasi autem
                    aliquid ipsum odit. Perferendis doloremque iure nulla aut.
                  </p>
                </div>
                <div className="features wow bounceInUp clearfix">
                  <i className="fa fa-language" style={{ color: "#589af1" }} />
                  <h4>Voluptates dolores</h4>
                  <p>
                    Voluptates nihil et quis omnis et eaque omnis sint aut.
                    Ducimus dolorum aspernatur. Totam dolores ut enim ullam
                    voluptas distinctio aut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">274</span>
              <p>Clients</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">421</span>
              <p>Projects</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">1,364</span>
              <p>Hours Of Support</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">18</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
Call To Action Section
    ============================*/}
      <section id="call-to-action" className="wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-left">
              <h3 className="cta-title">Call To Action</h3>
              <p className="cta-text">
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* #call-to-action */}
      {/*==========================
Features Section
    ============================*/}
      <section id="features">
        <div className="container">
          <div className="row feature-item">
            <div className="col-lg-6 wow fadeInUp">
              <img src="img/features-1.svg" className="img-fluid" alt />
            </div>
            <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <h4>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h4>
              <p>
                Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
                possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
                Deleniti quod porro sed quisquam saepe. Numquam mollitia
                recusandae non ad at et a.
              </p>
              <p>
                Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
                Odit qui asperiores ea corporis deserunt veritatis quidem
                expedita perferendis. Qui rerum eligendi ex doloribus quia sit.
                Porro rerum eum eum.
              </p>
            </div>
          </div>
          <div className="row feature-item mt-5 pt-5">
            <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
              <img src="img/features-2.svg" className="img-fluid" alt />
            </div>
            <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
              <h4>
                Neque saepe temporibus repellat ea ipsum et. Id vel et quia
                tempora facere reprehenderit.
              </h4>
              <p>
                Delectus alias ut incidunt delectus nam placeat in consequatur.
                Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio.
                Cumque fugit earum est quam officiis numquam. Ducimus corporis
                autem at blanditiis beatae incidunt sunt.
              </p>
              <p>
                Voluptas saepe natus quidem blanditiis. Non sunt impedit
                voluptas mollitia beatae. Qui esse molestias. Laudantium libero
                nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
              </p>
              <p>
                Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore
                sint quia modi. Numquam est aut fuga mollitia exercitationem nam
                accusantium provident quia.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* #about */}
      {/*==========================
Portfolio Section
    ============================*/}
      <section id="portfolio" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3 className="section-title">Our Portfolio</h3>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="img/portfolio/app1.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">App 1</a>
                  </h4>
                  <p>App</p>
                  <div>
                    <a
                      href="img/portfolio/app1.jpg"
                      data-lightbox="portfolio"
                      data-title="App 1"
                      className="link-preview"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-wrap">
                <img src="img/portfolio/web3.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">Web 3</a>
                  </h4>
                  <p>Web</p>
                  <div>
                    <a
                      href="img/portfolio/web3.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              data-wow-delay="0.2s"
            >
              <div className="portfolio-wrap">
                <img src="img/portfolio/app2.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">App 2</a>
                  </h4>
                  <p>App</p>
                  <div>
                    <a
                      href="img/portfolio/app2.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="App 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="img/portfolio/card2.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">Card 2</a>
                  </h4>
                  <p>Card</p>
                  <div>
                    <a
                      href="img/portfolio/card2.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-wrap">
                <img src="img/portfolio/web2.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">Web 2</a>
                  </h4>
                  <p>Web</p>
                  <div>
                    <a
                      href="img/portfolio/web2.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              data-wow-delay="0.2s"
            >
              <div className="portfolio-wrap">
                <img src="img/portfolio/app3.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">App 3</a>
                  </h4>
                  <p>App</p>
                  <div>
                    <a
                      href="img/portfolio/app3.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="App 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="img/portfolio/card1.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">Card 1</a>
                  </h4>
                  <p>Card</p>
                  <div>
                    <a
                      href="img/portfolio/card1.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 1"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-card"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-wrap">
                <img src="img/portfolio/card3.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">Card 3</a>
                  </h4>
                  <p>Card</p>
                  <div>
                    <a
                      href="img/portfolio/card3.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              data-wow-delay="0.2s"
            >
              <div className="portfolio-wrap">
                <img src="img/portfolio/web1.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">Web 1</a>
                  </h4>
                  <p>Web</p>
                  <div>
                    <a
                      href="img/portfolio/web1.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 1"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #portfolio */}
      {/*==========================
Clients Section
    ============================*/}
      <section id="testimonials">
        <div className="container">
          <header className="section-header">
            <h3>Testimonials</h3>
          </header>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel testimonials-carousel wow fadeInUp">
                <div className="testimonial-item">
                  <img
                    src="img/testimonial-1.jpg"
                    className="testimonial-img"
                    alt
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </p>
                </div>
                <div className="testimonial-item">
                  <img
                    src="img/testimonial-2.jpg"
                    className="testimonial-img"
                    alt
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                  </p>
                </div>
                <div className="testimonial-item">
                  <img
                    src="img/testimonial-3.jpg"
                    className="testimonial-img"
                    alt
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                  </p>
                </div>
                <div className="testimonial-item">
                  <img
                    src="img/testimonial-4.jpg"
                    className="testimonial-img"
                    alt
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #testimonials */}
      {/*==========================
Team Section
    ============================*/}
      <section id="team" className="section-bg">
        <div className="container">
          <div className="section-header">
            <h3>Team</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp">
              <div className="member">
                <img src="img/team-1.jpg" className="img-fluid" alt />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="member">
                <img src="img/team-2.jpg" className="img-fluid" alt />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="member">
                <img src="img/team-3.jpg" className="img-fluid" alt />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="member">
                <img src="img/team-4.jpg" className="img-fluid" alt />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #team */}
      {/*==========================
Clients Section
    ============================*/}
      <section id="clients" className="wow fadeInUp">
        <div className="container">
          <header className="section-header">
            <h3>Our Clients</h3>
          </header>
          <div className="owl-carousel clients-carousel">
            <img src="img/clients/client-1.png" alt />
            <img src="img/clients/client-2.png" alt />
            <img src="img/clients/client-3.png" alt />
            <img src="img/clients/client-4.png" alt />
            <img src="img/clients/client-5.png" alt />
            <img src="img/clients/client-6.png" alt />
            <img src="img/clients/client-7.png" alt />
            <img src="img/clients/client-8.png" alt />
          </div>
        </div>
      </section>
      {/* #clients */}
      {/*==========================
Pricing Section
    ============================*/}
      <section id="pricing" className="wow fadeInUp section-bg">
        <div className="container">
          <header className="section-header">
            <h3>Pricing</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </header>
          <div className="row flex-items-xs-middle flex-items-xs-center">
            {/* Basic Plan  */}
            <div className="col-xs-12 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3>
                    <span className="currency">$</span>19
                    <span className="period">/month</span>
                  </h3>
                </div>
                <div className="card-block">
                  <h4 className="card-title">Basic Plan</h4>
                  <ul className="list-group">
                    <li className="list-group-item">Odio animi voluptates</li>
                    <li className="list-group-item">Inventore quisquam et</li>
                    <li className="list-group-item">
                      Et perspiciatis suscipit
                    </li>
                    <li className="list-group-item">24/7 Support System</li>
                  </ul>
                  <a href="#" className="btn">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            {/* Regular Plan  */}
            <div className="col-xs-12 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3>
                    <span className="currency">$</span>29
                    <span className="period">/month</span>
                  </h3>
                </div>
                <div className="card-block">
                  <h4 className="card-title">Regular Plan</h4>
                  <ul className="list-group">
                    <li className="list-group-item">Odio animi voluptates</li>
                    <li className="list-group-item">Inventore quisquam et</li>
                    <li className="list-group-item">
                      Et perspiciatis suscipit
                    </li>
                    <li className="list-group-item">24/7 Support System</li>
                  </ul>
                  <a href="#" className="btn">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            {/* Premium Plan  */}
            <div className="col-xs-12 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3>
                    <span className="currency">$</span>39
                    <span className="period">/month</span>
                  </h3>
                </div>
                <div className="card-block">
                  <h4 className="card-title">Premium Plan</h4>
                  <ul className="list-group">
                    <li className="list-group-item">Odio animi voluptates</li>
                    <li className="list-group-item">Inventore quisquam et</li>
                    <li className="list-group-item">
                      Et perspiciatis suscipit
                    </li>
                    <li className="list-group-item">24/7 Support System</li>
                  </ul>
                  <a href="#" className="btn">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #pricing */}
      {/*==========================
Frequently Asked Questions Section
    ============================*/}
      <section id="faq">
        <div className="container">
          <header className="section-header">
            <h3>Frequently Asked Questions</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </header>
          <ul id="faq-list" className="wow fadeInUp">
            <li>
              <a data-toggle="collapse" className="collapsed" href="#faq1">
                Non consectetur a erat nam at lectus urna duis?{" "}
                <i className="ion-android-remove" />
              </a>
              <div id="faq1" className="collapse" data-parent="#faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq2" className="collapsed">
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque? <i className="ion-android-remove" />
              </a>
              <div id="faq2" className="collapse" data-parent="#faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq3" className="collapsed">
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi? <i className="ion-android-remove" />
              </a>
              <div id="faq3" className="collapse" data-parent="#faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq4" className="collapsed">
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                <i className="ion-android-remove" />
              </a>
              <div id="faq4" className="collapse" data-parent="#faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq5" className="collapsed">
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat? <i className="ion-android-remove" />
              </a>
              <div id="faq5" className="collapse" data-parent="#faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq6" className="collapsed">
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{" "}
                <i className="ion-android-remove" />
              </a>
              <div id="faq6" className="collapse" data-parent="#faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  Pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus. Nibh tellus molestie nunc non
                  blandit massa enim nec.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* #faq */}
    </main>
  </div>

);

export default Home