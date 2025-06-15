import '../styles/Productos.css';
import { celulares } from '../data/data.js';
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductoCard from '../components/ProductoCard';

function Productos() {
  const { id } = useParams();
  const [fotoIndices, setFotoIndices] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [celularesFiltrados, setCelularesFiltrados] = useState([]);

  useEffect(() => {
    const filtrados = celulares.filter(celular => celular.marcaId === Number(id));
    setCelularesFiltrados(filtrados.length ? filtrados : celulares);
    setCargando(true);
    setFotoIndices([]);
  }, [id]);

  useEffect(() => {
    if (celularesFiltrados.length === 0) return;

    const validarImagen = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    const cargarFotosValidas = async () => {
      const indicesValidos = await Promise.all(
        celularesFiltrados.map(async (celular) => {
          for (let i = 0; i < celular.fotos.length; i++) {
            const esValida = await validarImagen(celular.fotos[i]);
            if (esValida) return i;
          }
          return -1;
        })
      );
      setFotoIndices(indicesValidos);
      setCargando(false);
    };

    cargarFotosValidas();
  }, [celularesFiltrados]);

  if (cargando) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Cargando productos...</p>
      </div>
    );
  }

  return (
    <ul className="parent" style={{ listStyleType: 'none' }}>
      {celularesFiltrados.map((celular, index) => {
        const indexImagen = fotoIndices[index];
        const imagenSrc = indexImagen === -1
          ? 'https://via.placeholder.com/200x200.png?text=Sin+imagen'
          : celular.fotos[indexImagen];

        return (
          <motion.li
            key={celular.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
          >
            <ProductoCard celular={celular} imagenSrc={imagenSrc} />
          </motion.li>
        );
      })}
    </ul>
  );
}

export default Productos;
