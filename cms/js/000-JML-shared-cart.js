function addFromSharedCartUrl() {
	urlParams = new URLSearchParams(window.location.search);
	skuString = urlParams.get('skus');
	qtdString = urlParams.get('qtds');
    sellerString = urlParams.get('sellers');
	skus = skuString.split(',');
	qtds = qtdString.split(',');
    sellers = sellerString.split(',');

	itemsToAdd = [];
	if (skus.length == qtds.length) {
		for(i = 0; i < skus.length; i++) {
			itemsToAdd[i] = {id: skus[i], quantity: qtds[i], seller: seller[i]}
		}
	}
	
	vtexjs.checkout.removeAllItems().done(function(orderForm) {
		vtexjs.checkout.addToCart(itemsToAdd, null).done(function(orderForm) {
			window.location.href = '/checkout/#/cart';
		});		
	});     
}

addFromSharedCartUrl()