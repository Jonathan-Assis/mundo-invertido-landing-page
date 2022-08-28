import { subscribeToHellfireClub, getHellfireClubSubscriptions } from './firebase/hellfire-club.js';

// Get the value of the form field
const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

const subscriptionList = document.getElementById('subscriptions')


// Event Listener to set the form field value to submit
btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

// Submit to DB Firebase
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log(`Id da sua inscrição: ${subscriptionId}`)

// Clear form:
    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''

    alert(`Seja bem-vindo ${subscription.name} ao Clube Hellfire`)
})

// Show all data in the collection and make the member list
async function loadData() {
    const subscriptionsData = getHellfireClubSubscriptions()
    console.log('Seus inscritos:', subscriptionsData)

    const subscriptions = await getHellfireClubSubscriptions()
    subscriptionList.innerHTML = subscriptions.map(sub => `

        <li>${sub.name} - ${sub.character}</li>

    `).join('')
}

loadData()