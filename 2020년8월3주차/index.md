# 1. 배경 꾸미기

배경을 꾸밀 때는 색을 이용하는 것이 가장 대표적이다.<br>

<br>

```css
background-color: 'red'; /*가장 기본적인 형태*/
background-color: #ff0000; /*16진법을 쓴 형태*/
background-color: rgb(255, 0, 0); /*rgb 함수를 쓴 형태*/
background-color: rgba(255, 0, 0, 1); /*rgba 함수를 써서 투명도까지 쓴 형태*/
```

<br>

투명도를 쓰면 더 괜찮은 그림이 나올 수도 있다.<br>

<br>

<div style="height:30px;background-color:rgb(255,0,0);text-align:center;">투명도 100% rgba(255, 0, 0, 1)</div><div style=";height:30px;background-color:rgba(255,0,0,0.5);text-align:center;">투명도 50% rgba(255, 0, 0, 0.5)</div><div style="height:30px;background-color:rgba(255,0,0,0.25);text-align:center;">투명도 25% rgba(255, 0, 0, 0.25)</div><div style="height:30px;background-color:rgb(255,0,0,0.1);text-align:center;">투명도 10% rgba(255, 0, 0, 0.1)</div>

<br>

하지만 색만 쓴다면 뭔가 아쉬운 배경이 된다.<br>

<br>

그래서 우리는 더 괜찮은 방법을 쓸 수 있다.<br>

<br>

바로 이미지를 쓰는 것이다.<br>

<br>

# 2. 배경 이미지 (background-image)

```css
background-image: url("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png")  /*인터넷 이미지*/
background-image: url("피카츄.gif") /*파일 이미지*/
```

<br>

여기서 url이라는 CSS 함수를 이용하여 이미지를 넣어줄 수 있다.<br>

<br>

다음과 같은 코드를 작성해보자.<br>

<br>

```html
<style>
    div{
        background-image: url("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png");
    }
</style>
<body>
   	<div>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
    </div>
</body>
```

<br><br>

결과는 다음과 같다.<br><br>

<div style='background-image: url("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png");'>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
</div>

<br>

여기서 우리는 고민해볼 수 있다.<br>

<br>

항상 이미지가 저런식으로만 배경으로 된다면 쓰기 힘들지 않을까?<br>

<br>

그래서 몇가지 이미지 조정 방법이 있다.<br>

<br>

```css
background-repeat: repeat; /*repeat, no-repeat, repeat-x, repeat-y가 있다.*/
background-position: left top; /*left, right, top, bottom, center가 있고, %, px를 이용해도 위치 지정이 가능하다.
띄어쓰기를 이용해서 표현한 이유는 각각 x축 위치와 y축 위치를 나타내기 위해서이다.*/
```

<br>

다음과 같은 코드를 작성해보자.<br>

<br>

```html
<style>
    div{
        background-image: url("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png");
        background-repeat: repeat-y;
        background-position: center;
    }
</style>
<body>
   	<div>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
        정상적으로 이미지가 뜨나요?<br>
    </div>
</body>
```

<br><br>결과는 다음과 같다.<br><br>

<div style='background-image: url("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png");background-repeat: repeat-y;background-position: center;'>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
    정상적으로 이미지가 뜨나요?<br>
</div>

<br>

이미지가 y축으로만 반복되고, 중앙으로 옮겨졌다.<br>

<br>

이것으로 각각의 속성이 잘 들어가는 것을 확인할 수 있다.<br>

<br>

# 3. 크기 바꾸기 (width, height)

우리는 div의 크기 조절을 할 수 없었다.<br>

<br>

그저 글자를 쓰는대로 마음대로 커졌다 작아졌다 하는 것을 지켜봐야 했었다.<br>

<br>

하지만 width와 height를 쓴다면 달라진다.<br>

<br>

```css
width: 100px;/*px, %, em, rem 어떤 단위를 써도 된다.*/
height: 50%;
```

<br>

다음 코드를 보자.<br>

<br>

```html
<body>
    <div style="width:100px;height:100px;background-color:skyblue"></div>
</body>
```

<br>

결과는 다음과 같다.<br>

<br>

<div style="width:100px;height:100px;background-color:skyblue"></div>

<br>

아무 글자도 쓰지 않았지만 정사각형을 만들 수 있었다.<br>

<br>

이로써 우린 width와 height를 이용해 우리가 원하는 크기의 도형을 만들 수 있게 되었다.<br>

<br>

# 4. 스크롤 (overflow)

크기를 조절하면서 한가지 문제가 생겼다.<br>

<br>

만약 글자가 강제해둔 도형보다 길어지면 어떻게 되는 것일까?<br>

<br>

```html
<div style="width:300px;height:100px;background-color:yellow">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>
```

<br>

<br>

결과는 다음과 같다.<br>

<br>

<div style="width:500px;height:100px;background-color:yellow">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>

<br><br>

<br>

<br>

<br>

<br>

<br>

너무 길어서 다른 문자를 가려버릴 정도이다...<br>

<br>

그렇다면 이러한 상황을 어떻게 타개할 것인가?<br>

<br>

