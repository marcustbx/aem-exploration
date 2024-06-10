import { createOptimizedPicture } from '../../scripts/aem.js';

let data = null;
let projects = null;

async function fetchPrismic() {
  try {

    data = await fetch('https://tbx--2021.cdn.prismic.io/api/v2/documents/search?ref=Zk0C6hIAAC0Aff-M&q= %5B%5Bat(document.type%2C%22home_page%22)%5D%5D')
    .then(result => result.json());

  } catch (error) {       
    console.log('There was an error fetchings homepage', error);
  }
}

async function fetchProjects() {
  try {

    projects = await fetch('https://tbx--2021.cdn.prismic.io/api/v2/documents/search?ref=Zk0C6hIAAC0Aff-M&q= %5B%5Bat(document.type%2C%22project%22)%5D%5D')
    .then(result => result.json());

  } catch (error) {       
    console.log('There was an error fetchings projects', error);
  }
}

function generateHeroMarkup(data, main) {

  const title = data.hero_title[0].text;
  const container = document.createElement('div');
  container.classList.add('section', 'hero-container');
  const wrapper = document.createElement('div');
  wrapper.classList.add('hero-wrapper');
  const block = document.createElement('div');
  block.classList.add('hero', 'block');
  block.setAttribute('data-block-name', 'hero');
  const nestedDiv = document.createElement('div');
  const nestDiv2 = document.createElement('div');
  const heading = document.createElement('h1');
  heading.id = 'hero';
  heading.innerHTML = title;
  container.prepend(wrapper);
  wrapper.prepend(block);
  block.prepend(nestedDiv);
  block.prepend(nestDiv2);
  nestDiv2.prepend(heading);

  if ( data.hero_description && data.hero_description[0] ) {

    const description = data.hero_description[0].text;
    const nestedDiv3 = document.createElement('div');
    const heading2 = document.createElement('h2');
    heading2.id = 'description';
    heading2.innerHTML = description;
    nestedDiv3.prepend(heading2);
    block.append(nestedDiv3);
  }

  main.prepend(container);
}

function generateFeaturedProjects() {

  const main = document.querySelector('main');

  if ( main ) {

    const projectsArray = projects.results;
    const section = document.createElement('div');
    section.classList.add('section', 'projects-container');

    for (let i = 0; i < projectsArray.length; i += 1) {

      const thumbnail = projectsArray[i].data.featured_thumbnail;
      const container = document.createElement('div');
      container.classList.add('project-container');

      if ( Object.keys(thumbnail).length !== 0 ) {

        const image = document.createElement('img');
        image.src = thumbnail.url;
        image.alt = thumbnail.alt;
        image.width = thumbnail.dimensions.width;
        image.height = thumbnail.dimensions.height;
        container.prepend(image);
        section.append(container);
      }
    }

    main.append(section);
  }
}

function populateMain(data) {
  const main = document.querySelector('main');

  // console.log(data);

  if ( main && data ) if ( data.hero_title && data.hero_title.length > 0 ) generateHeroMarkup(data, main);
}

async function init() {
  await fetchPrismic();
  await fetchProjects();

  if ( data ) populateMain(data.results[0].data);
  if ( projects && projects.results.length > 0 ) generateFeaturedProjects();
}

init();
