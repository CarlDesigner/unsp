import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB55XG7fEiEH4OmCViMRcsUQHjXRUVRMq0",
  authDomain: "cokkiedatabase.firebaseapp.com",
  projectId: "cokkiedatabase",
  storageBucket: "cokkiedatabase.firebasestorage.app",
  messagingSenderId: "976221604755",
  appId: "1:976221604755:web:c85f9811cb7432c1bff666"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// **🔥 Exportar Firestore correctamente**
export const db = getFirestore(app);