overflow라는 속성을 써주면 된다.<br>

<br>

```css
overflow: visible; /*visible : 글자가 넘치면 그냥 넘치게 내버려둠, scroll : 스크롤이 보임,
hidden : 스크롤이 보이지 않음, auto : 글자가 넘치는 위치만 스크롤이 생김
```

<br>

위 코드를 다음과 같이 바꿔보자.<br>

<br>

```html
<div style="width:500px;height:100px;background-color:yellow;overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>
```

<br>

<br>

<div style="width:500px;height:100px;background-color:yellow;overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>

<br>

이제 우린 스크롤이 가능해졌다.<br>

<br>

그렇다면 이때 배경이미지를 넣으면 어떻게 될까?<br>

<br>

```html
<div style="width:500px;height:100px;background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png');overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>
```

<br>

<br>

<div style="width:500px;height:100px;background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png');overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>

<br>

음... 이미지가 그대로 멈춰있게 되었다.<br>

<br>

하지만 우리는 이미지가 좀 더 다양한 제스쳐를 취했으면 좋겠다.<br>

<br>

# 5. 배경 스크롤 (background-attachment)

```css
background-attachment: scroll /*scroll : 이미지가 요소에 고정됨, local : 이미지가 같이 움직임.
fixed : 이미지가 브라우저 창에 고정됨(허나 잘 쓰지 않을 것이고, 성능 문제가 있으므로 되도록 쓰지 않는 것이 좋음.*/
```

<br>

위 속성을 이용하여 우리는 배경 이미지의 다른 방식의 표현이 가능하다.<br>

<br>

```html
<h1>background-attachment: scroll</h1>
<div style="width:500px;height:100px;background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png');background-attachment:scroll;overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>
<br>
<h1>background-attachment: local</h1>
<div style="width:500px;height:100px;background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png');background-attachment:local;overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>
```

<br>

<br>

<h1>background-attachment: scroll</h1>
<div style="width:500px;height:100px;background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png');background-attachment:scroll;overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div><br><h1>background-attachment: local</h1>
<div style="width:500px;height:100px;background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png');background-attachment:local;overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>

<br>

관찰력이 나쁜편이라도 위의 차이는 쉽게 발견할 수 있을 것이다.<br>

<br>

# 6. 배경 중첩

배경을 두개 이상 쓸 수 있을까?<br>

<br>

답은 그렇다이다.<br>

<br>

단순히 <kbd>,</kbd>(콤마) 를 이용한다면  두 개 이상의 이미지를 넣을 수 있다.<br>

<br>

```html
<style>
    div{
        width:500px;
        height:200px;
        background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'),
                         url('https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png');
        overflow:auto
    }
</style>
<div>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>
```

<br>

<br>

<div style="width:500px;height:200px;background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'), url('https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png');overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>

<br>

그림 두개가 겹치니 너무 복잡해보인다.<br>

<br>

하지만 조금 수정만 한다면 간단하게 처리 가능하다.<br>

<br>

```html
<style>
    div{
        width:500px;
        height:200px;
        background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'),
            			url('https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png');
        background-position:left top, right bottom;
        background-repeat:no-repeat, no-repeat;
        overflow:auto;
    }
</style>
<div>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>
```

<br>

<br>

<div style="width:500px;height:200px;background-image:url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'), url('https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png');background-position:left top, right bottom;background-repeat:no-repeat, no-repeat;overflow:auto">
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
    글자입니다. 너무 긴 글자에요... 진짜로 너무 길다고요...<br>
</div>

<br>

background-image의 중첩을 준 것과 마찬가지로 다른 속성들을 <kbd>,</kbd> 로 구분지어서 각각 다른 속성값을 주었다.<br>

<br>

이를 활용하는 문제가 많으므로 잘 해보자.<br>

<br>

# 7. 요약

```css
background-color: red /*색이름, #ff0000, rgb(255, 0, 0), rgba(255, 0, 0, 1)*/
background-image: url("피카츄.gif") /*url("주소")*/
background-repeat: repeat; /*repeat, no-repeat, repeat-x, repeat-y가 있다.*/
background-position: left top; /*left, right, top, bottom, center가 있고, %, px를 이용해도 위치 지정이 가능하다.
띄어쓰기를 이용해서 표현한 이유는 각각 x축 위치와 y축 위치를 나타내기 위해서이다.*/
width: 100px;/*px, %, em, rem 어떤 단위를 써도 된다.*/
height: 50%;
overflow: visible; /*visible : 글자가 넘치면 그냥 넘치게 내버려둠, scroll : 스크롤이 보임,
hidden : 스크롤이 보이지 않음, auto : 글자가 넘치는 위치만 스크롤이 생김*/
background-attachment: scroll /*scroll : 이미지가 요소에 고정됨, local : 이미지가 같이 움직임.
fixed : 이미지가 브라우저 창에 고정됨(허나 잘 쓰지 않을 것이고, 성능 문제가 있으므로 되도록 쓰지 않는 것이 좋음.*/
```

<br>

다음으로 문제를 풀어보자.<br>

<br>

# 8. 문제들

## 1번 문제

<iframe src="1.html"></iframe>