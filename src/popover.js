export default class Popover {
    constructor() {
      this.popover = null;
    }
  
    init() {
      document.addEventListener('click', (e) => this.handleClick(e));
    }
  
    handleClick(e) {
      const trigger = e.target.closest('.js-popover-trigger');
      if (trigger) {
        // если клик по кнопке с popover — показываем или скрываем
        this.toggle(trigger);
      } else if (this.popover && !this.popover.contains(e.target)) {
        // клик вне popover — закрыть
        this.hide();
      }
    }
  
    toggle(trigger) {
      if (this.popover) {
        this.hide();
      } else {
        this.show(trigger);
      }
    }
  
    show(trigger) {
      const title = trigger.dataset.title;
      const content = trigger.dataset.content;
  
      this.popover = document.createElement('div');
      this.popover.className = 'popover';
      this.popover.innerHTML = `
        <div class="popover-title">${title}</div>
        <div class="popover-content">${content}</div>
      `;
      document.body.appendChild(this.popover);
  
      // позиционирование над элементом
      const rect = trigger.getBoundingClientRect();
      const popoverRect = this.popover.getBoundingClientRect();
  
      this.popover.style.position = 'absolute';
      this.popover.style.top = `${rect.top - popoverRect.height - 8 + window.scrollY}px`;
      this.popover.style.left = `${rect.left + rect.width / 2 - popoverRect.width / 2 + window.scrollX}px`;
    }
  
    hide() {
      if (this.popover) {
        this.popover.remove();
        this.popover = null;
      }
    }
  }
  