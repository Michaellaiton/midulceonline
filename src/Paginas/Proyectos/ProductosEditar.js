import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import SidebarContainer from "../../Componentes/SidebarContainer";
import ContentHeader from "../../Componentes/ContentHeader";
import Navbar from "../../Componentes/Navbar";
import Footer from "../../Componentes/Footer";

const ProductosEditar = () => {
  const navigate = useNavigate();
  const { idproducto } = useParams();
  let arreglo = idproducto.split("@");
  const idProducto = arreglo[0];

  const [producto, setProducto] = useState({
    id: idProducto,
    nombre: "",
    precio: "",
    categoria: "",
    region: "",
  });

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const editarProducto = async (e) => {
    e.preventDefault();

    // Llamar directamente a la API sin try-catch, esto asume que las llamadas a la API siempre son exitosas.
    const response = await APIInvoke.invokePUT(`/productos/${idProducto}`, producto);

    if (response && response.id) {
      setProducto(response);
      navigate("/proyectos-admin");

      const msg = "El Producto fue editado correctamente";
      swal({
        title: "Información",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
    } 
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer/>
      <div className="content-wrapper">
        <ContentHeader
          Titulo={"Edición de Productos"}
          breadcrumb1={"Lista de Productos"}
          breadcrumb2={"Edición"}
          ruta1={"/proyectos-admin"}
        />
        <section className="content">
          <div className="card-header">
            <h3 className="card-title">
              <Link
                to="/proyectos-admin"
                type="button"
                className="btn btn-block btn-primary btn-sm"
              >
                Volver a la Lista
              </Link>
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={editarProducto}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="id">ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    placeholder="Ingrese el ID del producto"
                    value={producto.id}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese el Nombre del producto"
                    value={producto.nombre}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="precio">Precio:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="precio"
                    name="precio"
                    placeholder="Ingrese el Precio del producto"
                    value={producto.precio}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="categoria">Categoría:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoria"
                    name="categoria"
                    placeholder="Ingrese la Categoría del producto"
                    value={producto.categoria}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="region">Región:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="region"
                    name="region"
                    placeholder="Ingrese la Región del producto"
                    value={producto.region}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductosEditar;
