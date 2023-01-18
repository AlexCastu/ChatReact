import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { db, fireStore } from "../Firebase/conexion_firebase";

const Conversacion = () => {
   const [mensaje, setMensajes] = useState([]);

   const mostrarResultados = (data) => {
      setMensajes(data.map((mensaje) => <p> {mensaje.doc.data.value.mapValue.fields.mensaje.stringValue} </p>));
   };
   const getItems = async () => {
      const colRef = fireStore.collection(db, "Mensajes");
      const result = await fireStore.getDocs(fireStore.query(colRef));
      mostrarResultados(result._snapshot.docChanges);
   };
   useEffect(() => {
      getItems();
   }, []);

   return mensaje;
};

export default Conversacion;
