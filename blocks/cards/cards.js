export default function decorate(block) {
  const cards = block.querySelectorAll('.card');
  cards.forEach((card) => {
    const overlay = card.querySelector('.overlay');
    overlay.classList.add('card-overlay');
  });
}