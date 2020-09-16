[TOC]

# 1. Box Model

Box Model이란 어떠한 태그를 표현할 때 쓰여지는 용어들을 의미한다.<br>

<br>

![BoxModel](.\boxmodel.jpg)<br>

<br>

<br>

- contents : 내용 부분으로, <kbd>width</kbd>, <kbd>height</kbd> 속성으로 변경 가능하다.
- padding : 안쪽 여백으로, <kbd>padding</kbd> 속성으로 변경 가능하다.
- border : 테두리로, <kbd>border</kbd> 속성으로 변경 가능하다.
- margin : 바깥쪽 여백으로, <kbd>margin</kbd> 속성으로 변경 가능하다.



## ⅰ) 내용(contents)

<kbd>contents</kbd>은 <kbd>width</kbd>, <kbd>height</kbd>속성으로 조정할 수 있다.<br>

<br>

다만 크기를 조정할 때에는, <kbd>display</kbd> 속성이 <kbd>inline</kbd>이면 안된다.<br>

<br>

```html
<style>
    #div1{
        border: 1px solid black;
        width: 100px;
        height: 100px;
        background-color: red;
    }
    #div2{
        border: 1px solid black;
        width: 50px;
        height: 50px;
        background-color: blue;
    }
</style>
<body>
    <div id="div1"></div>
    <div id="div2"></div>
</body>
```

<br>

<br>

<div data-id="div1"></div><div data-id="div2"></div>

<br>

<br>

다음과 같이 간단하게 <kbd>width</kbd>와 <kbd>height</kbd> 속성을 써서 너비와 높이를 조정할 수 있다.<br>

<br>

```scss
width: 값;/*길이 단위는 다 된다.*/
height: 값;
```

<br>

<br>

## ⅱ) 테투리(border)

테두리는 태그의 내부(<kbd>contents</kbd>, <kbd>padding</kbd>)를 감싸주는 선이다.<br>

<br>

아래의 예를 보자.<br>

<br>

```html
<style>
    #temp1{
        border: 1px solid black;
    }
    #temp2{
        border: 5px solid black;
    }
    #temp3{
        border: 1px dotted red;
    }
    #temp4{
        border: 1px dashed blue;
    }
</style>
<body>
    <div id="temp1">temp1</div>
    <div id="temp2">temp2</div>
    <div id="temp3">temp3</div>
    <div id="temp4">temp4</div>
</body>
```

<br>

<br>

<div data-id="temp1">temp1</div><div data-id="temp2">temp2</div><div data-id="temp3">temp3</div><div data-id="temp4">temp4</div>

<br>

<br>

결과를 보면 <kbd>border</kbd>에는 세가지 속성이 잘 적용되는 것을 알 수 있다.<br>

<br>

<kbd>border</kbd> 속성은 세 가지로 다시 나누어 쓸 수 있다.<br>

<br>

```scss
border: 1px solid black;/*각각 두께 모양 색 을 의미*/
border-방향-속성: 값;
/*방향은 top, bottom, left, right가 될 수 있고,
속성은 width, style, color 가 될 수 있다.*/
border-style: solid;
/*solid, dashed, dotted, double, groove, ridge, inset, outset*/
```

<br>

<br>

<kbd>border-style</kbd> 속성의 경우 어렵게 생각될 수도 있지만, 사실 굉장히 간단하다.<br>

<br>

