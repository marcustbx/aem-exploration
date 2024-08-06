export default function decorate(block) { 
    const links = block.querySelectorAll('a'); 
    links.forEach(link => { link.classList.add('meeting-link'); }); 
    const buttons = block.querySelectorAll('button'); 
    buttons.forEach(button => { button.classList.add('response-button'); }); 
}