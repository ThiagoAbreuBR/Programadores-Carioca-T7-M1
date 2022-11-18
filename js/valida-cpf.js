function DigiteseuCPF(){
while(true){
cpf = prompt("Digite seu CPF: ");
if (cpf.length == "11") {
    alert("Seu CPF foi validado com sucesso");
    break;}
    else{
        alert("Seu CPF não foi validado")
}
}
}