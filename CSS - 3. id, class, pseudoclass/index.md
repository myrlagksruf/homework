[TOC]

# 1. id

CSS는 기본적으로 세가지의 구성을 갖고 있다.<br>

<br>

```css
div{/*Selector : div 태그에 중괄호 안에있는 속성들을 적용한다는 뜻*/
	background-color: rgba(255, 100, 23, 0.6);
    /*속성 : 값; '속성'은 적용시킬 값의 종류이며, '값'은 그 수치이다.*/
}
```

<br>

하지만 Selector가 태그의 이름만 쓸 수 있다면 CSS를 사용하는데 매우 불편함을 느낄 수 있다.<br>

<br>

그렇기에 우리는 두 가지의 별명을 만들어 줄 수 있다.<br>

<br>

```html
<style>
    #apple{
        background-image: url("http://controlbook.kro.kr/CSS%20-%202.%20background,%20overflow,%20size/pikachu.png");
        width: 200px;
        height: 200px;
    }
</style>
<body>
    <div id="apple">
        음
    </div><br><br>
    <div>
        id="apple" 속성이 없음
    </div>
</body>
```

<br>

<br>

<div data-id="apple">음</div><br><br><div>id="apple" 속성이 없음</div>

<br>

div에 id="apple" 이라는 속성을 추가시켰고, Style 태그에는 #이라는 문자를 붙여서 썼다.<br>

<br>

그 결과 id="apple" 속성이 있는 div 태그에만 CSS 속성이 적용되었다.<br><br>

```html
#id-name{
	prop: value;
}
<tagname id="id-name"></tagname>
```

<br>

하지만 id란 뜻에 걸맞게 id는 중복될 수 없다.<br>

<br>

그렇다면 중복될 수 있는 별명은 무엇일까?<br>

<br>

# 2. class

보통 학교에서 학번(id)을 써달라고 10324 이런식으로 쓸 것이다.<br>

<br>

위의 경우 학년 반 번호의 조합을 통해 다른 학생은 가지지 못하는 고유의 값을 가지게 된다.<br>

<br>

하지만 반(class)의 경우는 다르다.<br>

<br>

같은 반인 학우들은 30명정도 안팎에 중복된 값을 가지게 된다.<br>

<br>

여기서 HTML 속성 class도 똑같다.<br>

<br>

```html
<style>
    #apple{
        background-image: url("http://controlbook.kro.kr/CSS%20-%202.%20background,%20overflow,%20size/pikachu.png");
        width: 200px;
        height: 200px;
    }
    .fruit{
        background-color: red;
        color: white;
    }
</style>
<body>
    <div id="apple">
        id="apple"
    </div><br><br>
    <div class="fruit">
        class="fruit" 1
    </div>
    <div class="fruit">
        class="fruit" 2
    </div>
    <div class="fruit">
        class="fruit" 3
    </div>
</body>
```

<br>

<br>

<div data-id="apple">id="apple"</div><br><br><div data-class="fruit">class="fruit" 1</div><div data-class="fruit">class="fruit" 2</div><div data-class="fruit">class="fruit" 3</div>

<br>

위의 결과를 보면 알겠지만 class라는 속성은 여러개에 중복해서 반영할 수 있다.<br>

<br>

하지만 class의 기능의 힘은 다른 데에서 나타난다.<br>

<br>

```html
<style>
    .apple{
        background-color: red;
    }
    .banana{
    	background-color: yellow;
    }
    .melon{
    	background-color: green;
    }
    .blue{
    	color: blue;
    }
    .purple{
    	color: purple;
    }
</style>
<body>
    <div class="apple blue">
        apple + blue
    </div><br><br>
    <div class="banana blue">
        banana + blue
    </div>
    <div class="melon purple">
        melon + purple
    </div>
    <div class="banana purple">
        banana + purple
    </div>
</body>
```

<br>

<br>

<div data-class="apple blue">apple + blue</div><div data-class="banana blue">banana + blue</div><div data-class="melon purple">melon + purple</div><div data-class="banana purple">banana + purple</div>

<br>

위의 결과를 보면 알겠지만 띄어쓰기의 구분으로 두 클래스의 속성을 얻어올 수 있다.<br>

<br>

따라서 한 클래스에 큰 속성을 쓰는 것 보다, 여러 클래스로 기능에 따라 구별하는 것이 더 좋다.<br>

<br>

```html
.class-name1{
    prop1: value1;
    prop2: value2;
}
.class-name2{
    prop3: value3;
    prop4: value4;
}
<tagname class="class-name1 class-name2"></tagname>
```

<br>

이러한 기능 말고 추가적인 기능이 더 존재한다.<br>

<br>

# 3. CSS Selector Advanced

CSS 선택자에는 선택하는 데에 도움을 주는 연산자들이 있다.<br>

<br>

우리가 수학문제를 풀 때 덧셈 뺄셈을 쓰듯이 여기도 그러한 기능을 제공한다.<br>

<br>

