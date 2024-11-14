export default function decorate(block) {
  const cards = block.querySelectorAll('table');
  cards.forEach((card) => {
    card.classList.add('card');
  });
}