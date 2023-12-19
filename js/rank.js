let rankInfoBtn = document.querySelector(".rank_info_btn");
let firstLevelModal = document.querySelector(".popup_first_wrap");
let firstPopups = document.querySelectorAll(".first");
let firstCloseBtns = document.querySelectorAll(
  ".popup_first_wrap .popup_close_btn"
);

let rankInfoModal = document.querySelector(".rank_info_popup");

rankInfoBtn.addEventListener("click", function () {
  firstLevelModal.style.display = "block";
  rankInfoModal.style.display = "block";
});

firstCloseBtns.forEach((firstCloseBtn) => {
  firstCloseBtn.addEventListener("click", function () {
    firstLevelModal.style.display = "none";
    firstPopups.forEach((firstPopup) => {
      firstPopup.style.display = "none";
    });
  });
});