```scss
X Y{/*띄어쓰기 : X태그 안에 있는 모든 Y태그를 의미*/
    prop1: value1;
}
X>Y{/* > : X 태그의 자식태그인 Y태그를 의미*/
    prop1: value1;
}
X+Y{/* + : X 태그의 형제 중에서 바로 뒤쪽에 있는 하나의 Y태그를 의미*/
    prop1: value1;
}
X~Y{/* ~ : X 태긔의 형제 중에서 뒤쪽에 있는 모든 Y태그를 의미*/
    prop1: value1;
}
```

<br>

다음으로 예시를 보면 쉽게 이해가 될 것이다.

<br>

```html
<style>
    .A .B{
        color: brown;
    }
    .A > .C{
        font-style: italic;
    }
    .B + .C{
        background-color: red;
    }
    .B ~ .C{
        color: blue;
    }
</style>
<body>
    <div class="A">
        <div class="B">A클래스 안의 B클래스</div>
        <div class="C">A클래스 안의 C클래스</div>
        <div>
            <div class="C">A클래스 안의 div태그 안의 C클래스</div>
            <div class="B">A클래스 안의 div태그 안의 B클래스</div>
            <div class="C">A클래스 안의 div태그 안의 C클래스</div>
            <div class="C">A클래스 안의 div태그 안의 C클래스</div>
            <div class="C">A클래스 안의 div태그 안의 C클래스</div>
        </div>
    </div>
    <div class="B">A 클래스 밖에 있는 B 클래스</div>
</body>
```

<br>

<br>

<div data-class="A"><div data-class="B">A클래스 안의 B클래스</div><div data-class="C">A클래스 안의 C클래스</div><div><div data-class="C">A클래스 안의 div태그 안의 C클래스</div><div data-class="B">A클래스 안의 div태그 안의 B클래스</div><div data-class="C">A클래스 안의 div태그 안의 C클래스</div><div data-class="C">A클래스 안의 div태그 안의 C클래스</div><div data-class="C">A클래스 안의 div태그 안의 C클래스</div></div></div><div data-class="B">A 클래스 밖에 있는 B 클래스</div>

<br>

이렇듯 연산자를 이용한다면 세심한 선택이 가능하다.<br>

<br>

이 중 많이 쓰이는 것은 <kbd>></kbd> 와 <kbd> </kbd> 띄어쓰기다.<br>

<br>

이 두 개는 특히 까먹지 말아야한다.<br>

<br>

# 4. Pseudo class

pseudo class : 가상클래스란 클래스에 어떠한 조건을 갖추었을 때를 말하는 것이다.<br>

<br>

예를 들어 마우스가 올라가 있다던가<br>

<br>

클릭을 했다던가, 방문했다던가 등등 여러가지가 있다.<br>

<br>

```scss
A:link{/*링크가 걸려있을 때(a태그 전용)*/
    prop1: value1;
}
A:visited{/*링크에 방문했을 때(a태그 전용)*/
    prop1: value1;
}
A:hover{/*마우스가 위로 올라가있을 때*/
    prop1: value1;
}
A:active{/*클릭을 했을 때*/
    prop1: value1;
}
```

<br>

개념 자체는 쉽기 때문에 몇 가지 예제를 보면서 넘어가면 되겠다.<br>

<br>

```html
<style>
    .pikaLink{
        text-decoration: none;
        color: black;
    }
    .pikaLink:link{
        color: red;
    }
    .pikaLink:visited{
        color: gray;
    }
    .pikaLink:hover{
        background-color: blue;
    }
    .pikaLink:active{
        background-color: green;
        text-decoration: overline underline;
        font-weight: 900;
    }
</style>
<body>
    <a class="pikaLink">링크가 걸려있지 않은 경우</a><br>
    <a class="pikaLink" href="https://www.google.co.kr" target="_blank">링크가 걸려있는 경우</a>
</body>
```

<br>

<br>

<a data-class="pikaLink">링크가 걸려있지 않은 경우</a><br><a data-class="pikaLink" href="https://www.google.co.kr" target="_blank">링크가 걸려있는 경우</a>

<br>

위의 결과를 눌러보면서 방문해 보고, 마우스도 갖다가 대보기도 하면서 관찰해보자.<br>

<br>

쉽게 원리를 알 수 있을 것이다.<br>

<br>

# 5. display

우리는 화면에 있는 태그들을 띄우거나 띄우지 않거나를 CSS로 조정할 수 있다.<br>

<br>

그것을 조정하는 속성은 display 속성이다.<br>

<br>

```css
display: block;
/*none : 안보임
block : 한 줄을 차지함
inline : 내용만큼의 크기, 크기 조절 불가능
inline-block : 내용만큼의 크기, 크기 조절 가능*/
```

<br>

다음을 봐보자<br>

<br>

```html
<style>
    .block-item{
        display: block;
    }
    .inline-item{
        display: inline;
    }
    .inline-block-item{
        display: inline-block;
    }
    .none-item{
        display: none;
    }
    .item200{
        width: 200px;
        height: 200px;
    }
    .backred{
        background-color:rgba(255, 0, 0, 0.4)
    }
</style>
<body>
    <div class="block-item backred">블럭아이템</div>
    <div class="block-item item200 backred">블럭아이템 200px</div>
    <div class="inline-item backred">인라인아이템</div>
    <div class="inline-item item200 backred">인라인아이템 200px</div><br><br>
    <div class="inline-block-item backred">인라인블럭아이템</div>
    <div class="inline-block-item item200 backred">인라인블럭아이템 200px</div>
    <div class="none-item">보이지 않습니다.</div>
</body>
```

