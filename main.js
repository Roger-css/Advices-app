async function FetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      cache: "no-cache",
    }).then((e) => e.json());
    const h6 = document.querySelector("h6");
    const p = document.querySelector("p");

    h6.innerText = `Advice #${response.slip.id}`;
    p.innerText = `"${response.slip.advice}"`;
  } catch (error) {
    console.log("lmao error");
  }
}
const button = document.querySelector(".dot");
button.addEventListener("click", () => {
  FetchAdvice();
});
