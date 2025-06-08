/* Mudar os inputs de acordo com o card selecionado */
const sections = {
  editRegFirst: document.querySelector('.first'),
  editRegSecond: document.querySelector('.second'),
  editRegThird: document.querySelector('.third')
};

const buttons = {
  nextFirst: document.querySelector('#btnNextFirst'),
  nextSecond: document.querySelector('#btnNextSecond'),
  backSecond: document.querySelector('#btnBackSecond'),
  backThird: document.querySelector('#btnBackThird')
};

function toggleSection(target) {
  Object.values(sections).forEach(section => {
    section.style.display = (section === target) ? 'flex' : 'none';
  });
}

buttons.nextFirst.onclick = () => toggleSection(sections.editRegSecond);
buttons.nextSecond.onclick = () => toggleSection(sections.editRegThird);
buttons.backSecond.onclick = () => toggleSection(sections.editRegFirst);
buttons.backThird.onclick = () => toggleSection(sections.editRegSecond);