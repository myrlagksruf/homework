[TOC]

# 1. transition

저번 시간에 배운 hover, active 같은 마우스에 반응하는 것을 애니메이션으로 만들 수 있는 속성<br>

```html
<style>
    .sel{
        width: 100px;
        height: 100px;
        background-color: blue;
        transition: all 1s ease;
        /*애니메이션으로 (처리될 속성, 시간, 움직이는 모양)*/
    }
    .sel:hover{
        background-color: red;
    }
</style>
<body>
    <div class="sel">마우스를 올려보세요.</div>
</body>
```

<br>

<br>

<div data-class="sel">마우스를 올려보세요.</div>

<br>

이렇게 마우스를 올리면 단순히 배경이 빨간색으로 바뀌는 것이 아닌 1초 동안 서서히 바뀌는 것으로 된다.<br>

<br>

```scss
transition: all 2s ease;
/*속성, n seconds, 움직이는 모양*/
/*ease, ease-in, ease-out, ease-in-out, linear*/
```

<br>

움직이는 모양은 속성값에 따라서 다르다.<br>

<br>

```html
<style>
    div{
        width: 100px;
        height: 100px;
        background-color: blue;
    }
    .ease{
        transition: all 2s ease;
    }
    .ease-in{
        transition: all 2s ease-in;
    }
    .ease-out{
        transition: all 2s ease-out;
    }
    .ease-in-out{
        transition: all 2s ease-in-out;
    }
    .linear{
        transition: all 2s linear;
    }
    div:hover{
        width: 500px;
    }
</style>
<body>
    <div class="ease">ease</div>
    <div class="ease-in">ease-in</div>
    <div class="ease-out">ease-out</div>
    <div class="ease-in-out">ease-in-out</div>
    <div class="linear">linear</div>
</body>
```

<br>

<br>

<div data-class="ease div-all div-all3">ease</div><div data-class="ease-in div-all div-all3">ease-in</div><div data-class="ease-out div-all div-all3">ease-out</div><div data-class="ease-in-out div-all div-all3">ease-in-out</div><div data-class="linear div-all div-all3">linear</div>

<br>

각각의 움직임을 비교해보자.<br>

<br>

# 2. transform

transform이란 속성은 오브젝트의 변형을 조금 더 다양한 방법으로 실행할 수 있다.<br>

<br>

```html
<style>
    div{
        width:100px;
        height:100px;
        background-color: blue;
    }
    .translate{
        transform: translate(100px, 50px); /*x축의 이동과 y축의 이동*/
    }
    .scale{
        transform: scale(2, 1); /* x축의 비율과 y축의 비율*/
    }
    .rotate{
        transform: rotate(45deg); /*각도 말고도 1turn 같이 회전 수를 써도 된다.*/
    }
</style>
<body>
    <div class="translate">translate</div>
    <div class="scale">scale</div>
    <div class="rotate">rotate</div>
</body>
```

<br>

<br>

<div data-class="div-all translate">translate</div><div data-class="div-all scale">scale</div><div data-class="div-all rotate">rotate</div>

<br>

이동은 translate, 크기변환은 scale, 회전은 rotate를 쓰면 손 쉽게 구현할 수 있다.<br>

<br>

transform의 중첩 구현은 text-decoration 때처럼(모르면 찾아보셈) 띄어쓰기를 이용하면 된다.<br>

<br>

```html
<style>
    div{
        width:100px;
        height:100px;
        background-color: blue;
    }
    .translateAndRotate{
        transform: translate(100px, 100px) rotate(45deg);
    }
    .rotateAndTranslate{
        transform: rotate(45deg) translate(100px, 100px);
    }
</style>
<body>
    <div class="translateAndRotate">translate, rotate</div>
    <div class="rotateAndRotate">rotate, translate</div>
</body>
```

<br>

<div data-class="div-all translateAndRotate">translate, rotate</div><div data-class="div-all rotateAndRotate">rotate, translate</div>

<br>

<br>

<br>

결과는 transform을 쓴 순서에 따라 달라진다.<br>

<br>

