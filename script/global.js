$(document).ready(function(){
// 다국어 버튼
$('.lang_btn').click(function(){
  $(this).addClass('active');
  $(this).next().fadeToggle();
});

// about 글자 더보기
const btn = document.querySelector('.sec_about_cont .more');
const sinceBox = document.querySelector('.sec_about_cont .since_txt');

btn.addEventListener('click', () => {
  sinceBox.classList.toggle('open');

  btn.textContent = sinceBox.classList.contains('open') ? 'close' : 'more';
});

// 좌측 슬라이더
const r_swiper = new Swiper('.r_swiper', {
  loop: true,
  direction: 'vertical',   
  effect: "fade",
  autoplay: {
    delay: 5000
  },
  allowTouchMove: true,    // 손가락/휠로 위아래 스와이프
});



  const menuBtn = document.querySelector(".menu");
  const rHeader = document.querySelector(".r_header");

  // 메뉴 버튼 클릭
  menuBtn.addEventListener("click", () => {

    if (window.innerWidth <= 1280) {

      // 버튼 X 토글
      menuBtn.classList.toggle("active");

      // r_header show 토글
      rHeader.classList.toggle("show");
    }
  });

  $('.selet_wrap button').on('click', function(){
    const parentBox = $(this).closest('.inner'); // 부모의 부모
    const viewCont = parentBox.find('.view_cont');  // 그 안의 view_cont

    viewCont.stop().slideToggle(300);

    // 화살표 회전
    $(this).toggleClass('active');
});



});