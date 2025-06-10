/* Mudar os inputs de acordo com o card selecionado */
const sections = {
  regIlpiFirst: document.querySelector('.first'),
  regIlpiSecond: document.querySelector('.second'),
  regIlpiThird: document.querySelector('.third'),
  regIlpiFourth: document.querySelector('.fourth')
};

const buttons = {
  btnToFirst: document.querySelector('.btnToFirst'),
  btnToSecond: document.querySelector('.btnToSecond'),
  btnToSecond2: document.querySelector('.btnToSecond2'),
  btnToThird: document.querySelector('.btnToThird'),
  btnToThird2: document.querySelector('.btnToThird2'),
  btnToFourth: document.querySelector('.btnToFourth')
};

function toggleSection(target) {
  Object.values(sections).forEach(section => {
    section.style.display = (section === target) ? 'flex' : 'none';
  });
}

buttons.btnToFirst.onclick = () => toggleSection(sections.regIlpiFirst);
buttons.btnToSecond.onclick = () => toggleSection(sections.regIlpiSecond);
buttons.btnToSecond2.onclick = () => toggleSection(sections.regIlpiSecond);
buttons.btnToThird.onclick = () => toggleSection(sections.regIlpiThird);
buttons.btnToThird2.onclick = () => toggleSection(sections.regIlpiThird);
buttons.btnToFourth.onclick = () => toggleSection(sections.regIlpiFourth);