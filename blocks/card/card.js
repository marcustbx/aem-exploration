export default function decorate(block) {
  const overlayDivs = block.querySelectorAll('.overlay > div');
  overlayDivs.forEach((div) => {
    div.classList.add('overlay-text');
  });
  const buttons = block.querySelectorAll('.overlay > button');
  buttons.forEach((button) => {
    button.classList.add('overlay-button');
  });
}