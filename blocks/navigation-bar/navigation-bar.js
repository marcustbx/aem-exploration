export default function decorate(block) {
  const ulTag = block.querySelector('ul');
  ulTag.classList.add('nav-list');
  const aTags = block.querySelectorAll('a');
  aTags.forEach((a) => {
    a.classList.add('nav-link');
  });
}