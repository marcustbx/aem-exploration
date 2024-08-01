export default function decorate(block) { block.querySelectorAll('p').forEach((p) => p.classList.add('text-content')); block.querySelector('a.join-button').classList.add('join-btn'); }
