AOS.init({
  offset: 200,
});

/* 메뉴 스크롤 이동 */
const windowHeight = window.innerHeight;
const header = document.querySelector('.header');
const gnbMenu = document.querySelector('.header_nav');

gnbMenu.addEventListener('click', (e) => {
  e.preventDefault();

  let data = e.target.getAttribute('data-link');
  let target = document.querySelector('#' + data).offsetTop;

  window.scrollTo({
    top: target - header.offsetHeight,
    left: 0,
    behavior: 'smooth',
  });
});

/* tab click */
function contentsTabEvent() {
  const tabList = document.querySelectorAll('.tab_type01 li a');
  const tabContents = document.querySelectorAll('.tab_view_box');

  for (var i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', function (e) {
      e.preventDefault();

      let getHref = this.getAttribute('href');
      let target = document.querySelector(getHref);

      for (var j = 0; j < tabList.length; j++) {
        tabList[j].classList.remove('active');
        tabContents[j].classList.remove('block');
      }
      this.classList.add('active');
      target.classList.add('block');
    });
  }
}

contentsTabEvent();

/* validateForm */
// function validateForm(e) {
//   e.preventDefault();

//   let type = e.target.f_type.value;
//   let name = e.target.f_name.value;
//   let email = e.target.f_email.value;
//   let password = e.target.f_password.value;
//   let passwordChk = e.target.f_password_chk.value;

//   if (!type) {
//     e.target.f_type.focus();
//     return alert('유형을 선택하세요.');
//   }

//   if (!name) {
//     e.target.f_name.focus();
//     return alert(name);
//   }

//   if (!email) {
//     e.target.f_email.focus();
//     return alert('이메일을 입력하세요.');
//   }

//   if (!password) {
//     e.target.f_password.focus();
//     return alert('비밀번호를 입력하세요.');
//   }

//   if (!passwordChk) {
//     e.target.f_password_chk.focus();
//     return alert('비밀번호를 확인하세요.');
//   }
// }

// document.querySelector('#mainForm').addEventListener('submit', validateForm);

// 1. 유형 입력창 정보
const elSelectType = document.querySelector('#f_type');
// 1-1. 유형 입력창 실패 문구영역
const elSelectTypeErrText = document.querySelector('#typeMsg');

// 1. 성명 입력창 정보
const elInputName = document.querySelector('#f_name');
// 1-1. 성명 입력창 실패 문구영역
const elInputNameErrText = document.querySelector('#nameMsg');

// 2. 이메일 입력창 정보
const elInputEmail = document.querySelector('#f_email');
// 2-1. 이메일 입력창 실패 문구영역
const elInputEmailErrText = document.querySelector('#emailMsg');

// 3. 비밀번호 입력창 정보
const elInputPassword = document.querySelector('#f_password');
// 3-1. 비밀번호 입력창 실패 문구영역
const elInputPasswordErrText = document.querySelector('#passwordMsg');

// 4. 비밀번호 확인 입력창 정보
let elInputPasswordChk = document.querySelector('#f_password_chk');
// 4-1. 비밀번호 확인 입력창 실패 문구영역
let elInputPasswordChkErrText = document.querySelector('#passwordChkMsg');

// 성명 : 글자 수 제한 (2글자 이상, 10글자 이하)
function idLength(value) {
  return value.length >= 2 && value.length <= 10;
}

// 이메일 체크.
function ValidateEmail(value) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

// 비밀번호 : 8글자 이상, 영문, 숫자, 특수문자 사용
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str
  );
}

// 비밀번호 확인 : 비밀번호와 비밀번호 확인 일치
function isMatch(password1, password2) {
  return password1 === password2;
}

elSelectType.onchange = function () {
  if (elSelectType.value.length != 0) {
    elSelectTypeErrText.classList.add('hide');
  } else {
    elSelectTypeErrText.classList.remove('hide');
  }
};

elInputName.onkeyup = function () {
  if (elInputName.value.length !== 0) {
    if (idLength(elInputName.value) === false) {
      elInputNameErrText.classList.remove('hide');
    } else {
      elInputNameErrText.classList.add('hide');
    }
  } else {
    elInputNameErrText.classList.add('hide');
  }
};

elInputName.onkeyup = function () {
  if (elInputName.value.length !== 0) {
    if (idLength(elInputName.value) === false) {
      elInputNameErrText.classList.remove('hide');
    } else {
      elInputNameErrText.classList.add('hide');
    }
  } else {
    elInputNameErrText.classList.add('hide');
  }
};

elInputEmail.onkeyup = function () {
  if (elInputEmail.value.length !== 0) {
    if (ValidateEmail(elInputEmail.value) === false) {
      elInputEmailErrText.classList.remove('hide');
    } else {
      elInputEmailErrText.classList.add('hide');
    }
  } else {
    elInputEmailErrText.classList.add('hide');
  }
};

elInputPassword.onkeyup = function () {
  if (elInputPassword.value.length !== 0) {
    if (strongPassword(elInputPassword.value) === false) {
      elInputPasswordErrText.classList.remove('hide');
    } else {
      elInputPasswordErrText.classList.add('hide');
    }
  } else {
    elInputPasswordErrText.classList.add('hide');
  }
};

elInputPasswordChk.onkeyup = function () {
  if (elInputPasswordChk.value.length !== 0) {
    if (isMatch(elInputPassword.value, elInputPasswordChk.value)) {
      elInputPasswordChkErrText.classList.add('hide');
    } else {
      elInputPasswordChkErrText.classList.remove('hide');
    }
  } else {
    elInputPasswordChkErrText.classList.add('hide');
  }
};
