
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



function backGroundColor(node, value) {
  if (typeof node === "string") node = getNode(node);

  if (!value || typeof value !== "string") {
    throw new TypeError("backGroundColor 함수의 인수는 문자열이어야 합니다.");
  }

  node.style.background = value;
}





