import "../css/home.css";
// import Map from "../js/Map";
import MapKey from "../js/MapKey";

// const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MapKey.mapsKey}`;

const HomeScreen = () => {
  return (
    <div className="container-home">
      {/* Carousel */}

      <div className="container-carousel">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-10">
            <div className="carousel-home mt-4 mb-4">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://i.ibb.co/cTPcX9X/carousel-1.jpg"
                      className="d-block image-carousel"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://i.ibb.co/d5qGDqT/carousel-2.jpg"
                      class="d-block image-carousel"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://i.ibb.co/82Fgn25/carousel-3.jpg"
                      class="d-block image-carousel"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIN DE CAROUSEL */}

      {/* QUIENES SOMOS? */}

      <div className="container-quienessomos mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="titulo">
              <h1>¿Quienes somos?</h1>
            </div>
            <div className="descripcion-quienessomos">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div class="shadow p-3 mt-5 mb-1 bg-body rounded">
                    ¿QUIENES SOMOS? 🦋 Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Inventore reiciendis consequuntur
                    quibusdam non tenetur vero explicabo veniam totam. Hic
                    obcaecati inventore maxime nisi nulla illum doloremque
                    provident ipsa velit doloribus!
                  </div>
                </div>
              </div>
            </div>
            <div className="descripcion-surge">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div class="shadow p-3 mt-5 mb-5 bg-body rounded">
                    ¿COMO SURGE CREANDO ALAS? 🦋 Creando Alas surge desde el
                    anhelo del corazón de cada una de nosotras. De a poquito,
                    con esfuerzo, comunicación y pequeños pasos pero firmes es
                    que este proyecto fue tomando forma y constituyendose en un
                    espacio particular y pensado para que en él, tanto nuestros
                    alumnos como nosotras podamos desplegar alas y volar. La
                    mariposa 🦋 con su metamorfosis se convirtió en el ícono que
                    representa este proceso. Es nuestro objetivo, que cada vida
                    que ha de pasar por este lugar se vaya con herramientas,
                    conocimientos y saberes que además de ser útiles en lo
                    académico lo sean para la vida, siendo así un aprendizaje
                    significativo.
                  </div>
                </div>
              </div>
            </div>
            <div className="presentacion mt-3">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img
                      src="https://i.ibb.co/m85m6mb/maestra-1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img
                      src="https://i.ibb.co/MR4cL0Z/maestra-2.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img
                      src="https://i.ibb.co/LPd9sTT/maestra-3.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIN DE QUIENES SOMOS */}

      {/* SERVICIOS */}

      <div className="container-servicios mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="titulo-servicio">
              <h1>Servicios</h1>
            </div>
            <div className="servicios">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <img
                            className="icon-acordeon"
                            src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/000000/external-heart-wings-love-rabit-jes-outline-color-rabit-jes.png"
                          />
                          Apoyo pedagógico
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <img
                            className="icon-acordeon"
                            src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/000000/external-heart-wings-love-rabit-jes-outline-color-rabit-jes.png"
                          />
                          Apoyo a la inclusión escolar
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <img
                            className="icon-acordeon"
                            src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/000000/external-heart-wings-love-rabit-jes-outline-color-rabit-jes.png"
                          />
                          Estimulación e intervención temprana
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <img
                            className="icon-acordeon"
                            src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/000000/external-heart-wings-love-rabit-jes-outline-color-rabit-jes.png"
                          />
                          Asesoramiento a docentes y padres
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <img
                            className="icon-acordeon"
                            src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/000000/external-heart-wings-love-rabit-jes-outline-color-rabit-jes.png"
                          />
                          Adaptaciones curriculares y elaboracion de PPI
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIN DE SERVICIOS */}

      {/* CONTACTO */}

      <div className="container-contacto mt-4 mb-4">
        <div className="row">
          <div className="col-12">
            <div className="titulo-contacto">
              <h1>Contacto</h1>
            </div>
          </div>
          <div className="contacto1">
            <div className="form-contacto mt-5 mb-5">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-9">
                  <form
                    action="https://formsubmit.co/nikokart13@gmail.com"
                    method="POST"
                  >
                    <div>
                      <label
                        for="inputNombre"
                        class="form-label text-light mb-3"
                      >
                        Nombre
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        name="nombre"
                        id="inputNombre"
                        placeholder="Ingresá tu nombre"
                        pattern="[A-Z a-z]{3,30}"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="inputApellido"
                        class="form-label text-light mt-2"
                      >
                        Apellido
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        name="apellido"
                        id="inputApellido"
                        placeholder="Ingresá tu apellido"
                        pattern="[A-Z a-z]{3,30}"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="inputEmail"
                        class="form-label text-light mt-2"
                      >
                        E-mail
                      </label>
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        id="inputEmail"
                        placeholder="Ingresá tu E-mail"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="inputTextArea"
                        class="form-label text-light mt-2"
                      >
                        Escribir mensaje
                      </label>
                      <textarea
                        class="form-control"
                        id="inputTextArea"
                        rows="3"
                        placeholder="Ingresá tu mensaje"
                        pattern="[A-Z a-z]{3,500}"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button class="mt-3 float-end btn btn-info text-light">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="info-contacto">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                {/* <Map googleMapURL={mapURL} containerElement /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIN DE CONTACTO */}
    </div>
  );
};

export default HomeScreen;
