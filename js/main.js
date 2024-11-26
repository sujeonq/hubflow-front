/* 
    날짜 : 2024/11/22
    이름 : 강유정
    내용 : 메인 js 생성
*/

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".main3-slider");
    const cards = document.querySelectorAll(".main3-card");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    let currentIndex = 0;

    const updateSliderPosition = () => {
        const offset = -currentIndex * 100;
        cards.forEach((card) => {
            card.style.transform = `translateX(${offset}%)`;
        });
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSliderPosition();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSliderPosition();
    });

    updateSliderPosition(); // 초기 슬라이더 위치 설정
});