<table class="standard-table">
  <tbody>
   <tr>
    <td style="vertical-align: middle;"><code>none</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-style: none; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;"><code>hidden</code> 키워드와 마찬가지로 테두리를 표시하지 않습니다. <a href="/ko/docs/Web/CSS/background-image" title="background-image CSS 속성은 요소의 배경 이미지를 한 개나 여러 개 지정합니다."><code>background-image</code></a>를 지정하지 않았으면 해당 면의 <a href="/ko/docs/Web/CSS/border-width" title="border-width CSS 단축 속성은 요소 네 면 테두리의 너비를 설정합니다."><code>border-width</code></a> 계산값은 지정값을 무시하고 <code>0</code>이 됩니다. 표에서, 칸의 테두리 상쇄 시 <code>none</code>은 제일 낮은 우선순위를 가집니다. 따라서 주변 칸이 테두리를 가진다면 테두리를 그립니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>hidden</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: hidden; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;"><code>none</code> 키워드와 마찬가지로 테두리를 표시하지 않습니다. Unless a <a href="/ko/docs/Web/CSS/background-image" title="background-image CSS 속성은 요소의 배경 이미지를 한 개나 여러 개 지정합니다."><code>background-image</code></a>를 지정하지 않았으면 해당 면의 <a href="/ko/docs/Web/CSS/border-width" title="border-width CSS 단축 속성은 요소 네 면 테두리의 너비를 설정합니다."><code>border-width</code></a> 계산값은 지정값을 무시하고 <code>0</code>이 됩니다. 표에서, 칸의 테두리 상쇄 시 <code>hidden</code>은 제일 높은 우선순위를 가집니다. 따라서 주변 칸이 테두리를 가지더라도 그리지 않습니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>dotted</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: dotted; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;">테두리를 둥근 점 여러개로 그립니다. 점 간격은 명세에서 지정하지 않으며 구현마다 다릅니다. 점의 반지름은 해당 면 <a href="/ko/docs/Web/CSS/border-width" title="border-width CSS 단축 속성은 요소 네 면 테두리의 너비를 설정합니다."><code>border-width</code></a>의 절반입니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>dashed</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: dashed; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;">테두리를 직사각형 여러개로 그립니다. 사각형의 크기와 길이는 명세에서 지정하지 않으며 구현마다 다릅니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>solid</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: solid; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;">테두리를 하나의 직선으로 그립니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>double</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: double; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;">테두리를 두 개의 평행한 직선으로 그립니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>groove</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: groove; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;">테두리가 파인 것처럼 그립니다.<code>ridge</code>의 반대입니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>ridge</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: ridge; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;">테두리가 튀어나온 것처럼 그립니다. <code>groove</code>의 반대입니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>inset</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: inset; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;">요소가 파인 것처럼 테두리를 그립니다.<code>outset</code>의 반대입니다. <a href="/ko/docs/Web/CSS/border-collapse" title="border-collapse CSS 속성은 표 테두리(border)가 분리(separated) 또는 상쇄(collapsed)될 지를 결정합니다. 분리 모델에서는, 인접한 셀은 각각 자신의 고유(distinct) 테두리가 있습니다. 상쇄 모델에서는, 인접한 표 셀은 테두리를 공유합니다."><code>border-collapse</code></a>가 <code>collapsed</code>인 칸에서는 <code>groove</code>와 동일합니다.</td>
   </tr>
   <tr>
    <td style="vertical-align: middle;"><code>outset</code></td>
    <td style="vertical-align: middle;">
     <div style="margin: 0.5em; width: 3em; height: 3em; border-width: 3px; border-style: outset; background-color: palegreen;">&nbsp;</div>
    </td>
    <td style="vertical-align: middle;">
     <p>요소가 튀어나온 것처럼 그립니다. <code>inset</code>의 반대입니다. <a href="/ko/docs/Web/CSS/border-collapse" title="border-collapse CSS 속성은 표 테두리(border)가 분리(separated) 또는 상쇄(collapsed)될 지를 결정합니다. 분리 모델에서는, 인접한 셀은 각각 자신의 고유(distinct) 테두리가 있습니다. 상쇄 모델에서는, 인접한 표 셀은 테두리를 공유합니다."><code>border-collapse</code></a>가 <code>collapsed</code>인 칸에서는 <code>ridge</code>와 동일합니다.</p>
    </td>
   </tr>
  </tbody>
 </table>
<br>

<br>

다음의 예를 보자.<br>

<br>

```html
<style>
    div{
        width:50px;
        height:50px;
    }
    #solid{
        border: 5px solid gold;
    }
    #double{
        border: 5px double gold;
    }
    #dotted{
        border: 5px dotted gold;
    }
    #dashed{
        border: 5px dashed gold;
    }
    #groove{
        border: 5px groove gold;
    }
    #ridge{
        border: 5px ridge gold;
    }
    #inset{
        border: 5px inset gold;
    }
    #outset{
        border: 5px outset gold;
    }
</style>
<body>
    <div id="solid">solid</div>
    <div id="double">double</div>
    <div id="dotted">dotted</div>
    <div id="dashed">dashed</div>
    <div id="groove">groove</div>
    <div id="ridge">ridge</div>
    <div id="inset">inset</div>
    <div id="outset">outset</div>
</body>
```

<br>

<br>

<div data-class="div1" data-id="solid">solid</div><div data-class="div1" data-id="double">double</div><div data-class="div1" data-id="dotted">dotted</div><div data-class="div1" data-id="dashed">dashed</div><div data-class="div1" data-id="groove">groove</div><div data-class="div1" data-id="ridge">ridge</div><div data-class="div1" data-id="inset">inset</div><div data-class="div1" data-id="outset">outset</div>

<br>

<br>

방향 또한 결정해서 완전히 다른 테두리로 주변을 꾸밀 수 있다.<br>

<br>

```html
<style>
    #fourWayBorder{
        border-left: 5px solid red;
        border-right: 5px dotted blue;
        border-top: 5px dashed green;
        border-bottom: 5px double black;
        width: 100px;
        height: 100px;
    }
</style>
<body>
    <div id="fourWayBorder"></div>
</body>
```

<br>

<br>

<div data-id="fourWayBorder"></div>

<br>

방향에 따라서 아예 다른 테두리를 만드는 모습을 볼 수 있다.<br>

