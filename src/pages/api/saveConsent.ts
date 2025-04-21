import { db } from "~/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import type { APIRoute } from "astro";


export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { ads, analytics, timestamp } = await request.json();

    console.log("Datos recibidos:", { ads, analytics, timestamp });

    // Si el timestamp recibido es inválido, creamos uno nuevo
    const fecha = timestamp ? new Date(timestamp) : new Date();
    console.log("Fecha convertida:", fecha);

    const data = {
      ads,
      analytics,
      timestamp: Timestamp.fromDate(fecha),
    };

    console.log("Datos a guardar en Firebase:", data);

    const collectionRef = collection(db, "cookies_consent");
    await addDoc(collectionRef, data);

    return new Response("Consentimiento guardado", { status: 200 });
  } catch (error) {
    console.error("Error guardando en Firebase:", error);
    return new Response("Error interno", { status: 500 });
  }
};

//ToDo. Escribir query para leer los datos en la consola de firebase en orden ascendente o de llegada
