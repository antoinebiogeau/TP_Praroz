document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, email, password;

    
    email = document.getElementsByTagName("input")[2].value;
    password = document.getElementsByTagName("input")[3].value;
    btn = document.getElementsByTagName("input")[4];
    btn.addEventListener("click", e => {
        e.preventDefault();
        Connexion();
    });

    let Connexion = () => {

        email = document.getElementsByTagName("input")[2].value;
        password = document.getElementsByTagName("input")[3].value;
        btn = document.getElementsByTagName("input")[4];

        if (email && password) {
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", email);
            console.log("c'est bon");
                }
        else {
            console.log("Pas bon");
            sessionStorage.clear();
        }
    };
});