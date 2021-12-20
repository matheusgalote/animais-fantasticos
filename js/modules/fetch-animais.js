import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

  const numerosGrid = document.querySelector(target);

  // cria div contento informações dos animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa animais de uma api json
  async function criarAnimais() {
    try {
      // fetch e 'espera' resposta
      const animaisResponse = await fetch(url);
      // transforma resposta em json
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
  // fetchAnimais('./animaisapi.json');
}
