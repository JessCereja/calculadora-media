

function calcular() {

    let nome = document.querySelector("#name").value;
    let pNota = document.querySelector("#primeiranota");
    let sNota = document.querySelector("#segundanota");
    let tNota = document.querySelector("#terceiranota");
    let qNota = document.querySelector("#quartanota");
    let output = document.querySelector("#output");
  
    let pN = Number(pNota.value);
    let sN = Number(sNota.value);
    let tN = Number(tNota.value);
    let qN = Number(qNota.value);
  
    let media = (pN + sN + tN + qN) / 4;
    output.innerHTML = ``;
  
    if (pN == "" || sN == "" || tN == "" || qN == "") {
      alert(`ERROR - VALOR INVÁLIDO`);
      output.innerHTML = `Você não digitou um valor válido. Tente novamente!`;
    } else {
      if (media > 7) {
        output.innerHTML += `<p> \uD83E\uDD73 Parabéns ${nome},pode comemorar você foi aprovade!</p> Sua média final foi ${media}`;
      } else {
        output.innerHTML += `<p> \uD83D\uDCA3 Booom! Que pena ${nome}! Você foi reprovado, acho que precisa estudar mais um pouco \uD83E\uDD14</p> Sua média final foi ${media}`;
      }
    }
  
    console.log(output);
  }
  