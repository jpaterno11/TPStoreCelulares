import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { marcas, celulares } from '../data/data.js';
import '../styles/Home.css';
import { motion } from 'framer-motion';

function Home() {
  const celuPorMarca = marcas.map(marca => {
    return celulares.find(celular => celular.marcaId === marca.id);
  });

  return (
    <Container className="my-5">
      <section>
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start">
            <motion.h1 
              className="display-4 fw-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Bienvenido a <span className="text-primary">NovaTech Mobile</span>
            </motion.h1>
            <motion.p
              className="lead texto-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Los mejores celulares y accesorios a un clic de distancia.
              Explora nuestra variedad de marcas y encuentra tu próximo smartphone.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button as={Link} to="/productos" variant="primary" size="lg" className="mt-3 button">
                Ver Productos
              </Button>
            </motion.div>
          </Col>
          <Col md={6} className="text-center">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png" 
              alt="Smartphone"
              className="img-fluid"
              style={{ maxHeight: '350px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </Col>
        </Row>
      </section>

      <section>
        <h2 className="mb-4 text-center fw-bold">Productos Destacados</h2>
        <Row className="g-4 justify-content-center">
          {celuPorMarca.map((producto, index) => (
            <Col key={producto.id} xs={12} sm={6} md={3} className="d-flex">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.4 }}
                className="w-100"
              >
                <Card className="card1 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={producto.fotos[1]}
                    alt={producto.nombre}
                    style={{ objectFit: 'contain', height: '200px' }}
                  />
                  <Card.Body className="d-flex flex-column flex-grow-1">
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text className="flex-grow-1 texto-muted descripcion-limitada">
                      {producto.descripcion}
                    </Card.Text>
                    <h5 className="text-primary">$ {producto.precio}</h5>
                    <Button as={Link} to={`/productodetalle/${producto.id}`} variant="outline-primary" className="mt-3 button">
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      <section className="my-5 text-center">
        <h2 className="fw-bold mb-4">Nuestras Marcas</h2>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {marcas.map((marca, index) => (
            <motion.div
              key={marca.nombre}
              className="p-3 border rounded shadow-sm"
              style={{ maxWidth: '120px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
            >
              <img src={marca.logo} alt={marca.nombre} className="img-fluid mb-2" style={{ maxHeight: '50px' }} />
              <Button href={`/productos/${marca.id}`} variant="dark">{marca.nombre}</Button>
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Home;