<br>

<br>

## ⅲ) 테두리 꼭지점 반지름(border-radius)

테두리 주변의 꼭지점을 둥글게 만들 수도 있다.<br>

<br>

```html
<style>
    div{
        width:100px;
        height:100px;
        background-color: red;
    }
    #temp6{
        border-radius: 50px;
    }
    #temp7{
        border-top-left-radius: 100px;
    }
</style>
<body>
    <div></div>
    <div id="temp6"></div>
    <div id="temp7"></div>
</body>
```

<br>

<br>

<div data-class="div2"></div><div data-class="div2" data-id="temp6"></div><div data-class="div2" data-id="temp7"></div>

<br>

<br>

<kbd>border-radius</kbd>의 경우 꼭지점의 반지름을 설정해 둥글게 만든다.<br>

<br>

만약 도형이 정사각형일 경우 반지름은 너비 및 높이의 반절이면 원이된다.<br>

<br>

하지만 한 쪽 꼭지점(위의 경우 왼쪽 위)만 반지름을 줄 경우 너비와 높이 값과 같은 값을 쓸 수도 있다.<br>

<br>

```scss
border-radius: 50px;/*꼭지점에 50px짜리 반지름의 원형으로 만듦. 만일 50의 두배인 100 보다 너비 혹은 높이가 작을 경우 원으로 지정됨.*/
border-세로방향-가로방향-radius: 값;
/*세로방향은 top, bottom 중 하나, 가로방향은 left, right 중 하나만 될 수 있으며, 값은 px, % 등 길이 값이 다 적용된다.*/
```

<br>

<br>

## ⅳ) 안쪽 여백(padding)

<kbd>padding</kbd>은 안쪽의 여백을 주는 값이다.<br>

<br>

안쪽 여백은 <kbd>border</kbd> 안쪽, <kbd>contents</kbd> 바깥쪽의 간격을 의미한다.<br>

<br>

```html
<style>
    div{
        width: 100px;
        border: 1px solid black;
    }
    #temp8{
        padding: 10px;
    }
    #temp9{
        padding: 20px;
    }
</style>
<body>
    <div id="temp8">하이하이</div>
    <div id="temp9">하이하이</div>
    <div id="temp10">하이하이</div>
</body>
```

<br>

<br>

<div data-class="div3">하이하이</div><div data-class="div3" data-id="temp8">하이하이</div><div data-class="div3" data-id="temp9">하이하이</div>

<br>

<br>

역시 방향 또한 설정할 수 있다.<br>

<br>

```html
<style>
    div{
        width: 100px;
        border: 1px solid black;
    }
    #temp10{
        padding-top: 20px;
    }
    #temp11{
        padding-left: 20px;
    }
    #temp12{
        padding-bottom: 20px;
    }
</style>
<body>
    <div id="temp10">뷁</div>
    <div id="temp11">뷁</div>
    <div id="temp12">뷁</div>
</body>
```

<br>

<br>

<div data-class="div3" data-id="temp10">뷁</div><div data-class="div3" data-id="temp11">뷁</div><div data-class="div3" data-id="temp12">뷁</div>

<br>

<br>

```scss
padding: 값;/*길이 단위는 다 됨.*/
padding-방향: 값;/* 방향은 top, bottom, left, right가 된다.*/
```

<br>

<br>

## ⅴ) 바깥쪽 여백(margin)

<kbd>margin</kbd>은 테두리 바깥쪽의 다른 개체와의 간격을 설정하는 속성이다.<br>

<br>

```html
<style>
    .temp13{
		border: 1px solid black;
        margin: 10px;
	}
    .temp14{
        border: 1px solid black;
        margin: 30px;
    }
</style>
<body>
    <span class="temp13">1번</span><span class="temp13">2번</span><span class="temp13">3번</span><br>
    <span class="temp14">1번</span><span class="temp14">2번</span><span class="temp14">3번</span>
</body>
```

<br>

<br>

<span data-class="temp13">1번</span><span data-class="temp13">2번</span><span data-class="temp13">3번</span><br><span data-class="temp14">1번</span><span data-class="temp14">2번</span><span data-class="temp14">3번</span>

<br>

<br>

마찬가지로 방향을 바꿀 수 있다.<br>

<br>

```scss
margin: 값;/*길이 단위는 다 됨.*/
margin-방향: 값;/* 방향은 top, bottom, left, right가 된다.*/
```

<br>

<br>

# 2. 문제들

## 1번 문제

<iframe src="1.html"></iframe>

<br>

<br>

## 2번 문제

<iframe src="2.html"></iframe>

<br>

<br>

## 3번 문제

<iframe src="3.html"></iframe>

<br>

<br>

## 4번 문제

<iframe src="4.html"></iframe>

<br>

<br>

## 5번 문제

<iframe src="5.html"></iframe>