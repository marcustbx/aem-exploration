export default function decorate(block) {
  const pTag = block.querySelector('p');
  pTag.classList.add('text-content');
}