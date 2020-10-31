angular.module("minhasDiretivas", []).directive("meuPainel", function () {
  //toda diretiva precisa retornar um DDO - a Directive Definition Object  (é a diretiva toda configurada, o componente)
  let ddo = {};

  ddo.restrict = "AE"; //AE significa "Atribute Element". Significa que a diretiva poderá ser usada como um atributo de outro elemento HTML ou como um elemento HTML por si só.
  ddo.scope = {
    //Com esse codigo, estou criando um escopo isolado na minha diretiva - desse modo, ela só vai funcionar com as coisas que receber do mundo externo, mas não vai alterar as coisas DO mundo externo. Com isso, facilitamos a reutilização da diretiva, impedindo que ela atrapalhe o funcionamento de componentes externos ou da página como um todo.
    titulo: "@titulo", //eu estou definindo o nome da propriedade que ficará exposta e receberá valores de outros componentes - no caso, @titulo. Assim, por exemplo, quando eu usar o componente posso fazer algo assim> <meu-painel titulo="teste"></meu-painel>, e eu terei criado uma variavel 'titulo' no Scope da diretiva como valor 'teste'
  };

  ddo.transclude = true; //vai dizer ao ângular que qualquer elemento passado dentro desta diretiva pelo pai deverá ser adicionado como um element dentro do template quando este for renderizado

  ddo.templateUrl = "js/directives/meu-painel.html"; //Importando o template ao invés de escrever aqui

  return ddo;
});

//OBS: se usarmos camelCase no nome da diretiva (exemplo, meuPainel), na hora de usá-la precisamos escrever com hífen, ou seja, meu-painel.
