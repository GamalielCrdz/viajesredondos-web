# Proyecto-IHC
Proyecto para el laboratorio de Interaccion Humano Computadora

 
<h1>Modo de produccion</h1>
 ng build --prod --output-path docs --base-href proyecto-lab-IHC


<script src="https://www.gstatic.com/firebasejs/4.6.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQyPdZpqFnzX2CzR4lkEcZ0lZHxJehO6w",
    authDomain: "viajesredondos-c348f.firebaseapp.com",
    databaseURL: "https://viajesredondos-c348f.firebaseio.com",
    projectId: "viajesredondos-c348f",
    storageBucket: "viajesredondos-c348f.appspot.com",
    messagingSenderId: "115458480807"
  };
  firebase.initializeApp(config);
</script>

{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}