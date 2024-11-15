export default function decorate(block) {
  const overlay = block.querySelector('div');
  overlay.classList.add('overlay');
  const button = overlay.querySelector('button');
  button.classList.add('button');
}