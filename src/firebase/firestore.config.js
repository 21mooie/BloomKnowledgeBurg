import app from './firebase.config';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore(app);

const firestoreDB = {
    addDoc: async function(collectionName, document){
        return await addDoc(collection(db, collectionName), document);
    },
    getDocs: async function(collectionName){
        return await getDocs(collection(db, collectionName));
    }
}

export default firestoreDB;