export default function decorate(block) {
  const cards = block.querySelectorAll('.card');
  cards.forEach((card) => {
    card.classList.add('card-content');
  });
}