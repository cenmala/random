$(function(){
  console.log('Entra al random js');

  function escondeBotones() {
    $('#btnNombreASC').hide(500);
    $('#btnNombreDESC').hide(500);
    $("#btnApellidoASC").hide(500);
    $("#btnApellidoDESC").hide(500);
    $("#btnfNacimientoASC").hide(500);
    $("#btnfNacimientoDESC").hide(500);
    $("#btnAleatorioASC").hide(500);
    $("#btnAleatorioDESC").hide(500);
    $("#btnAleatorioAuto").hide(500);
    $("#btnDocumentoASC").hide(500);
    $("#btnDocumentoDESC").hide(500);
    $("#btnUnoaUno").hide(500);
    $("#btnUnoaUnoUp").hide(500);
    $("#divGrupNom").hide();
    $("#divGrupApe").hide();
    $("#divGrupFna").hide();
    $("#divGrupDoc").hide();
    $("#divGrupAle1").hide();
    $("#divGrupAle2").hide();

    $("#divListUnoUno").hide();
    $("#divListPersona").show();

  }

  escondeBotones();

  $("#ordenaPrimerNombre").click(function(){
    console.log("Entra ordenaPrimerNombre");
    escondeBotones();
    $("#divGrupNom").show();
    $("#btnNombreASC").show(1000);
    $("#btnNombreDESC").show(1000);
  });

  $("#btnNombreASC").click(function(){
    console.log("Entra a btnNombreASC");
    integrantes.sort(function(a, b){
        var x = a.pNombre.toLowerCase();
        var y = b.pNombre.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    for(let integrante of integrantes){
      console.log(integrante.pNombre);
    };
    imprimeListado();
  });

  $("#btnNombreDESC").click(function(){
    console.log("Entra a btnNombreDESC");
    integrantes.sort(function(a, b){
        var x = a.pNombre.toLowerCase();
        var y = b.pNombre.toLowerCase();
        if (x > y) {return -1;}
        if (x < y) {return 1;}
        return 0;
    });
    for(let integrante of integrantes){
      console.log(integrante.pNombre);
    };
    imprimeListado();
  });

  $("#ordenaPrimerApellido").click(function(){
    console.log("Entra ordenaPrimerApellido");
    escondeBotones();
    $("#divGrupApe").show();
    $("#btnApellidoASC").show(1000);
    $("#btnApellidoDESC").show(1000);
  });

  $("#btnApellidoASC").click(function(){
    console.log("Entra a btnApellidoASC");
    integrantes.sort(function(a, b){
        var x = a.pApellido.toLowerCase();
        var y = b.pApellido.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    for(let integrante of integrantes){
      console.log(integrante.pApellido);
    };
    imprimeListado();
  });

  $("#btnApellidoDESC").click(function(){
    console.log("Entra a btnApellidoDESC");
    integrantes.sort(function(a, b){
        var x = a.pApellido.toLowerCase();
        var y = b.pApellido.toLowerCase();
        if (x > y) {return -1;}
        if (x < y) {return 1;}
        return 0;
    });
    for(let integrante of integrantes){
      console.log(integrante.pApellido);
    };
    imprimeListado();
  });

  $("#ordenaFechaNacimiento").click(function(){
    console.log("Entra ordenaPrimerApellido");
    escondeBotones();
    $("#divGrupFna").show();
    $("#btnfNacimientoASC").show(1000);
    $("#btnfNacimientoDESC").show(1000);
  });

  $("#btnfNacimientoASC").click(function(){
    console.log("Entra a btnfNacimientoASC");
    integrantes.sort(function(a, b){
        return new Date(a.fNacimiento) - new Date(b.fNacimiento);
    });
    for(let integrante of integrantes){
      console.log(integrante.apodo+" "+integrante.fNacimiento);
    };
    imprimeListado();
  });

  $("#btnfNacimientoDESC").click(function(){
    console.log("Entra a btnfNacimientoDESC");
    integrantes.sort(function(a, b){
      return new Date(b.fNacimiento) - new Date(a.fNacimiento);
    });
    for(let integrante of integrantes){
      console.log(integrante.apodo+" "+integrante.fNacimiento);
    };
    imprimeListado();
  });

  $("#ordenaDocumento").click(function(){
    console.log("Entra ordenaDocumento");
    escondeBotones();
    $("#divGrupDoc").show();
    $("#btnDocumentoASC").show(1000);
    $("#btnDocumentoDESC").show(1000);
  });

  $("#btnDocumentoASC").click(function(){
    console.log("Entra a btnDocumentoASC");
    integrantes.sort(function(a, b){
        return new Date(a.documento) - new Date(b.documento);
    });
    for(let integrante of integrantes){
      console.log(integrante.apodo+" "+integrante.documento);
    };
    imprimeListado();
  });

  $("#btnDocumentoDESC").click(function(){
    console.log("Entra a btnDocumentoDESC");
    integrantes.sort(function(a, b){
      return new Date(b.documento) - new Date(a.documento);
    });
    for(let integrante of integrantes){
      console.log(integrante.apodo+" "+integrante.documento);
    };
    imprimeListado();
  });

  $("#ordenaAleatorio").click(function(){
    console.log("Entra ordenaPrimerApellido");
    escondeBotones();
    $("#divGrupAle1").show();
    $("#btnAleatorioASC").show(1000);
    $("#btnAleatorioDESC").show(1000);
    $("#btnAleatorioAuto").show(1000);
  });

  $("#btnAleatorioASC").click(function(){
    console.log("Entra a btnAleatorioASC");
    cambiaRandom();
    integrantes.sort(function(a, b){
        return a.nRandom - b.nRandom;
    });
    console.log("Muestra Ordenado ASC");
    for(let integrante of integrantes){
      console.log(integrante.apodo+" "+integrante.nRandom);
    };
    imprimeListado();
  });

  $("#btnAleatorioDESC").click(function(){
    console.log("Entra a btnAleatorioDESC");
    cambiaRandom();
    integrantes.sort(function(a, b){
      return b.nRandom - a.nRandom;
    });
    console.log("Muestra Ordenado DESC");
    for(let integrante of integrantes){
      console.log(integrante.apodo+" "+integrante.nRandom);
    };
    imprimeListado();
  });

  $("#btnAleatorioAuto").click(function(){
    console.log("Entra a btnAleatorioAuto");
    // cambiaRandom();
    integrantes.sort(function(a, b){
      return 0.5 - Math.random();
    });
    console.log("Muestra Ordenado DESC");
    for(let integrante of integrantes){
      console.log(integrante.apodo+" "+integrante.nRandom);
    };
    imprimeListado();
  });

  var posicion = 0;
  $("#ordenaUnoUno").click(function(){
    console.log("Entra ordenaUnoUno");
    escondeBotones();
    randomInicial();
    $("#divListPersona").hide();
    $("#divGrupAle2").show();
    $("#btnUnoaUno").show(1000);
    $("#btnUnoaUnoUp").show(1000);
    $('#listUnoUno').empty();
    posicion=0;
  });

  var top = 0
  $("#btnUnoaUno").click(function(){
    console.log("Entra a btnUnoaUno");
    $("#divListUnoUno").show();
    top = 0;
    imprimeListUnoUno(top);
  });

  $("#btnUnoaUnoUp").click(function(){
    console.log("Entra a btnUnoaUnoUp");
    $("#divListUnoUno").show();
    top = 1;
    imprimeListUnoUno(top);
  });

  function imprimeListUnoUno(){
    console.log("Entra a imprimeListUnoUno");
    // console.log(integrantes);
    console.log("Posición: "+posicion);
    console.log("Largo: "+integrantes.length);
    animaDivListUnoaUno();
    if(posicion == (integrantes.length-1)){
      $("#divListUnoUno").addClass("alert alert-success");
    }else {
      $("#divListUnoUno").removeClass("alert alert-success");
    }
    if(posicion < integrantes.length){
      if (top==1){
        $('#listUnoUno').prepend('<li class="list-group-item list-group-item-action"> '+integrantes[posicion].pNombre+' '+integrantes[posicion].pApellido+'</li>');
      }else{
        $('#listUnoUno').append('<li class="list-group-item list-group-item-action"> '+integrantes[posicion].pNombre+' '+integrantes[posicion].pApellido+'</li>');
      }
    }else {
      randomInicial();
      $('#listUnoUno').empty();
      posicion=0;
      $('#listUnoUno').append('<li class="list-group-item list-group-item-action"> '+integrantes[posicion].pNombre+' '+integrantes[posicion].pApellido+'</li>');
    }
    posicion++;
    console.log(posicion);
  }

  function animaDivListUnoaUno(){
    $("#divListUnoUno").animate({width: '80%', opacity: '0.8'}, 200);
    $("#divListUnoUno").animate({width: '100%', opacity: '0.4'}, 200);
    $("#divListUnoUno").animate({width: '90%', opacity: '0.9'}, 200);
    $("#divListUnoUno").animate({width: '100%', opacity: '1'}, 200);
  }

  function cambiaRandom(){
    console.log("Entra a cambiaRandom");
    for(let integrante of integrantes){
      integrante.nRandom = 0;
      integrante.nRandom = Math.random();
      console.log(integrante.apodo+" : "+integrante.nRandom);
    };
  }

  function imprimeListado(){
    console.log("Entra a imprimeListado");
    $('#listado').empty();
    animaDivList();
    for(let integrante of integrantes){
      $('#listado').append('<li class="list-group-item list-group-item-action"> '+integrante.pNombre+' '+integrante.pApellido+'</li>');
    };
  }

  function animaDivList(){
    $("#divListPersona").animate({width: '80%', opacity: '0.8'}, 250);
    $("#divListPersona").animate({width: '100%', opacity: '0.4'}, 250);
    $("#divListPersona").animate({width: '90%', opacity: '0.9'}, 250);
    $("#divListPersona").animate({width: '100%', opacity: '1'}, 250);
  }

  var integrantes = [
    {
      "documento":9981668271,
      "pNombre":"Cesar",
      "pApellido":"Manrique",
      "apodo":"cManrique",
      "fNacimiento":"1980/10/02",
      "nRandom":0,
    },
    {
      "documento":9040916948,
      "pNombre":"Edwin",
      "pApellido":"Velasco",
      "apodo":"eVelasco",
      "fNacimiento":"1980/10/04",
      "nRandom":0,
    },
    {
      "documento":9095491011,
      "pNombre":"Diego",
      "pApellido":"Cortes",
      "apodo":"dCortes",
      "fNacimiento":"1980/10/17",
      "nRandom":0,
    },
    {
      "documento":3241129548,
      "pNombre":"Edison",
      "pApellido":"Morales",
      "apodo":"eMorales",
      "fNacimiento":"1980/10/02",
      "nRandom":0,
    },
    {
      "documento":9956161116,
      "pNombre":"Boris",
      "pApellido":"Morales",
      "apodo":"bMorales",
      "fNacimiento":"1980/06/03",
      "nRandom":0,
    },
    {
      "documento":9664495063,
      "pNombre":"Carlos",
      "pApellido":"Nova",
      "apodo":"cNova",
      "fNacimiento":"1980/06/20",
      "nRandom":0,
    },
    {
      "documento":8139374840,
      "pNombre":"Sergio",
      "pApellido":"Bautista",
      "apodo":"sBautista",
      "fNacimiento":"1980/07/05",
      "nRandom":0,
    },
    {
      "documento":6888755295,
      "pNombre":"Edwin",
      "pApellido":"Nova",
      "apodo":"eNova",
      "fNacimiento":"1980/08/05",
      "nRandom":0,
    },
    {
      "documento":4577831946,
      "pNombre":"Viviana",
      "pApellido":"Espinosa",
      "apodo":"vEspinosa",
      "fNacimiento":"1980/03/05",
      "nRandom":0,
    },
    {
      "documento":4980774413,
      "pNombre":"Jorge",
      "pApellido":"Castañeda",
      "apodo":"jCastañeda",
      "fNacimiento":"1980/02/07",
      "nRandom":0,
    },
    {
      "documento":5412353401,
      "pNombre":"Juan",
      "pApellido":"Bermudez",
      "apodo":"jBermudez",
      "fNacimiento":"1980/08/06",
      "nRandom":0,
    }
  ];

  function randomInicial(){
    integrantes.sort(function(a, b){
      return 0.5 - Math.random();
    });
  }

  console.log(integrantes.length);
  randomInicial();
  imprimeListado();


  // for(let integrante of integrantes){
  //   console.log("Primer Nombre: " + integrante.pNombre);
  //   console.log("Primer Apellido: " + integrante.pApellido);
  //   console.log("Documento de Identidad: " + integrante.documento);
  //   console.log("Número Aleatorio: " + integrante.nRandom);
  //   console.log("Cumpleaños: " + integrante.fNacimiento);
  // };

});

//muestra los botones para saber como quiere ordenar el primer nombre
// function ordenaPrimerNombre(){
//   console.log("Entra ordenaPrimerNombre");
//   $("#pNombreASC").show(2500);
//   $("#pNombreDESC").show(1000);
// }