transform은 앞쪽에서부터 순서대로 실행된다.<br>

<br>

다음은 transform의 기준점을 바꿔보겠다.<br>

<br>

```html
<style>
    div{
        width:100px;
        height:100px;
        background-color:red;
        transition:all 1s;
    }
    .leftTop{
        transform-origin: left top;
     }
    .rightBottom{
        transform-origin: right bottom;
     }
    .right{
        transform-origin: right;/*center가 생략*/
    }
    .rotate:hover{
        transform: rotate(90deg);
    }
</style>
<body>
    <div class="leftTop rotate">leftTop</div>
    <div class="rightBottom rotate">rightBottom</div>
    <div class="right rotate">rightCenter</div>
</body>
```

<br>

<br>

<div data-class="div-all2 leftTop rotate2">leftTop</div><div data-class="div-all2 rightBottom rotate2">rightBottom</div><div data-class="div-all2 right rotate2">rightCenter</div>

<br>

마우스를 올려보면 결과가 셋 다 다르다는 것을 알 수 있다.<br>

<br>

# 3. filter 속성

filter 속성은 오브젝트의 색을 조작할 수 있는 속성이다.<br>

<br>

```html
<style>
        img{
            transition:all 1s linear;
        }
        #blur{
            filter:blur(10px);
        }
        #blur:hover{
            filter:blur(0);
        }
        #gray{
            filter:grayscale(1);
        }
        #gray:hover{
            filter:grayscale(0);
        }
        #hue:hover{
            filter:hue-rotate(180deg);
        }
        #sepia:hover{
            filter:sepia(1)
        }
        #invert:hover{
            filter:invert(1)
        }
        #shadow:hover{
            filter:drop-shadow(5px 5px 5px black);
        }
    </style>
</head>
<body>
    <img src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif">
    <img id="blur" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif">
    <img id="gray" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif">
    <img id="hue" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif">
    <img id="sepia" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif">
    <img id="invert" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif">
    <img id="shadow" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif">
</body>
```

<br>

각각에 마우스를 올려보면 피카츄가 다르게 변화되는 것을 알 수 있을 것이다.<br>

<br>

<img data-class="img-all" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif"><img data-class="blur img-all" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif"><img data-class="gray img-all" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif"><img data-class="hue img-all" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif"><img data-class="sepia img-all" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif"><img data-class="invert img-all" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif"><img data-class="shadow img-all" src="http://controlbook.kro.kr/CSS%20-%20id,%20class,%20pseudoclass/%ED%94%BC%EC%B9%B4%EC%B8%84.gif">

<br>

위의 결과를 비교해보며 filter를 잘 익혀보자.<br>

<br>

# 4. 요약

```scss
transition: all 2s ease;
/*속성, n seconds, 움직이는 모양*/
/*ease, ease-in, ease-out, ease-in-out, linear*/
transform: scale(2, 3);/*x축, y축 비율 설정*/
transform: translate(100px, 100px);/*x축, y축 이동*/
transform: rotate(90deg);/*회전 설정*/
transform-origin: center;/*top, bottom, left, right, center 설정 가능*/
filter:blur(3px);/*px의 정도에 따라 그림의 흩어짐 설정*/
filter:grayscale(1);/*0~1의 값에 따라 흑백 정도 설정*/
filter:hue-rotate(180deg);/*0~360deg 의 값에 따라 색 변경*/
filter:sepia(1);/*0~1 의 값에 따라 색 바램*/
filter:invert(1);/*0~1 의 값에 따라 색 반전*/
filter:drop-shadow(5px 5px 5px black);
/*그림자의 위치와 색 설정*/
```

<br>

# 5. 문제들

#### 1번 문제

<iframe src="1.html"></iframe>

<br>

#### 2번 문제

<iframe src="2.html"></iframe>

<br>

#### 3번 문제

<iframe src="3.html"></iframe>

<br>

#### 4번 문제

<iframe src="4.html"></iframe>

<br>

#### 5번 문제

<iframe src="5.html"></iframe>

<br>

#### 6번 문제

<iframe src="6.html"></iframe>

<br>