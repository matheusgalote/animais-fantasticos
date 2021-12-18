export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal ) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this para fazer referencia ao objeto
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.closeModalWhenClickOutside = this.closeModalWhenClickOutside.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  closeModalWhenClickOutside(event) {
    if (event.target === this.containerModal) { 
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.closeModalWhenClickOutside);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }

}
