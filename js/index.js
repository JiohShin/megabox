// index.html
// input 값 존재 여부 UI 변경
let clearBtns = document.querySelectorAll(".first .clear_btn");
let inputs = document.querySelectorAll(".first input");
let overlapBtns = document.querySelectorAll(".first .overlap_btn");

// input keyup 여부에 따라 버튼 활성/비활성
inputs.forEach((input) => {
  input.addEventListener("keyup", function () {
    if (input.value !== "") {
      clearBtns.forEach((clearBtn) => {
        clearBtn.style.display = "block";
      });
      overlapBtns.forEach((overlapBtn) => {
        overlapBtn.classList.add("active");
      });
    } else {
      clearBtns.forEach((clearBtn) => {
        clearBtn.style.display = "none";
      });
      overlapBtns.forEach((overlapBtn) => {
        overlapBtn.classList.remove("active");
      });
    }
  });
});

// clear 버튼 클릭 시 기능
clearBtns.forEach((clearBtn) => {
  clearBtn.addEventListener("click", function () {
    inputs.forEach((input) => {
      input.value = "";
    });
    clearBtns.forEach((clearBtn) => {
      clearBtn.style.display = "none";
    });
    overlapBtns.forEach((overlapBtn) => {
      overlapBtn.classList.remove("active");
    });
  });
});

// 환경설정 버튼 UI 변경
let setActives = document.querySelectorAll(".env_set_wrap .env_btn");

setActives.forEach((setActive) => {
  setActive.addEventListener("click", function () {
    if (this.classList.contains("active") === false) {
      this.classList.add("active");
    } else {
      this.classList.remove("active");
    }
  });
});

// 모달창 기능

// 모달 1,2단계 배경
let firstLevelModal = document.querySelector(".popup_first_wrap");
let secondLevelModal = document.querySelector(".popup_second_wrap");

// 모달 1,2단계 모달창
let firstPopups = document.querySelectorAll(".first");
let secondPopups = document.querySelectorAll(".second");

// 모달 1,2단계 버튼
let firstCloseBtns = document.querySelectorAll(
  ".popup_first_wrap .popup_close_btn"
);
let secondCloseBtns = document.querySelectorAll(
  ".popup_second_wrap .popup_close_btn"
);

// 환경설정(환결설정, 닉네임 수정, 완료) 버튼
let envSetBtn = document.querySelector(".env_set_btn");
let editBtn = document.querySelector(".edit_btn");
let doneBtns = document.querySelectorAll(".confirm_btn_wrap .done_btn");

// 도움말, 게임종료, 유의사항, 게임시작 버튼
let helpBtn = document.querySelector(".help_btn");
let quitBtn = document.querySelector(".quit_btn");
let noticeBtns = document.querySelectorAll(".notice_btn");
let gameStartBtn = document.querySelector(".game_start_btn");

// 환경설정(환경설정, 닉네임 수정, 완료) 모달창
let envSetModal = document.querySelector(".env_set_popup");
let resetModal = document.querySelector(".nickname_reset_popup");
let doneModal = document.querySelector(".nickname_complete");

// 도움말, 게임종료, 유의사항, 게임시작 모달창
let helpModal = document.querySelector(".game_help_popup");
let quitModal = document.querySelector(".game_quit_popup");
let noticeModal = document.querySelector(".game_notice_popup");
let setModal = document.querySelector(".nickname_set_popup");

// 닉네임 사용가능/불가능 알림창
let confirmModal = document.querySelector(".nickname_confirm");

firstCloseBtns.forEach((firstCloseBtn) => {
  firstCloseBtn.addEventListener("click", function () {
    firstLevelModal.style.display = "none";
    firstPopups.forEach((firstPopup) => {
      firstPopup.style.display = "none";
    });
  });
});

secondCloseBtns.forEach((secondCloseBtn) => {
  secondCloseBtn.addEventListener("click", function () {
    secondLevelModal.style.display = "none";
    secondPopups.forEach((secondPopup) => {
      secondPopup.style.display = "none";
    });
  });
});

envSetBtn.addEventListener("click", function () {
  firstLevelModal.style.display = "block";
  envSetModal.style.display = "block";
});

editBtn.addEventListener("click", function () {
  firstLevelModal.style.display = "block";
  envSetModal.style.display = "none";
  resetModal.style.display = "block";
});

overlapBtns.forEach((overlapBtn) => {
  overlapBtn.addEventListener("click", function () {
    if (overlapBtn.classList.contains("active")) {
      secondLevelModal.style.display = "block";
      confirmModal.style.display = "block";
    }
  });
});

doneBtns.forEach((doneBtn) => {
  doneBtn.addEventListener("click", function () {
    if (doneBtn.classList.contains("active")) {
      firstLevelModal.style.display = "block";
      setModal.style.display = "none";
      resetModal.style.display = "none";
      doneModal.style.display = "block";
    }
  });
});

helpBtn.addEventListener("click", function () {
  firstLevelModal.style.display = "block";
  helpModal.style.display = "block";
});

quitBtn.addEventListener("click", function () {
  firstLevelModal.style.display = "block";
  quitModal.style.display = "block";
});

noticeBtns.forEach((noticeBtn) => {
  noticeBtn.addEventListener("click", function () {
    firstLevelModal.style.display = "block";
    noticeModal.style.display = "block";
  });
});

gameStartBtn.addEventListener("click", function () {
  firstLevelModal.style.display = "block";
  setModal.style.display = "block";
});
