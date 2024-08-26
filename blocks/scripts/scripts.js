import decorateHeaderSection from './header-section.js';
import decorateNavigationBar from './navigation-bar.js';
import decorateFeaturedSection from './featured-section.js';
import decorateFooterSection from './footer-section.js';

document.querySelectorAll('table').forEach((block) => {
  const blockName = block.querySelector('p.c9 span').textContent.split(' ')[0].toLowerCase();
  switch (blockName) {
    case 'header-section':
      decorateHeaderSection(block);
      break;
    case 'navigation-bar':
      decorateNavigationBar(block);
      break;
    case 'featured-section':
      decorateFeaturedSection(block);
      break;
    case 'footer-section':
      decorateFooterSection(block);
      break;
    default:
      break;
  }
});