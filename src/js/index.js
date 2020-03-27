function Gallery(gal) {
  if (!gal) {
    throw new Error(`No gallery is passed`);
  }

  // select element
  const img = Array.from(gal.querySelectorAll("img"));
  const modal = document.querySelector(".modal");
  const next1 = document.querySelector(`#next1`);
  const prev1 = document.querySelector(`#prev1`);
  const cancel = document.querySelector(".cancel");
  let currentimg;

  function openModal() {
    // console.info(`opening modal`);
    if (modal.matches(".modal-dis")) {
      console.log(`open`);
    } else {
      modal.classList.add("modal-dis");
    }
  }

  function handalKeyUp(event) {
    event.key === "Escape" && closeModal();
    event.key === "ArrowRight" && nextbtn();
    event.key === "ArrowLeft" && prevbtn();
  }

  function showimg(i) {
    if (!i) {
      console.info(`No images to show`);
      return;
    }
    modal.querySelector(`img`).src = i.src;
    currentimg = i;
    openModal();
    window.addEventListener("keyup", handalKeyUp);
    prev1.addEventListener(`click`, prevbtn);
    next1.addEventListener(`click`, nextbtn);
  }
  function prevbtn() {
    showimg(currentimg.previousElementSibling);
  }
  function nextbtn() {
    showimg(currentimg.nextElementSibling);
  }

  function closeModal() {
    modal.classList.remove("modal-dis");
    window.removeEventListener("keyup", handalKeyUp);
    prev1.removeEventListener(`click`, prevbtn);
    next1.removeEventListener(`click`, nextbtn);
  }

  img.forEach(event => {
    event.addEventListener("click", e => {
      showimg(e.currentTarget);
    });
  });

  cancel.addEventListener("click", closeModal);
}

const g1 = Gallery(document.querySelector(`.gal11`));
const g2 = Gallery(document.querySelector(`.gal22`));
