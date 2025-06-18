import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container
        className="my-5 p-4 rounded shadow contacto-bg text-white"
        style={{ maxWidth: 600 }}
      >
        <h1 className="mb-4 fw-bold display-5 text-center">Contáctanos</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label className="fw-semibold">Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="contacto-input"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="fw-semibold">Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
              className="contacto-input"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="mensaje">
            <Form.Label className="fw-semibold">Mensaje:</Form.Label>
            <Form.Control
              as="textarea"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribí tu mensaje acá..."
              rows={5}
              required
              className="contacto-textarea"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 fw-bold py-3">
            Enviar mensaje
          </Button>
        </Form>

        <hr className="my-5 border-light" />

        <p className="fw-semibold mb-3">También podés contactarnos por:</p>

        <p className="mb-2">
          Email:{' '}
          <a href="mailto:contacto@nombredetuempresa.com" className="text-primary fw-semibold">
            contacto@nombredetuempresa.com
          </a>
        </p>
        <p className="mb-3">
          Teléfono:{' '}
          <a href="tel:+5491112345678" className="text-primary fw-semibold">
            +54 9 11 1234-5678
          </a>
        </p>

        <div className="d-flex justify-content-center gap-4 fs-3">
          <a
            href="https://facebook.com/NovaTechMobile"
            target="_blank"
            rel="noreferrer"
            className="text-white contacto-icon-facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/NovaTechMobile"
            target="_blank"
            rel="noreferrer"
            className="text-white contacto-icon-instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noreferrer"
            className="text-white contacto-icon-whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </Container>
    </motion.div>
  );
}
