(function() {
    
    firebase.initializeApp(firebaseConfig);

    var push_to_firebase = function(data){
      var db = firebase.firestore();

      db.collection("messages").add({
          name: data["name"],
          email: data["email"],
          guest: data["guest"],
          event: data["event"],
          message: data["msg"],
          timestamp: Date.now()
      })
      .then(function(docRef) {
          console.log("Message sent, ID: ", docRef.id);
          alert("¡Gracias por ponerte en contacto!")
          location.reload();
      })
      .catch(function(error) {
          console.error("Message could not be sent: ", error);
          alert("¡Vaya, algo salió mal...!")
      });
    }

    var contact_submit = function(){
      var name = document.getElementById("name-input");
      var email = document.getElementById("email-input");
      var guest = document.getElementById("guest-input");
      var event = document.getElementById("events-input");
      var msg = document.getElementById("message-input");

      var data = {
        "name": name.value,
        "email": email.value,
        "guest": guest.value,
        "event": event.value,
        "msg": msg.value
      }
      push_to_firebase(data);

    }

    document.getElementById("submit_msg").addEventListener("click", contact_submit);
  })();
