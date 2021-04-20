const elements = {

    btn_addcart: "a[title='Add to cart']"
    

}

class Search {

   clicar_addcarrinho(){

       cy.get(elements.btn_addcart).click()
   }
      


}

export default new Search();