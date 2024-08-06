import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  const footerWrapper = block.querySelector('.footer-content');
  const footerContainer = footerWrapper.firstElementChild;
  const columns = footerContainer.querySelectorAll('div');

  columns.forEach(el => { 
    el.classList.add('column');
    el.querySelector('p').remove();
  });

  footerContainer.classList.add('footer-container');
}
