let btn = document.querySelector(".dot");

btn.addEventListener("click", function () {
  let p = document.querySelector("p");
  let h6 = document.querySelector("h6");
  let xml = new XMLHttpRequest();
  xml.open("GET", "https://api.adviceslip.com/advice");
  xml.send();
  xml.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      h6.innerText = `Advice #${JSON.parse(this.responseText).slip.id}`;
      p.innerText = `"${JSON.parse(this.responseText).slip.advice}"`;
    }
  };
});
