const elements = {

    search_bar: '#search_query_top',
    btn_submit: 'button[name="submit_search"]',
    btn_signin : 'a[class="login"]'

}

class Home {

   visita_pagina(){
       cy.visit('/')
   }
  
   pesquisa_produto(produto){

       cy.get(elements.search_bar).focus().type(produto)
   }

   clicar_busca(){

       cy.get(elements.btn_submit).click()
   }
      
   sign_in(){
       cy.get(elements.btn_signin).click()
   }


}

export default new Home();