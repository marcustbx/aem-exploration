export default function decorate(block) {
  const overlayDivs = block.querySelectorAll('.overlay');
  overlayDivs.forEach((overlay) => {
    overlay.classList.add('overlay-style');
  });
  const buttons = block.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.classList.add('button-style');
  });
}