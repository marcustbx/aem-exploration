export default function decorate(block) {

    const wrapperDiv = block.querySelectorAll('div')[1];
    const ul = wrapperDiv.querySelector('ul');

    wrapperDiv.classList.add('wrapper');
    wrapperDiv.appendChild(ul.cloneNode(true));
    wrapperDiv.appendChild(ul.cloneNode(true));
}
