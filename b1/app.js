window.onload = function () {
  const form = document.querySelector("#form");
  const a = document.querySelector("#a");
  const b = document.querySelector("#b");
  const result = document.querySelector("#result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const start = Number(a.value);
    const end = Number(b.value);
    let content = "";

    for (let i = start + 1; i < end; i++) {
      if (ktraSNT(i)) {
        content += `${i}, `;
      }
    }

    result.innerHTML = content;
  });

  function ktraSNT(x) {
    if (x < 2) return false;

    for (let i = 2; i < Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }

    return true;
  }
};
