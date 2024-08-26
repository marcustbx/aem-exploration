export default function decorate(block) {
  const h2Tag = block.querySelector('h2');
  h2Tag.classList.add('main-heading');
  const pTag = block.querySelector('p');
  pTag.classList.add('main-paragraph');
  const imgTag = block.querySelector('img');
  imgTag.classList.add('main-image');
}