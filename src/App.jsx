import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [selectedServer, setSelectedServer] = useState('');
  const [textValue, setTextValue] = useState('');
  const [fileValue, setFileValue] = useState(null);

  const handleServerChange = (event) => {
    setSelectedServer(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleFileChange = (event) => {
    setFileValue(event.target.files[0]);
  };

  const handleUpload = () => {
    // Implementa la lógica para cargar la llave pública en los servidores
    console.log('Selected Server:', selectedServer);
    console.log('Text Value:', textValue);
    console.log('File:', fileValue);

    if (fileValue) {
      if (fileValue.name.endsWith('.pub')) {
        toast.success('Archivo válido. Llave cargada exitosamente.', {
          onClose: () => {
            // Agrega aquí cualquier lógica que quieras ejecutar después de la notificación
          },
        });
      } else {
        toast.error('Archivo inválido. Selecciona un archivo .pub.', {
          onClose: () => {
            // Agrega aquí cualquier lógica que quieras ejecutar después de la notificación
          },
        });
      }
    } else {
      toast.error('Por favor, selecciona un archivo para cargar.', {
        onClose: () => {
          // Agrega aquí cualquier lógica que quieras ejecutar después de la notificación
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Cargar Llave Pública SSH</h2>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="server">
            Selecciona un servidor:
          </label>
          <select
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            id="server"
            onChange={handleServerChange}
            value={selectedServer}
          >
            <option value="" disabled>Selecciona el grupo de servidores</option>
            <option value="server1">Servidor fuentes</option>
            <option value="server2">Servidor desarrollo</option>
            <option value="server3">Servidor productivo</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="textValue">
            Ingresa el nombre:
          </label>
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            id="textValue"
            rows="4"
            onChange={handleTextChange}
            value={textValue}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="fileValue">
            Seleccione el archivo id_rsa.pub
          </label>
          <input
            type="file"
            accept=".pub"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            id="fileValue"
            onChange={handleFileChange}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleUpload}
        >
          Cargar Llave
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
