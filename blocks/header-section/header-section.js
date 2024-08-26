export default function decorate(block) {
  const h1Tag = block.querySelector('h1');
  h1Tag.classList.add('header-title');
  const pTag = block.querySelector('p');
  pTag.classList.add('header-subtitle');
}