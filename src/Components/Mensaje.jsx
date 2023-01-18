import { useForm } from "react-hook-form";
import { db, fireStore } from "../Firebase/conexion_firebase";
import moment from "moment/moment";

function Mensaje() {
   const createItem = async (datos) => {
      const colRef = fireStore.collection(db, "Mensajes");
      const data = await fireStore.addDoc(colRef, datos);
      return data.id;
   };

   const comprobarMensaje = (datos) => {
      if (datos.mens != "") {
         let mens = { mensaje: datos.mens, hora: moment().format("HH:mm"), fecha: moment().format("DD/MM/YYYY") };
         createItem(mens);
      }
   };

   const { register, handleSubmit } = useForm();
   const onSubmit = (datos) => comprobarMensaje(datos);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input defaultValue="Mensaje" {...register("mens")} />
         <input type="submit" />
      </form>
   );
}

export default Mensaje;
