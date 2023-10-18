//Os console.log são apenas para fins de teste e verificação.
var buttonn=document.getElementById("enviarButton");
var menu2=document.getElementById("menu2");
var menu3=document.getElementById("menu3");
var menu4=document.getElementById("menu4");
var DiasSema=document.getElementById("DiasSema");
var Segunda1=document.getElementById("Segunda1");
var Terca1=document.getElementById("Terca1");
var Quarta1=document.getElementById("Quarta1"); 
var Quinta1=document.getElementById("Quinta1");
var Sexta1=document.getElementById("Sexta1");
var Sabado1=document.getElementById("Sabado1");
var Domingo1=document.getElementById("Domingo1");
var buttonIMC=document.getElementById("IMC"); 
var divsecundaria=document.getElementById("movimentodiv");
var divsecundaria2=document.getElementById("principalIMC");
var semaaaa; var id; var d; var clix=true;
var yyyo=false;
var imc22=true; 
 piscaPisca(); 
function piscaPisca(){setInterval(function(){
    if(clix){
    if(imc22){
        buttonIMC.style.width="3%";
        buttonIMC.style.height="3%";
        buttonIMC.style.border="2px rgba(244,60,32,1) outset";
        imc22=!imc22;
    }else{
        buttonIMC.style.width="2%";
        buttonIMC.style.height="2%";
        buttonIMC.style.border="1px rgb(77, 3, 3) outset";
        imc22=!imc22;
    }}else{
        if(imc22){
            buttonIMC.style.width="5%";
            buttonIMC.style.height="3%";
            buttonIMC.style.border="2px aliceblue outset";
            imc22=!imc22;
        }else{
            buttonIMC.style.width="4%";
            buttonIMC.style.height="2%";
            buttonIMC.style.border="1px darkblue outset";
            imc22=!imc22;
        }
    }},1000);
}
var BS=[]; var BT=[]; var BQ=[]; var BQI=[]; var BSEX=[]; var BSA=[]; var BD=[];
document.addEventListener("keydown",function(event){	enviar(event);  });
buttonn.addEventListener("click",refeicao);
buttonIMC.addEventListener("click",movimentdiv);
function enviar(event){
    if(event.keyCode === 13){
        refeicao();
    }
}
function   reformular(semaaaa){
switch(semaaaa){
    case "BS":
        for (let i = 0; i < BS.length; i++){
            BS[i].id=i;
    Segunda1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${BS[i].Almoco} </td> <td width="30px">  </td></tr>  <tr>  <td width="30px" > <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BS';   id='${BS[i].id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${BS[i].Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BS';   id='${BS[i].id}'; editar(semaaaa,id); ">editar</button> </td></tr> <tr>  <td width="30px">   </td>    <td>    ${BS[i].Janta}   </td>   <td width="30px">  </td></tr><br>`;}
    break;
    case "BT":
        for (let i = 0; i < BT.length; i++){
            BT[i].id=i;
        Terca1.innerHTML+=`  <tr>  <td width="30px">  </td><td> ${BT[i].Almoco} </td> <td width="30px">     </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BT';   id='${BT[i].id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${BT[i].Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BT';   id='${BT[i].id}'; editar(semaaaa,id); " >editar</button> </td></tr> <tr>  <td width="30px">   </td>    <td>    ${BT[i].Janta}   </td>   <td width="30px"></td></tr><br>`;}
    break;
    case "BQ": 
    for (let i = 0; i < BQ.length; i++){
        BQ[i].id=i;
        Quarta1.innerHTML+=`  <tr>  <td width="30px">  </td><td> ${BQ[i].Almoco} </td> <td width="30px">   </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BQ';   id='${BQ[i].id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${BQ[i].Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BQ';   id='${BQ[i].id}'; editar(semaaaa,id); " >editar</button> </td></tr> <tr>  <td width="30px">   </td>    <td>    ${BQ[i].Janta}   </td>   <td width="30px">   </td></tr><br>`;}
    break;
    case "BQI":
        for (let i = 0; i < BQI.length; i++){
            BQI[i].id=i;
        Quinta1.innerHTML+=`  <tr>  <td width="30px">  </td><td> ${BQI[i].Almoco} </td> <td width="30px"> </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BQI';   id='${BQI[i].id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${BQI[i].Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%" onclick="semaaaa='BQI';   id='${BQI[i].id}'; editar(semaaaa,id); "  >editar</button> </td></tr> <tr>  <td width="30px">  </td>    <td>    ${BQI[i].Janta}   </td>   <td width="30px">  </td></tr><br>`;}
    break;
    case "BSEX":
        for (let i = 0; i < BSEX.length; i++){
            BSEX[i].id=i;
        Sexta1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${BSEX[i].Almoco} </td> <td width="30px"> </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BSEX';   id='${BSEX[i].id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${BSEX[i].Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BSEX';   id='${BSEX[i].id}'; editar(semaaaa,id); "  >editar</button> </td></tr> <tr>  <td width="30px"> </td>    <td>    ${BSEX[i].Janta}   </td>   <td width="30px">  </td></tr><br>`;}
    break;
    case "BSA":
        for (let i = 0; i < BSA.length; i++){
            BSA[i].id=i;
        Sabado1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${BSA[i].Almoco} </td> <td width="30px">    </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BSA';   id='${BSA[i].id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${BSA[i].Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BSA';   id='${BSA[i].id}'; editar(semaaaa,id); "  >editar</button> </td></tr> <tr>  <td width="30px">  </td>    <td>    ${BSA[i].Janta}   </td>   <td width="30px">   </td></tr><br>`;}
    break;
    case "BD":
        for (let i = 0; i < BD.length; i++){
            BD[i].id=i;
            Domingo1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${BD[i].Almoco} </td> <td width="30px">   </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BD';   id='${BD[i].id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${BD[i].Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BD';   id='${BD[i].id}'; editar(semaaaa,id); "   >editar</button> </td></tr> <tr>  <td width="30px">  </td>    <td>    ${BD[i].Janta}   </td>   <td width="30px">   </td></tr><br>`;}
    break;

}
}
function exclusao(semaaaa,id){
    console.log(semaaaa,id);//só teste.
    switch(semaaaa){
        case "BS":
            console.log(12164556);//só teste.
            for (let i = 0; i < BS.length; i++){
                if (i == id ){
                    BS.splice(id, 1);
                    Segunda1.innerHTML =``;
                    reformular(semaaaa);
                }
            }
        break;
        case "BT":
            console.log(12164556);
            for (let i = 0; i < BT.length; i++){
                if (i == id ){
                    BT.splice(id, 1);
                    Terca1.innerHTML =``;
                    reformular(semaaaa);
                }
            }
        break;
        case "BQ":
            console.log(12164556);
            for (let i = 0; i < BQ.length; i++){
                if (i == id ){
                    BQ.splice(id, 1);
                    Quarta1.innerHTML =``;
                    reformular(semaaaa);
                }
            }
        break;
        case "BQI":
            console.log(12164556);
            for (let i = 0; i < BQI.length; i++){
                if (i == id ){
                    BQI.splice(id, 1);
                    Quinta1.innerHTML =``;
                    reformular(semaaaa);
                }
            }
        break;
        case "BSEX":
            console.log(12164556);
            for (let i = 0; i < BSEX.length; i++){
                if (i == id ){
                    BSEX.splice(id, 1);
                    Sexta1.innerHTML =``;
                    reformular(semaaaa);
                }
            }
        break;
        case "BSA":
            console.log(12164556);
            for (let i = 0; i < BSA.length; i++){
                if (i == id ){
                    BSA.splice(id, 1);
                    Sabado1.innerHTML =``;
                    reformular(semaaaa);
                }
            }
        break;
        case "BD":
            console.log(12164556);
            for (let i = 0; i < BD.length; i++){
                if (i == id ){
                    BD.splice(id, 1);
                    Domingo1.innerHTML =``;
                    reformular(semaaaa);
                }
            }
        break;
    }}
function editar(semaaaa,id){
    console.log(semaaaa,id);
    var alm=prompt("digite um novo prato para o almoço:");
    var lan=prompt("digite um novo prato para o Lanche:");
    var jan=prompt("digite um novo prato para o janta:");

    switch(semaaaa){
        case "BS":
            console.log(12164556);
            for (let i = 0; i < BS.length; i++){
            if (i == id ){
                BS[i].Almoco = alm;
                BS[i].Lanche = lan;
                BS[i].Janta = jan;
                BS[i].dia ="Segunda1";
                Segunda1.innerHTML = ``;
                reformular(semaaaa);
            }
        }  break;
        case "BT":
            console.log(12164556);
            for (let i = 0; i < BT.length; i++){
            if (i == id ){
                BT[i].Almoco =  alm;
                BT[i].Lanche =  lan;
                BT[i].Janta = jan;
                BT[i].dia = "Terca1";
                Terca1.innerHTML = ``;
                reformular(semaaaa);
            }
        }  break;
        case "BQ":
            console.log(12164556);
            for (let i = 0; i < BQ.length; i++){
            if (i == id ){
                BQ[i].Almoco =  alm;
                BQ[i].Lanche =  lan;
                BQ[i].Janta = jan;
                BQ[i].dia = "Quarta1";
                Quarta1.innerHTML = ``;
                reformular(semaaaa);
            }
        }  break;
        case "BQI":
            console.log(12164556);
            for (let i = 0; i < BQI.length; i++){
            if (i == id ){
                BQI[i].Almoco =alm;
                BQI[i].Lanche = lan;
                BQI[i].Janta = jan;
                BQI[i].dia = "Quinta1";
                Quinta1.innerHTML = ``;
                reformular(semaaaa);
            }
        }  break;
        case "BSEX":
            console.log(12164556);
            for (let i = 0; i < BSEX.length; i++){
            if (i == id ){
                BSEX[i].Almoco = alm;
                BSEX[i].Lanche =lan;
                BSEX[i].Janta = jan;
                BSEX[i].dia = "Sexta1";
                Sexta1.innerHTML = ``;
                reformular(semaaaa);
            }
        }  break;
        case "BSA":
            console.log(12164556);
            for (let i = 0; i < BSA.length; i++){
            if (i == id ){
                BSA[i].Almoco = alm;
                BSA[i].Lanche = lan;
                BSA[i].Janta = jan;
                BSA[i].dia = "Sabado1";
                Sabado1.innerHTML = ``;
                reformular(semaaaa);
            }
        }  break;
        case "BD":
            console.log(12164556);
            for (let i = 0; i < BD.length; i++){
            if (i == id ){
                console.log(12)
                BD[i].Almoco = alm;
                BD[i].Lanche = lan;
                BD[i].Janta = jan;
                BD[i].dia ="Domingo1";
                BD[i].innerHTML = ``;
                reformular(semaaaa);
            }
        }  break;
    }
}
function refeicao(){
    if(menu2.value != "" && menu3.value != "" && menu4.value != ""){

        let comidaa = new Object();
        comidaa.Almoco = menu2.value;
        comidaa.Lanche = menu3.value;
        comidaa.Janta = menu4.value;
        comidaa.dia = DiasSema.value;
        switch(DiasSema.value){ 
            case "Segunda1":
             comidaa.id = BS.length;
             BS.push(comidaa);
             Segunda1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${comidaa.Almoco} </td> <td width="30px">   </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BS';   id='${comidaa.id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${comidaa.Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BS';   id='${comidaa.id}'; editar(semaaaa,id); ">editar</button> </td></tr> <tr>  <td width="30px">  </td>    <td>    ${comidaa.Janta}   </td>   <td width="30px">  </td></tr><br>`;
            break;
            case "Terca1":
                comidaa.id=BT.length;
                 BT.push(comidaa);
                Terca1.innerHTML+=`  <tr>  <td width="30px">  </td><td> ${comidaa.Almoco} </td> <td width="30px">  </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BT';   id='${comidaa.id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${comidaa.Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BT';   id='${comidaa.id}'; editar(semaaaa,id); " >editar</button> </td></tr> <tr>  <td width="30px">  </td>    <td>    ${comidaa.Janta}   </td>   <td width="30px">   </td></tr><br>`;
            break;
            case "Quarta1": 
                comidaa.id =BQ.length;
                BQ.push(comidaa);
                Quarta1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${comidaa.Almoco} </td> <td width="30px">   </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BQ';   id='${comidaa.id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${comidaa.Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BQ';   id='${comidaa.id}'; editar(semaaaa,id); " >editar</button> </td></tr> <tr>  <td width="30px">  </td>    <td>    ${comidaa.Janta}   </td>   <td width="30px"> </td></tr><br>`;
            break;
            case "Quinta1":
                comidaa.id=BQI.length;
                BQI.push(comidaa);
                Quinta1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${comidaa.Almoco} </td> <td width="30px"></td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BQI';   id='${comidaa.id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${comidaa.Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%" onclick="semaaaa='BQI';   id='${comidaa.id}'; editar(semaaaa,id); "  >editar</button> </td></tr> <tr>  <td width="30px">  </td>    <td>    ${comidaa.Janta}   </td>   <td width="30px">  </td></tr><br>`;
            break;
            case "Sexta1":
                comidaa.id =BSEX.length;
                BSEX.push(comidaa);
                Sexta1.innerHTML+=`  <tr>  <td width="30px"></td><td> ${comidaa.Almoco} </td> <td width="30px">     </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BSEX';   id='${comidaa.id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${comidaa.Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BSEX';   id='${comidaa.id}'; editar(semaaaa,id); "  >editar</button> </td></tr> <tr>  <td width="30px">  </td>    <td>    ${comidaa.Janta}   </td>   <td width="30px">   </td></tr><br>`;
            break;
            case "Sabado1":
                comidaa.id=BSA.length;
                BSA.push(comidaa);
                Sabado1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${comidaa.Almoco} </td> <td width="30px">  </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BSA';   id='${comidaa.id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${comidaa.Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BSA';   id='${comidaa.id}'; editar(semaaaa,id); "  >editar</button> </td></tr> <tr>  <td width="30px"> </td>    <td>    ${comidaa.Janta}   </td>   <td width="30px">  </td></tr><br>`;
            break;
            case "Domingo1":
                comidaa.id=BD.length;
                BD.push(comidaa);
                Domingo1.innerHTML+=`  <tr>  <td width="30px"> </td><td> ${comidaa.Almoco} </td> <td width="30px">    </td></tr>  <tr>  <td width="30px"> <button width="100%" heidth="100%" class="oooooo" onclick="semaaaa='BD';   id='${comidaa.id}'; exclusao(semaaaa,id); "> X </button></td> <td>  ${comidaa.Lanche} </td> <td width="30px">   <button class="oooooo" width="99%" heidth="99%"  onclick="semaaaa='BD';   id='${comidaa.id}'; editar(semaaaa,id); "   >editar</button> </td></tr> <tr>  <td width="30px"> </td>    <td>    ${comidaa.Janta}   </td>   <td width="30px">  </td></tr><br>`;
            break;
        }

    }else{ 
    let campoVazio=[];
    let campos={
        "almoco" : menu2.value,
        "Lanche" : menu3.value,
        "Janta": menu4.value
    } ;
    for(let campo in campos){
        if(campos[campo] == ""){ campoVazio.push(campo);}
    }
    console.log(campoVazio);
    alert("preencha as celulas vazias : "+campoVazio)
}}
function movimentdiv(){
    yyyo=!yyyo;
    clix=!clix;
     if(yyyo){
        buttonIMC.style.backgroundImage="linear-gradient(152deg, rgba(2,0,36,1) 24%, rgba(9,9,121,1) 62%, rgba(0,212,255,1) 100%)";
        buttonIMC.innerHTML="Cardápio";
            divsecundaria.style.left="0.5%";
            divsecundaria2.style.left="20%";
        }else{
            buttonIMC.style.backgroundImage="linear-gradient(153deg, rgba(140,20,9,1) 34%, rgba(226,4,4,1) 68%, rgba(244,60,32,1) 80%)";
            buttonIMC.innerHTML="IMC";
            divsecundaria.style.left="-100%";
            divsecundaria2.style.left="-65%";
        } 
}
function calcular() { 
    const resultado = document.querySelector('#resultado2');
    const altura = document.querySelector('#altura1').value;
    const peso = document.querySelector('#peso1').value;
  
    if (altura !== '' && peso !== '') {
      const imc = (peso / (altura * altura)).toFixed(2);
      let classificacao = '';
  
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imc < 34.9) {
        classificacao = 'Obesidade grau I';
      } else if (imc < 39.9) {
        classificacao = 'Obesidade grau II';
      } else {
        classificacao = 'Obesidade grau III';
      }
  
      resultado.innerHTML = `IMC: ${imc} (${classificacao})`;
    } else {
      resultado.innerHTML = 'Preencha todos os campos';
    }
  }
  document.querySelector('#calcular').addEventListener('click', calcular);