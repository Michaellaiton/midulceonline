import React,{Fragment} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CrearCuenta from "./Paginas/auth/CrearCuenta";
import Login from "./Paginas/auth/login";
import Home from "./Paginas/Home";
import ProyectosAdmin from "./Paginas/Proyectos/ProyectosAdmin";
import ProductosCrear from "./Paginas/Proyectos/ProductosCrear";
import ProductosEditar from "./Paginas/Proyectos/ProductosEditar";


function App(){
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element ={<Login/>}/>
          <Route path="crear-cuenta" exact element ={<CrearCuenta/>}/>
          <Route path="/home" exact element ={<Home/>}/>
          <Route path="/proyectos-admin" exact element ={<ProyectosAdmin/>}/>
          <Route path="/produtos/crear" exact element ={<ProductosCrear/>}/>
          <Route path="/produtos/editar/:idproducto" exact element ={<ProductosEditar/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;