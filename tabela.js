function carregar(){
      
    $.ajax({
        url: "https://iot.14mob.com/lista.json",
        data: "",
        success: function(retorno){
            tratarDados(retorno);
        } ,
        dataType: "json"
    });
}


function tratarDados(retorno){



    $(retorno).each(function(chave,valor){ //laço que se repete 3 vezez
        let conteudo = `<tr>
        <td>${valor.id}</td>
        <td><img class="foto" src="${valor.imagem}" />  </td>
        <td>${valor.nome}</td>
        <td>${valor.descricao}</td>
        
        <td>
            <button type="button" class="btn btn-primary" onclick="abrirModal()">
                abrir modal
            </button>
        </td>
      </tr>`

      let tabela = $('.minhaTabela');

      tabela.append(conteudo);
    })
    

}

function addCor(){

  var modalBody = $('.modal-body');

  modalBody.addClass("corMarrom")

}

function abrirModal(){


     $('#exampleModal').modal("show");

    var titulo = $("#exampleModalLabel");

    var body = $(".modal-body");

    //body.html("fdghfdgfdgdfgdgdfg");
    titulo.html("meu modal joao lucas");

}

carregar();
