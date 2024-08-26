export default function decorate(block) {
  const nav = block.querySelector('nav');
  nav.classList.add('nav-bar');
  const links = block.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.classList.add('nav-link');
  });
}