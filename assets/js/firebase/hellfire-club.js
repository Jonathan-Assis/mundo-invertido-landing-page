import app from './app.js'
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

// function to update the form
export async function subscribeToHellfireClub(subscription){
    //Get the DB personal credentials(Firebase-firestore) in the app.js
    const db = getFirestore(app)
    // Select hellfire-club collection name
    const hellfireClubCollection = collection(db, 'hellfire-club')
    // Update the form to DB
    const docRef = await addDoc(hellfireClubCollection, subscription)

    return docRef.id
}

export async function getHellfireClubSubscriptions() {
    //Get the DB personal credentials(Firebase-firestore) in the app.js
    const db = getFirestore(app)
    // Select hellfire-club collection name
    const hellfireClubCollection = collection(db, 'hellfire-club')
    // Select the current Docs in the DB
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection)
    // select each record
    const subscriptions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data())

    return subscriptions
}