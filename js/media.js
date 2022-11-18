var n1 = prompt("Nota 1");
var n2 = prompt("Nota 2");
n1 = parseFloat(n1);
n2 = parseFloat(n2);
md = (n1 + n2) / 2;
document.write("Média:" + md + "<br>");
if (md >= 7) {
    document.write("Aprovado");
} else if (md < 5) {
    document.write("Reprovado");
} else {
    document.write("Recuperação");
}