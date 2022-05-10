var retornoGlobal;

function carregar(){
      
    $.ajax({
        url: "https://iot.14mob.com/lista.json",
        data: "",
        success: function(retorno){
            tratarDados(retorno);
            popularSelect(retorno);

            retornoGlobal = retorno;

        } ,
        dataType: "json"
    });
}

function popularSelect(param){

    let select = $('.form-select')

    $(param).each(function(chave,valor){
        
        let conteudo = `<option value="${valor.id}">${valor.nome}</option>`;

        select.append(conteudo)
    })
    


}

function tratarDados(retorno){



    $(retorno).each(function(chave,valor){ //laço que se repete 3 vezez
        let conteudo = `<tr onclick="abrirModal('${valor.nome}','${valor.descricao}','${valor.imagem}')" >
        <td>${valor.id}</td>
        <td><img class="foto" src="${valor.imagem}" />  </td>
        <td>${valor.nome}</td>
        <td>${valor.descricao}</td>
        
        
      </tr>`

      let tabela = $('.minhaTabela');

      tabela.append(conteudo);
    })
    

}

function addCor(){

  var modalBody = $('.modal-body');

  modalBody.addClass("corMarrom")

}


function selecionaValor(valor){

    //var valor = $('.form-select').val();
    // for(i = 0; i < retornoGlobal.length; i ++){
    //     if(valor == retornoGlobal[i].id){
            
    //         abrirModal(retornoGlobal[i].nome,retornoGlobal[i].descricao,retornoGlobal[i].imagem)

    //     }  
    // }

    $(retornoGlobal).each(function(chave,valorLaco){
        if(valor == valorLaco.id){
            abrirModal(valorLaco.nome,valorLaco.descricao,valorLaco.imagem)
        } 
    })
    
}


function abrirModal(nome,descricao,imagem){


     $('#exampleModal').modal("show");

    var titulo = $("#exampleModalLabel");
    titulo.html(nome);

    
    var teste = $(".modal-body");


    let conteudo = `<div class="col-md-12">
        <div class="card" >
            <img src="${imagem}" class="card-img-top"  alt="tertertert">
            <div class="card-body">
            <h5 class="card-title">${nome}</h5>
            <p class="card-text">${descricao}</p>
        </div>
        </div>
    </div>`;
    
    teste.html(conteudo);
}

carregar();
