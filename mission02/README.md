# 🐣Elemental Movie Poster🐣
elemental movie poster는 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 만든 페이지입니다. 각 캐릭터를 클릭하면 해당캐릭터의 이름이 상단에 표시되고, 배경색 또한 캐릭터에 맞게 변경됩니다.

## 🌪기능
1. 사용자가 캐릭터를 클릭하면 캐릭터의 이름을 화면 상단에 표기시킨다.
2. 클릭한 캐릭터 포스터의 배경색이 해당의 색상으로 변경되게한다.
3. 클릭한 포스터가 메인포스터로 변경되게한다.


### 🌪완성된 페이지 모습




## 🌪함수
### backGroundColor(배경색 캐릭터에 맞게 변경)
```js
function backGroundColor(node, value) {
  if (typeof node === "string") node = getNode(node);

  if (!value || typeof value !== "string") {
    throw new TypeError("backGroundColor 함수의 인수는 문자열이어야 합니다.");
  }

  node.style.background = value;
}
```
#### `backGroundColor` 함수를 만들고 사용해서 캐릭터를 클릭시 해당 캐릭터에 배경색을 변경할수 있습니다. 

### textName(포스터 주인공이름 변경)
```js
function textName(node, text) {
  if (!text || typeof text !== "string") {
    throw new TypeError("textName 함수의 인수는 문자열이어야 합니다.");
  }

  node.textContent = text;
}
```
#### `textName` 함수를 만들고 사용해서 캐릭터를 클릭시 해당 캐릭터의 이름을 표기합니다. 

### posterImg(포스터 변경)
```js
function posterImg(node, imageName, altPath) {
  if (typeof node === "string") node = getNode(node);

  if (!node) return;

  const imagePath = `./assets/${imageName.toLowerCase()}.jpeg`;

  attr(node, "src", imagePath);
  attr(node, "alt", altPath);
}
```
#### `posterImg` 함수를 만들고 사용해서 캐릭터를 클릭시 해당 캐릭터의 포스터가 표기됩니다. 