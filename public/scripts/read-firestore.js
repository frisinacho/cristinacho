(function() {
    
    firebase.initializeApp(firebaseConfig);

    var read_from_firebase = function(data){
      var read = firebase.firestore();

      const messagesRef = read.collection('messages');

      messagesRef
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            guest: doc.data().guest,
            event: doc.data().event,
            message: doc.data().message,
            timestamp: doc.data().timestamp,
          }));
          console.log("All data in 'messages' collection", data);
        })
        .catch(function(error) {
          console.error("Data could not be read: : ", error);
          alert("¡Vaya, algo salió mal...!")
      });
    }

    document.getElementById("read_data").addEventListener("click", read_from_firebase);
  })();
