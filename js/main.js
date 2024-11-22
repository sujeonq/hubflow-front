document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".main3-slider");
    const cards = document.querySelectorAll(".main3-card");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    const updateSlide = () => {
        const cardWidth = cards[0].clientWidth; // 카드 한 개의 너비
        const offset = -currentIndex * cardWidth; // 이동할 거리 계산
        slider.style.transform = `translateX(${offset}px)`; // 카드 이동
    };

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
        updateSlide();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
        updateSlide();
    });

    // 초기 슬라이드 위치 설정
    updateSlide();
});