<br>

<br>

<div data-class="block-item backred">블럭아이템</div><div data-class="block-item item200 backred">블럭아이템 200px</div><div data-class="inline-item backred">인라인아이템</div><div data-class="inline-item item200 backred">인라인아이템 200px</div><br><br><div data-class="inline-block-item backred">인라인블럭아이템</div><div data-class="inline-block-item item200 backred">인라인블럭아이템 200px</div><div data-class="none-item">보이지 않습니다.</div>

<br>

위의 설명대로 display는 태그들을 어떻게 화면에 띄울지를 조정하는 속성이다.<br>

<br>

# 6. 약간의 기술

위의 것을 왜 설명했냐하면 이제부터 CSS 연산자와 display를 이용해 멋진 것을 만들 것이기 때문이다.<br>

<br>

```html
<style>
    .dropdown{
        display: none;
    }
    .dropdown:hover{
        background-color: rgba(255, 0, 0, 0.4);
    }
    .dropmain:hover .dropdown{
        display: block;
    }
</style>
<body>
    <div class="dropmain">
        메인화면
        <div class="dropdown">메뉴 1</div>
        <div class="dropdown">메뉴 2</div>
        <div class="dropdown">메뉴 3</div>
        <div class="dropdown">메뉴 4</div>
    </div>
</body>
```

<br>

<br>

<div data-class="dropmain">메인화면<div data-class="dropdown">메뉴 1</div><div data-class="dropdown">메뉴 2</div><div data-class="dropdown">메뉴 3</div><div data-class="dropdown">메뉴 4</div></div>

<br>

띄어쓰기 연산자를 이용해, hover된 dropmain의 안에 들어가 있어야지만 화면에 나타나도록 설정한 것이다.<br>

<br>

마우스가 dropmain위에 올라가 있지 않으면, .dropmain:hover는 존재하지 않아, .dropdown의 display는 none이지만<br>

<br>

마우스가 dropmain 위에 올라가 있으면, .dropmain:hover의 selector가 활성화되면서, .dropdown의 display가 blcok으로 바뀌는 것이다.<br>

<br>

이렇듯 몇가지 기술을 조합하면 재미있는 것을 만들 수 있다.<br>

<br>

# 7. 요약

```css
div{/*Selector : div 태그에 중괄호 안에있는 속성들을 적용한다는 뜻*/
	background-color: rgba(255, 100, 23, 0.6);
    /*속성 : 값; '속성'은 적용시킬 값의 종류이며, '값'은 그 수치이다.*/
}
#id-name{
	prop: value;
}
<tagname id="id-name"></tagname>
.class-name1{
    prop1: value1;
    prop2: value2;
}
.class-name2{
    prop3: value3;
    prop4: value4;
}
<tagname class="class-name1 class-name2"></tagname>
X Y{/*띄어쓰기 : X태그 안에 있는 모든 Y태그를 의미*/
    prop1: value1;
}
X>Y{/* > : X 태그의 자식태그인 Y태그를 의미*/
    prop1: value1;
}
X+Y{/* + : X 태그의 형제 중에서 바로 뒤쪽에 있는 하나의 Y태그를 의미*/
    prop1: value1;
}
X~Y{/* ~ : X 태긔의 형제 중에서 뒤쪽에 있는 모든 Y태그를 의미*/
    prop1: value1;
}
A:link{/*링크가 걸려있을 때(a태그 전용)*/
    prop1: value1;
}
A:visited{/*링크에 방문했을 때(a태그 전용)*/
    prop1: value1;
}
A:hover{/*마우스가 위로 올라가있을 때*/
    prop1: value1;
}
A:active{/*클릭을 했을 때*/
    prop1: value1;
}
display: block;
/*none : 안보임
block : 한 줄을 차지함
inline : 내용만큼의 크기, 크기 조절 불가능
inline-block : 내용만큼의 크기, 크기 조절 가능*/
```

<br>

이번 내용은 꽤 어려울 수도 있으므로 숙제를 꼭꼭꼭!!! 해주길 바란다!!!<br>

<br>

# 8. 문제들

### 1번 문제

<iframe src="1.html"></iframe>

<br>

<br>

### 2번 문제

<iframe src="2.html"></iframe>

<br>

<br>

### 3번 문제

<iframe src="3.html"></iframe>

<br>

<br>

### 4번 문제

<iframe src="4.html"></iframe>

<br>

<br>

### 5번 문제

<iframe src="5.html"></iframe>

<br>

<br>

### 6번 문제

<iframe src="6.html"></iframe>

<br>

<br>

### 7번 문제

<iframe src="7.html"></iframe>

<br>

<br>

### 8번 문제

<iframe src="8.html"></iframe>