import { classNames, select } from './settings.js';
import Product from './Product.js';

const app = {

  activatePage: function (pageId) {

    const thisApp = this;
    thisApp.sections = document.querySelectorAll(select.sections);
    console.log(thisApp.sections[2].classList);
    console.log(thisApp.sections);
    for( let page of thisApp.pages){
      if(page.id == pageId){
        page.classList.add(classNames.pagesActive);
      }else{
        page.classList.remove(classNames.pagesActive);
      }
    }

    for(let section of thisApp.sections){
      if(section.classList.contains(pageId)){
        section.classList.add(classNames.pagesActive);
      }else{
        section.classList.remove(classNames.pagesActive);
      }
    }

    console.log(thisApp.pages);

  },

  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.mainMenuNavLinksSelector).children;

    thisApp.activatePage(thisApp.pages[0].id);
    console.log(thisApp.pages[0].classList);
    console.log(thisApp.pages[1].classList);
    console.log(thisApp.pages[2].classList);

    for (let link of thisApp.pages){
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#','');
        thisApp.activatePage(id);

      });
    }
    console.log(thisApp.pages[0].classList);
    console.log(thisApp.pages[1].classList);
    console.log(thisApp.pages[2].classList);
  },

  handlebarsTemplateGenerate: function () {

    // eslint-disable-next-line no-unused-vars
    const thisApp = this;

    // eslint-disable-next-line no-unused-vars
    const productPage = new Product();
    console.log(productPage);
  },



  init: function () {
    const thisApp = this;
    thisApp.initPages();
    thisApp.handlebarsTemplateGenerate();

  }

};

app.init();