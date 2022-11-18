function DigiteseuEmail(){
while(true){
    email = prompt ("Digite seu E-mail: ");
    if ((email.includes("@")) && (email.includes(".com"))) {
        alert("Email válidado com sucesso");
        break;}
        else{ 
            alert("Email inválido, DIGITE NOVAMENTE");
        }
}
}
