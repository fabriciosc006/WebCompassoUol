import Home from '../pages/Home'
import Search from '../pages/Search'

Given(/^que acesso a pagina principal$/, () => {
	Home.visita_pagina();
});

When(/^pesquiso na barra de pesquisa por "([^"]*)"$/, (produto) => {
	Home.pesquisa_produto(produto);
    Home.clicar_busca();

});

When(/^eu adiciono ao carrinho de busca$/, () => {
	cy.get("div[class='product-image-container']", {timeout:10000}).should('be.visible');
    Search.clicar_addcarrinho();
});

Then(/^retorna o produto adicionado ao carrinho$/, () => {
	    
    cy.get('div[class="clearfix"]', {timeout:10000}).should('be.visible');
    cy.get("span[class='ajax_cart_product_txt_s  unvisible']").should(($div) => {
        const text = $div.text()
      
        //expect(text).to.match(/"Product successfully added to your shopping cart"/)
        expect(text).to.include('items in your cart')
        
      });
});
