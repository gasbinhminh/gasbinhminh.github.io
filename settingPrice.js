var products =[
    {
        "id": "104",
        "oldPrice": "",
        "price": "395.000 đ"
    },
    {
        "id": "1088",
        "oldPrice": "",
        "price": "395.000 đ"
    },
    {
        "id": "1257",
        "oldPrice": "",
        "price": "375.000 đ"
    },
    
    {
        "id": "1491",
        "oldPrice": "",
        "price": "1.250.000 đ"
    },
    {
        "id": "1488",
        "oldPrice": "",
        "price": "395.000 đ"
    },
    {
        "id": "1090",
        "oldPrice": "",
        "price": "395.000 đ"
    },
    {
        "id": "1089",
        "oldPrice": "",
        "price": "395.000 đ"
    },
    {
        "id": "1557",
        "oldPrice": "",
        "price": "560.000 đ"
    },
    {
        "id": "1658",
        "oldPrice": "",
        "price": "150.000 đ"
    },
    {
        "id": "1589",
        "oldPrice": "",
        "price": "560.000 đ"
    },
    {
        "id": "1562",
        "oldPrice": "",
        "price": "560.000 đ"
    },
    {
        "id": "1632",
        "oldPrice": "",
        "price": "80.000 đ"
    },
    {
        "id": "1565",
        "oldPrice": "",
        "price": "280.000 đ"
    },
    {
        "id": "1646",
        "oldPrice": "",
        "price": "250.000 đ"
    },
    {
        "id": "1634",
        "oldPrice": "",
        "price": "350.000 đ"
    },
    {
        "id": "1636",
        "oldPrice": "",
        "price": "350.000 đ"
    },
    {
        "id": "1120",
        "oldPrice": "",
        "price": "280.000 đ"
    },
    {
        "id": "1619",
        "oldPrice": "",
        "price": "280.000 đ"
    },
    {
        "id": "1537",
        "oldPrice": "",
        "price": "690.000 đ"
    },
    {
        "id": "1544",
        "oldPrice": "",
        "price": "890.000 đ"
    },
    {
        "id": "1075",
        "oldPrice": "",
        "price": "1490.000 đ"
    },
    {
        "id": "1065",
        "oldPrice": "",
        "price": "1290.000 đ"
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



