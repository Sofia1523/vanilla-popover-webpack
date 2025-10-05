/**
 * @jest-environment jsdom
 */
import Popover from './popover';

document.body.innerHTML = `
  <button class="js-popover-trigger" data-title="Тест" data-content="Содержимое">Кнопка</button>
`;

test('popover появляется и исчезает при клике', () => {
  const popover = new Popover();
  popover.init();

  const trigger = document.querySelector('.js-popover-trigger');

  // первый клик — должен появиться
  trigger.click();
  expect(document.querySelector('.popover')).not.toBeNull();

  // второй клик — должен исчезнуть
  trigger.click();
  expect(document.querySelector('.popover')).toBeNull();
});
