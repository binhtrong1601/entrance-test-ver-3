window.onload = function () {
  const input = document.getElementById("input");

  input.oninput = function () {
    const number = Number(input.value);
    console.log(number);
    numberOneTriangle(number);
  };

  function numberOneTriangle(x) {
    if (x <= 1 || x >= 10) {
      console.log("Số chưa chính xác mời bạn nhập lại!!!");
      return;
    }

    for (let i = 1; i <= x; i++) {
      renderChar(i, "*");
    }
  }

  function renderChar(length, char) {
    let content = "";
    for (let i = 0; i < length; i++) {
      content += char;
    }
    console.log(content);
  }
};
