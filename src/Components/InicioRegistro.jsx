import React from "react";
import { useForm } from "react-hook-form";
import "../Styles/InicioRegistro.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/conexion_firebase";

const InicioRegistro = () => {
   const { register, handleSubmit } = useForm();
   const onSubmit = (datos) => loginWithCredentials(datos.user, datos.pass);

   const loginWithCredentials = async (email, password) => {
      try {
         const resp = await signInWithEmailAndPassword(auth, email, password);
         console.log(resp.user.uid);
      } catch (e) {
         console.log(e);
      }
   };
   return (
      <>
         <div className="wrapperDivInicioRegistro">
            <div className="ContainerI-R">
               <h1>Iniciar sesion</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <input {...register("user")} placeholder="User" />
                  <input {...register("pass")} placeholder="Password" />
                  <input type="submit" />
               </form>
            </div>
         </div>
      </>
   );
};

export default InicioRegistro;
