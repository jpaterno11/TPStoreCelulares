import { Card, Button } from 'react-bootstrap';

function ProductoCard({ celular, imagenSrc }) {
  return (
    <Card className="card1 h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imagenSrc}
        alt={celular.nombre}
        style={{ objectFit: 'contain', height: '200px' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{celular.nombre}</Card.Title>
        <Card.Text className="flex-grow-1 texto-muted">{celular.descripcion}</Card.Text>
        <h5 className="text-primary">$ {celular.precio}</h5>
        <Button href={`/productodetalle/${celular.id}`} variant="outline-primary" className="mt-3">
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;
