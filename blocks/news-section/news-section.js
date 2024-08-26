export default function decorate(block) {
  const h3Tag = block.querySelector('h3');
  h3Tag.classList.add('news-title');
  const h4Tags = block.querySelectorAll('h4');
  h4Tags.forEach((h4) => h4.classList.add('news-item-title'));
  const pTags = block.querySelectorAll('p');
  pTags.forEach((p) => p.classList.add('news-description'));
}