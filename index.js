const botconv = document.querySelector(".bot");
const sel = document.querySelector(".sl1");
const selec = document.querySelector(".sl2");

function convertvalues() {
  const valdig = document.querySelector(".sl3").value;
  const valreal = document.querySelector(".pr");
  const valdolar = document.querySelector(".pr1");

  console.log(selec.value);
  console.log(sel.value);
 

  const dolar = 5;
  const euroo = 5.40;
  const libra = 6.33;
  const bitcoin = 258.458;
  const vreal = 1;

   if (selec.value == "doolar") {
    valdolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valdig / dolar );
  }
  if (selec.value == "euro") {
    valdolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valdig / euroo);
 
  }
  if (selec.value == "libra2") {
    valdolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format(valdig / libra);
  }

  if (selec.value == "bitcoin") {
    valdolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(valdig / bitcoin);
  }

  valreal.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valdig);

/////

  if (sel.value == "euro1" && selec.value == "doolar") {
    valreal.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(valdig );

    valdolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valdig  * 1.08);


   
}
}










function changeCurrency() {
  const euroname = document.getElementById("peuro");
  const banimg = document.querySelector(".imgBan");

  if (selec.value == "doolar") {
    euroname.innerHTML = "Dolar Americano";
    banimg.src = "./assets/estados-unidos (1) 1.png";
  }

  if (selec.value == "libra2") {
    euroname.innerHTML = "Libra";
    banimg.src = "assets/libra 1.png";
  }

  if (selec.value == "euro") {
    euroname.innerHTML = "Euro";
    banimg.src = "./assets/euro.png";
  }
  if (selec.value == "bitcoin") {
    euroname.innerHTML = "BitCoin";
    banimg.src = "./assets/bitcoin 1(1).png";
  }
  if (selec.value == "real") {
    euroname.innerHTML = "REAL";
    banimg.src = "./assets/brasil 2.png";
  }
}





  function rik() {

  const dinname1 = document.getElementById('pbra');
  const banimg1 = document.getElementById('imgbra');

  if (sel.value == "dolar2") {
    dinname1.innerHTML = "Dolar Americano";
    banimg1.src = "./assets/estados-unidos (1) 1.png";
  }

  if (sel.value == "libra3") {
    dinname1.innerHTML = "Libra";
    banimg1.src = "assets/libra 1.png";
  }

  if (sel.value == "euro1") {
    dinname1.innerHTML = "Euro";
    banimg1.src = "./assets/euro.png";
  }

  if (sel.value == "bitcoin1") {
    dinname1.innerHTML = "BitCoin";
    banimg1.src = "./assets/bitcoin 1(1).png";


  }
  if (sel.value == "real1") {
    dinname1.innerHTML = "REAL";
    banimg1.src = "./assets/brasil 2.png";
  }
}


sel.addEventListener("change" , rik);

selec.addEventListener("change", changeCurrency);

botconv.addEventListener("click", convertvalues);
