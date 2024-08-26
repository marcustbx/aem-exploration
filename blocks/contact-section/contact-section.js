export default function decorate(block) {
  const h3Tag = block.querySelector('h3');
  h3Tag.classList.add('contact-title');
  const pTag = block.querySelector('p');
  pTag.classList.add('contact-description');
  const form = block.querySelector('form');
  form.classList.add('contact-form');
}