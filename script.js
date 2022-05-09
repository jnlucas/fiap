
function pegaDados(){
    console.log('pega dados funcionando');
    
    
    $.ajax({
        url: "https://iot.14mob.com/lista.json",
        data: "",
        success: function(retorno){
            tratarDados(retorno);
        },
        dataType: "html"
    })


}

function tratarDados(dados){

    dados = JSON.parse(dados);

    var lista = $('.listaItens')
    
    $(dados).each(function(index,valor){
        
       let conteudo = `<div class="col-md-4">
                <div class="card" >
                    <img src="${valor.imagem}" class="card-img-top" onclick="abrirModal('${valor.nome}' , '${valor.imagem}','${ valor.descricao}' )" alt="tertertert">
                    <div class="card-body">
                    <h5 class="card-title">${valor.nome}</h5>
                    <p class="card-text">${valor.descricao}</p>
                    <button type="button" class="btn btn-primary " onclick="abrirModal( '${valor.nome}' ,'${valor.imagem}','${ valor.descricao}' )">
                        Detalhes
                    </button>

                    </div>
                </div>
            </div>`;

        lista.append(conteudo);
    

    })

    

}


function abrirModal( nome ,imagem ,descricao ){
    console.log(nome,imagem ,descricao)

    let conteudo = `<div class="col-md-12">cv   
                <div class="card" >
                    <img src= "${imagem}"  class="card-img-top"  alt="tertertert">
                    <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text">${descricao}</p>
                </div>
                </div>
            </div>`;

    $('.detalheItem').html(conteudo)   

    $('#exampleModal').modal('show');

}
// resolvendo bugs

$(function(){
    pegaDados();
})


