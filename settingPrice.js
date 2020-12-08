var products =[
    {
        "id": "104",
        "oldPrice": "",
        "price": "380.000 đ"
    },
    {
        "id": "1088",
        "oldPrice": "",
        "price": "380.000 đ"
    },
    {
        "id": "1257",
        "oldPrice": "",
        "price": "360.000 đ"
    },
    {
        "id": "1491",
        "oldPrice": "",
        "price": "1.120.000 đ"
    },
    {
        "id": "1488",
        "oldPrice": "",
        "price": "380.000 đ"
    },
    {
        "id": "1090",
        "oldPrice": "",
        "price": "380.000 đ"
    },
    {
        "id": "1089",
        "oldPrice": "",
        "price": "380.000 đ"
    }
];


var eles = document.querySelectorAll('.type-product .price-wrap');
eles.forEach(setDefaultPrice);
function setDefaultPrice(ele, index) {
    ele.textContent = 'Giá: Liên hệ';
}

var detailPrice = document.querySelector('.price');
if (detailPrice) {
    detailPrice.textContent = 'Giá: Liên hệ';
}


products.forEach(setPrice);
function setPrice(price, index) {
    var priceEle = document.querySelector('.type-product.post-' + price.id + ' .price-wrap');
    if (priceEle) {
        priceEle.textContent = price.price;
    }

    //detail page
    var priceDetail = document.querySelector('#product-' + price.id + ' .price');
    if (priceDetail) {
        priceDetail.textContent = price.price;
    }
}



