import '../styles/QuienesSomos.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

function QuienesSomos() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.3, duration: 0.6 },
    }),
  };
  return (
    <>
    <div className="quienes-somos-bg text-white py-5">
      <Container>
        <motion.h1
          className="text-center fw-bold mb-5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Quiénes Somos
        </motion.h1>

        <Row className="align-items-center mb-4">
          <Col md={6}>
            <motion.p
              className="lead"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              En <strong>NovaTech Mobile</strong> no vendemos solo celulares: acercamos tecnología de calidad a personas reales, con necesidades reales. Desde nuestro primer día, nos propusimos construir una tienda que combine lo mejor de dos mundos: la innovación del mercado tecnológico y la cercanía del trato personalizado.
            </motion.p>
          </Col>
          <Col md={6}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Tecnología y personas"
                fluid
                rounded
              />
            </motion.div>
          </Col>
        </Row>

        <Row className="align-items-center mb-4 flex-md-row-reverse">
          <Col md={6}>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              Nuestra pasión por los dispositivos móviles nos llevó a seleccionar cuidadosamente cada producto que ofrecemos. Trabajamos con marcas reconocidas como Apple, Samsung, Xiaomi y Motorola, garantizando siempre autenticidad, garantía oficial y precios competitivos.
            </motion.p>
          </Col>
          <Col md={6}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <Image
                src="https://cdn.pixabay.com/photo/2017/07/16/20/44/mobile-phone-2510529_1280.jpg"
                alt="Dispositivos móviles"
                fluid
                rounded
              />
            </motion.div>
          </Col>
        </Row>

        <Row className="align-items-center mb-4">
          <Col md={6}>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              Entendemos que elegir un celular no es solo una compra: es una inversión, una herramienta de trabajo, un canal de comunicación, una extensión de la vida cotidiana. Por eso nos comprometemos con cada cliente como si fuera el único, brindando asesoramiento claro, transparente y sin vueltas.
            </motion.p>
          </Col>
          <Col md={6}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                alt="Comunicación y asesoramiento"
                fluid
                rounded
              />
            </motion.div>
          </Col>
        </Row>

        <Row className="align-items-center mb-4 flex-md-row-reverse">
          <Col md={6}>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={7}
            >
              Además, creemos que la tecnología debe estar al alcance de todos. Por eso ofrecemos múltiples métodos de pago, financiación, y promociones especiales, pensando tanto en quienes buscan lo último de lo último como en quienes necesitan funcionalidad sin romper el bolsillo.
            </motion.p>
          </Col>
          <Col md={6}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={8}
            >
              <Image
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=600&q=80"
                alt="Financiación y promociones"
                fluid
                rounded
              />
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={9}
            >
              A lo largo del tiempo, fuimos creciendo gracias a la confianza de nuestros clientes y al boca en boca. Hoy, <strong>NovaTech Mobile</strong> es mucho más que una tienda: es una comunidad que valora la calidad, la atención y la honestidad.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={10}
            >
              Seguimos trabajando día a día para ofrecer una experiencia cada vez mejor. Nos encanta escuchar a nuestros clientes, mejorar en base a sus sugerencias, y estar presentes antes, durante y después de cada compra.
            </motion.p>
            <motion.p
              className="mb-0"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={11}
            >
              Gracias por confiar en nosotros. Y si todavía no nos conocías… <em>¡bienvenido!</em>
            </motion.p>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default QuienesSomos
