
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/



const nickName = getNode(".nickName");
const nav = getNode(".nav");
const navItems = getNodes(".nav li");
const visualImage = getNode(".visual img ");

function handleMoviePoster(e) {
  const list = e.target.closest("li");
  const index = attr(list, "data-index");
  const nickName = getNode(".nickName");
  const selectedMovie = data[index - 1];
  const { name, color, alt } = selectedMovie;
  const gradientColor = `linear-gradient(to bottom, ${color[0]}, ${color[1]})`;
  
  if (!list || !index) return;

  navItems.forEach((li) => removeClass(li, "is-active"));
  addClass(list, "is-active");

  backGroundColor("body", gradientColor);
  textName(nickName, name);
  posterImg(visualImage, name, alt);

}

function backGroundColor(node, value) {
  if (typeof node === "string") node = getNode(node);

  if (!value || typeof value !== "string") {
    throw new TypeError("backGroundColor 함수의 인수는 문자열이어야 합니다.");
  }

  node.style.background = value;
}

function textName(node, text) {
  if (!text || typeof text !== "string") {
    throw new TypeError("textName 함수의 인수는 문자열이어야 합니다.");
  }

  node.textContent = text;
}

function posterImg(node, imageName, altPath) {
  if (typeof node === "string") node = getNode(node);

  if (!node) return;

  const imagePath = `./assets/${imageName.toLowerCase()}.jpeg`;

  attr(node, "src", imagePath);
  attr(node, "alt", altPath);
}





nav.addEventListener("click", handleMoviePoster);