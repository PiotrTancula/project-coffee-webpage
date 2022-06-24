import { select } from './settings.js';


class Product{
  constructor() {

    const thisProduct = this;
    thisProduct.createProduct();

  }

  createProduct(){

    // eslint-disable-next-line no-unused-vars
    const thisProduct = this;

    const productSource = document.querySelector('#product-template').innerHTML;
    const tplHello = Handlebars.compile(productSource);
    const dataHello = {firstName: 'John', lastName: 'Smith'};
    let generatedHTML = tplHello();
    console.log(productSource);

    // const targetElement = document.body;
    //   targetElement.insertAdjacentHTML('beforeend', generatedHTML);
    // targetElement.appendChild(generatedHTML);
    console.log(document.querySelector(select.productsPage));
    document.querySelector(select.productsPage).insertAdjacentHTML('beforeend',generatedHTML);
    document.querySelector(select.productsPage).insertAdjacentHTML('beforeend',generatedHTML);


  }
}

export default Product;