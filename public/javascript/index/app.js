$(".mobile-buttonlogin").click(() => {
    let username = $(".mobile-username").val();
    let password = $(".mobile-password").val();

    if(username == "" || password == ""){
        $(".mobile-error").text("fill up all the fields");
    }
    else{
        firestore.collection("Account").doc("sva1ootNyElZeI6XTHcS").get().then(doc => {
            if(doc.data().username == username){
                if(doc.data().password == CryptoJS.SHA3(password).toString()){
                    $(".mobile-error").text("");                        
                    $(location).attr('href', '/admin');
                    const data = {
                        login: "admin"
                    };
                    $.post('/api/adminlogin',data);
                }
                else{
                    $(".mobile-error").text("Incorrect Password");
                }
            }
            else{
                $(".mobile-error").text("Incorrect Username");
            }
        });
    }
});