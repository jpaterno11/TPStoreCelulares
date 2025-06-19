import { useParams, NavLink } from 'react-router-dom';
import { celulares } from '../data/data';
import { Button, Carousel, Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProductoDetalle() {
  const { id } = useParams();
  const celular = celulares.find(c => c.id === Number(id));

  if (!celular) return (
    <Container className="d-flex justify-content-center align-items-center vh-100 text-light">
      <h3>Celular no encontrado</h3>
    </Container>
  );

  return (
    <>
    <Button as={NavLink} to="/" variant="outline-primary" className="flechita"><FaArrowLeft size={18}/> Volver</Button>
    <Container fluid="sm" className="producto-detalle-container text-light d-flex flex-column align-items-center py-4 px-3 card1">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-100 d-flex flex-column align-items-center"
        style={{ paddingTop: '60px' }}
      >
        <motion.h2
          className="mb-3 fw-bold"
          style={{ color: '#1a73e8', textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {celular.nombre}
        </motion.h2>
        <motion.div
          className="w-100 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Carousel variant="dark" indicators={true} interval={4000} fade>
            {celular.fotos.slice(0, 3).map((foto, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block mx-auto"
                  src={foto}
                  alt={`${celular.nombre} imagen ${idx + 1}`}
                  style={{ maxHeight: 320, objectFit: 'contain', borderRadius: '1rem', userSelect: 'none' }}
                  draggable={false}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>
        <motion.p
          className="text-secondary mb-3 px-2 text-center"
          style={{ fontSize: '1rem', lineHeight: 1.5, minHeight: '4.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {celular.descripcion}
        </motion.p>
        <motion.h4
          className="text-primary fw-bold mb-4"
          style={{ color: '#1a73e8' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          $ {celular.precio}
        </motion.h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="w-100 px-3"
        >
          <Button
            variant="primary"
            className="w-100 py-2 fw-semibold"
            onClick={() => alert('Compra completada')}
            href='/productos'
          >
            Comprar
          </Button>
        </motion.div>
      </motion.div>
    </Container>
    </>
  );
}
