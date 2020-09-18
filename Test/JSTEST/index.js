/*
    CSS => Bootstrap 사용

    JS 관련
    - 이벤트를 활용할 수 있느냐?? => click, dblclick
    - 클래스의 추가와 삭제, element의 스타일을 바꿀 수 있는가? 
    - element를 생성할 수 있는가??
    - 객체와 배열을 활용할 수 있느냐?? 
    - 반복문을 활용할 수 있느냐??
    - setInterval을 활용할 수 있는가??
    - template 활용이 가능한가?? (선택 사항, createElement로도 가능할 듯)
*/
/*
    주요 기능
    - sidebar 생성
    - 쇼핑 목록 생성
    - 시계 생성
    - 더블클릭 시 장바구니 이미지에 숫자 추가
    - sidebar에 내가 추가한 장바구니 목록 생성
*/
const aside = document.querySelector('aside')
const cartImg = document.querySelector('#cart-img')
const rmBtn = document.querySelector('.rm-btn')
const cartContainer = document.querySelector('#shopping-cart-container')
const num = document.querySelector('#num')
const currentTime = document.querySelector('#currentTime')
const payBtn = document.querySelector('#payBtn')

// 장바구니 목록
let myCartList = []

// 이 객체는 제공해주는 게 좋을 듯
const productList = [
    {
        "product-name": "MEN'S BETTER THAN NAKED&trade; JACKET",
        "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
        "header-top-right-text": "Shop All",
        "header-top-left-text": "Men's",
        "product-url": "http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html",
        "header-top-right-url": "http://www.thenorthface.com/en_US/shop-mens/",
        "product-cta-text": "Shop Now"
    },
    {
        "product-name": "WOMEN'S BETTER THAN NAKED&trade; JACKET",
        "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
        "header-top-right-text": "Shop All",
        "header-top-left-text": "Women's",
        "product-url": "http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html",
        "header-top-right-url": "http://www.thenorthface.com/en_US/shop-womens/",
        "product-cta-text": "Shop Now"
    },
    {
        "product-name": "WOMEN'S SINGLE-TRACK SHOE",
        "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
        "header-top-right-text": "Shop All",
        "header-top-left-text": "Running Shoes",
        "product-url": "http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html",
        "header-top-right-url": "http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes",
        "product-cta-text": "Shop Now"
    },
    {
        "product-name": "Enduro Boa&reg; Hydration Pack",
        "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
        "header-top-right-text": "Shop All",
        "header-top-left-text": "Equipment",
        "product-url": "http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html",
        "header-top-right-url": "http://www.thenorthface.com/en_US/shop-equipment/",
        "product-cta-text": "Shop Now"
    },
    {
        "product-name": "MEN'S BETTER THAN NAKED&trade; JACKET",
        "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
        "header-top-right-text": "Shop All",
        "header-top-left-text": "Men's",
        "product-url": "http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html",
        "header-top-right-url": "http://www.thenorthface.com/en_US/shop-mens/",
        "product-cta-text": "Shop Now"
    },
    {
        "product-name": "WOMEN'S BETTER THAN NAKED&trade; JACKET",
        "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
        "header-top-right-text": "Shop All",
        "header-top-left-text": "Women's",
        "product-url": "http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html",
        "header-top-right-url": "http://www.thenorthface.com/en_US/shop-womens/",
        "product-cta-text": "Shop Now"
    },
    {
        "product-name": "WOMEN'S SINGLE-TRACK SHOE",
        "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
        "header-top-right-text": "Shop All",
        "header-top-left-text": "Running Shoes",
        "product-url": "http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html",
        "header-top-right-url": "http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes",
        "product-cta-text": "Shop Now"
    },
    {
        "product-name": "Enduro Boa&reg; Hydration Pack",
        "product-image-url": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
        "header-top-right-text": "Shop All",
        "header-top-left-text": "Equipment",
        "product-url": "http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html",
        "header-top-right-url": "http://www.thenorthface.com/en_US/shop-equipment/",
        "product-cta-text": "Shop Now"
    }
]

cartImg.addEventListener('click', () => {
    aside.classList.toggle('move')
    cartImg.classList.toggle('sel')
})

rmBtn.addEventListener('click', () => {
    aside.classList.remove('move')
    cartImg.classList.remove('sel')
})

function createProductList() {
    const productListTemplate = document.querySelector('#template')
    for (let i = 0; i < productList.length; i++) {
        let p = productList[i]
        let clone = productListTemplate.content.cloneNode(true)
        clone.querySelector('.product-header-text').innerHTML = p["header-top-left-text"]
        clone.querySelector('.product-image').src = p["product-image-url"]
        clone.querySelector('.product-name').innerHTML = p["product-name"]
        document.querySelector('.list-container').append(clone)
    }
}

function check() {
    let glows = document.querySelectorAll('.glow')
    console.log(glows)
    if (glows.length !== 0) {
        num.style.display = 'block'
        num.innerHTML = glows.length
    } else {
        num.style.display = 'none'
    }
}

function addShoppingList() {
    cartContainer.innerHTML = ""
    if (myCartList.length === 0) {
        let li = document.createElement('li')
        li.innerHTML = '장바구니가 비었습니다.'
        cartContainer.append(li)
        payBtn.disabled = true
    } else {
        for (let i = 0; i < myCartList.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = myCartList[i]
            cartContainer.append(li)
        }
        payBtn.disabled = false
    }
}

createProductList()
const lis = document.querySelectorAll('.list-container li')

for (let i = 0; i < lis.length; i++) {
    let li = lis[i]
    li.addEventListener('dblclick', e => {
        let target = e.currentTarget
        let isSelected = e.currentTarget.classList.contains('glow')
        if (isSelected) {
            target.classList.remove('glow')
            myCartList.splice(myCartList.indexOf(productList[i]["product-name"]), 1)
            addShoppingList()
        } else {
            target.classList.add('glow')
            myCartList.push(productList[i]["product-name"])
            addShoppingList()
        }
        check()
    })
}

let runTime = () => {
    let d = new Date()
    currentTime.innerHTML = d.toLocaleTimeString()
}

setInterval(runTime, 100);