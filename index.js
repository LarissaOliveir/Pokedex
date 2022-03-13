/*
    O QUE O JAVASCRIPT VAI FAZER??
    - quando clicar em um outro cartao 
    que esta na listagem o que 
    estiver aparecendo será escondido.

    2 elementos que serao trabalhados:
    cartao e listagem

    FUTURO UPGRADE
    - botao para adicionar mais um pokedex e um
    estilo: cor.

    criar variaveis no js para trabalhar com 
    os elementos da tela 

    - remover a classe aberto.
    - usar id do pokemon pra saber qual cartao
    mostrar
    - remover a classe ativa que marca o pokemon 
    selecionado

    *classe ativa onde esta a cor roxa na listagem, 
    onde mostra qual cartao esta selecionado.
*/

/* //////////////////////////////////////////////// */
/* 
    querySelectorAll - um método 
    (parametros) 

    - .pokemon = onde é a listagem
    - .cartao-pokemon = é onde esta todo o cartao que mostra

    *criar um evento para os clicks
*/
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

/* iterar a lista e colocar o click para todos, 
sem precisar de criar de um por um 

=> function - onde executa acoes
    function soma(n1, n2,){
        console.log(n1 + n2)
    }

*/
listaSelecaoPokemons.forEach(pokemon => {
    //criar evento de click 
    pokemon.addEventListener('click', () => {

        //remover a classe aberto so do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        /* essa é a funcao que vai executar quando o click
        acontecer */
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNalistagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNalistagem.classList.add('ativo')
    })
})

// o ponto . é para buscar um valor ou um metodo







































