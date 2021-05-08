export default [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
import {default as images } from './gallery-items.js';
const galleryList =  document.querySelector('.js-gallery');
const refs = {
     lightbox: document.querySelector('.lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]')
};
  
  images.forEach(src =>{
    renderImage(src);
  });

  function renderImage(src) {
    const li = document.createElement('li');
    const image = document.createElement('img');
    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = src.original;
    li.append(image, a);
    galleryList.append(li);
    image.dataset.source = src.original;
    image.src = src.preview;
    image.alt = src.description;
    li.classList.add('gallery__item');
    image.classList.add('gallery__image');
  }

  function onClickHandler(e) {
    setAttributes(e.target.dataset.source, e.target.alt);
    refs.lightbox.classList.add('is-open');
    refs.btn.classList.add('lightbox__button');
    refs.btn.classList.add('close-lightbox');
  }

  function onCloseHandler(e) {
    setAttributes('', '');
    refs.lightbox.classList.remove('is-open');
  }

 galleryList.addEventListener('click', onClickHandler);
 refs.btn.addEventListener('click', onCloseHandler);

 function setAttributes(src, alt) {
  refs.lightbox.querySelector('.lightbox__image').src = src;
  refs.lightbox.querySelector('.lightbox__image').alt = alt;
 }

 

