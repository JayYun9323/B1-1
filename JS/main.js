// 1. HTML에서 버튼과 메시지 요소를 찾는다.
const practiceButton = document.querySelector("#practice-button");
const practiceMessage = document.querySelector("#practice-message");

// 2. 버튼을 누른 횟수를 기억한다.
let clickCount = 0;

// 3. 현재 횟수를 화면에 반영한다.
const renderMessage = () => {
  practiceMessage.textContent = `버튼을 ${clickCount}번 눌렀습니다.`;
};

// 4. 버튼을 클릭했을 때 실행할 작업을 등록한다.
practiceButton.addEventListener("click", () => {
  clickCount += 1;
  renderMessage();
});

// 5. 페이지가 처음 열렸을 때도 초기 횟수를 표시한다.
renderMessage();