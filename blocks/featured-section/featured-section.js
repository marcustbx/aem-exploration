export default function decorate(block) {
  const imgTag = block.querySelector('img');
  imgTag.classList.add('featured-image');
  const h2Tag = block.querySelector('h2');
  h2Tag.classList.add('featured-title');
  const pTag = block.querySelector('p');
  pTag.classList.add('featured-description');
}