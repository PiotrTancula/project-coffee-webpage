import { classNames, select, settings } from './settings.js';
import Product from './Product.js';
import Productsdata from './Productsdata.js';

const app = {


  initProductsData: function () {

    const thisApp = this;
    thisApp.apiData = {};

    for (const productData in thisApp.data.products) {
      new Productsdata(thisApp.data.products[productData].id, thisApp.data.products[productData]);
      console.log(thisApp.data.products[productData].id, thisApp.data.products[productData]);

      thisApp.apiData = {
        id: thisApp.data.products[0].id,
        title: thisApp.data.products[0].title,
        desc: thisApp.data.products[0].desc,
        roasting: thisApp.data.products[0].roasting,
        intensity: thisApp.data.products[0].intensity,
        image: thisApp.data.products[0].image,

      };
    }

    return thisApp.apiData;

  },

  initData: function () {

    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    console.log(url);

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse : ', parsedResponse);
        thisApp.data.products = parsedResponse;
        thisApp.initProductsData();
      });

  },


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
    console.log(thisApp.apiData);
    // eslint-disable-next-line no-unused-vars
    const productPage = new Product(thisApp.apiData);
    console.log(productPage);
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
    thisApp.initProductsData();
    thisApp.initPages();
    thisApp.handlebarsTemplateGenerate();
  }

};

app.init();

export default app;
