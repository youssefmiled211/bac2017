function alpha(ch)
{
    ch=ch.toUpperCase()
    i=0;
    tst=true
    while ((tst==true )&& (i<ch.length)){
        if((ch.charAt(i)<"A")||(ch.charAt(i)>"Z")){
            tst=false
        }
        i++;

    }
    return tst;
}
function chiff(ch){
    i=0
    tst=true
    while ((tst==true )&& (i<ch.length)){
        if((ch.charAt(i)<"0")||(ch.charAt(i)>"9")){
            tst=false
        }
        i++;

    }
    return tst;

}
function verif1(){
    cin=document.getElementById("cin").value;
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    tel=document.getElementById("tel").value;
    article=document.getElementById("art").selectedIndex;
    prix=document.getElementById("prix").value;
    if(article==0){
        alert("choix obligatoire")
    }
    if((cin.length!=8)|| (chiff(cin)==false)||cin.charAt(0)<"0"||cin.charAt(0)>"1"){
        alert("cin est inccorect")
    }
    if(alpha(nom)==false || nom.length<3||nom.length>30){
        alert("votre nom incorrect")
    }
    if(alpha(prenom)==false || prenom.length<3||prenom.length>30){
        alert("votre prenom incorrect")
    }
    if((cin.length!=8)|| (chiff(cin)==false)||cin.charAt(0)==0){
        alert("votre telephone incorrect")
    }
    if(isNaN(prix)||prix<=0){
        alert("prix supperier de 0")
    }

}