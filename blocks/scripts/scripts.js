import decorateHeaderSection from './header-section.js';
import decorateFeaturedSection from './featured-section.js';
import decorateNewsSection from './news-section.js';
import decorateContactSection from './contact-section.js';

document.querySelectorAll('table').forEach((block) => {
  const blockName = block.querySelector('p span').textContent.split(' ')[0].toLowerCase();
  switch (blockName) {
    case 'header-section':
      decorateHeaderSection(block);
      break;
    case 'featured-section':
      decorateFeaturedSection(block);
      break;
    case 'news-section':
      decorateNewsSection(block);
      break;
    case 'contact-section':
      decorateContactSection(block);
      break;
    default:
      break;
  }
});