export default function decorate(block) {
  const footer = block.querySelector('footer');
  footer.classList.add('footer-content');
  const pTag = block.querySelector('footer p');
  pTag.classList.add('footer-text');
}