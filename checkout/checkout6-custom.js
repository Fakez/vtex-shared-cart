// add the code below to your checkout6-custom.js file

function createSharedCartUrl() {
    orderformItems = vtexjs.checkout.orderForm.items;

    skus = [];
    qtds = [];
    sellers = [];
    
    for (i = 0; i < orderformItems.length; i++) {
        sku = orderformItems[i].id;
        qtd = orderformItems[i].quantity;
        seller = orderformItems[i].seller;
        skus[i] = sku;
        qtds[i] = qtd;
        sellers[i] = seller;
    }

    skuString = skus.join(',');
    qtdString = qtds.join(',');
    sellerString = sellers.join(',');

    queryString = `skus=${skuString}&qtds=${qtdString}&sellers=${sellers}`;

    document.getElementById('sharecart-textarea').value = document.URL.split('/checkout')[0] + '/carrinho/?' + queryString;
    document.getElementById('sharecart-container').style.display = 'block';
}

function hideShareCartContainer() {
    document.getElementById('sharecart-container').style.display = 'none';
    document.getElementById('sharecart-copy').innerText = 'COPIAR LINK';
}

function copySharedCartUrl() {
    var copyTextarea = document.getElementById('sharecart-textarea');
    copyTextarea.focus();
    copyTextarea.select();
    try {
        var successful = document.execCommand('copy');
        document.getElementById('sharecart-copy').innerText = 'LINK COPIADO COM SUCESSO';
    } catch (err) {
        console.log('Unable to copy');
    }
}

document.getElementById('sharecart-btn').addEventListener('click', createSharedCartUrl());
document.getElementById('sharecart-copy').addEventListener('click', copySharedCartUrl());
document.getElementById('sharecart-ok-btn').addEventListener('click', hideShareCartContainer());