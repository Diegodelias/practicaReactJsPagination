import "./styles.css";
import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json"
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import  ReactPaginate from 'react-paginate';

export default function App() {
  
  const [usuarios , setUsuarios] = useState(JsonData.slice(0,50));

//state representando pagina en la que se está
  const [numeroDePagina, setNumeroDePagina] = useState(0);
  
 // cantidad de pagimas a  mostrar en cada paginado
  const usuariosPorPagina = 3;
  //pagina actual  + card por pagina
  const paginasVisitadas = numeroDePagina * usuariosPorPagina;


  const mostrarCards =  usuarios.slice(paginasVisitadas, 
    paginasVisitadas + usuariosPorPagina).map(usuario =>{
      return (
        <div className="usuario">
        <h3>{usuario.first_name}</h3>
        <h3>{usuario.last_name} </h3>
        <h3>{usuario.email}</h3>
        </div>
        

      )
      
    

    });


    // cantidad de paginas que tendrá la paginación
    const conteoPagina = Math.ceil(usuarios.length / usuariosPorPagina);
    const cambiarPagina = ({selected}) => {
      setNumeroDePagina(selected)
    };
   return (
    <div className="App">

        
        {mostrarCards}
        <ReactPaginate 
         previousLabel={"Anterior"}
         nextLabel={"Siguiente"}
         pageCount={conteoPagina}
         onPageChange={cambiarPagina}
         containerClassName={"paginationBtns"}
         previusLinkClassName={"previousBtn"}
         nextLinkClassName={"nextBtn"}
         disabledClassName={"paginationDisabled"}
         activeClassName={"paginationActive"}
        />


    </div>
  );
}
