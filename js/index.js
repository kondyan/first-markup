(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector(".form-modal"),
  };
  if (refs.openModalBtn) {
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.form.addEventListener("submit", submitModal);
  }
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (!refs.modal.classList.contains("is-hidden")) {
      bodyScrollLock.disableBodyScroll(document.body);
    } else {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  }

  function submitModal(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
  }
})();

const stuff = [
  {
    id: 1,
    name: "Mark Guerrero",
    job: "Product designer",
    photo: "./img/employer-1",
  },
  {
    id: 2,
    name: "Tom Ford",
    job: "Frontend Developer",
    photo: "./img/employer-2",
  },
  {
    id: 3,
    name: "Camila Garcia",
    job: "Marketing",
    photo: "./img/employer-3",
  },
  {
    id: 4,
    name: "Daniel Wilson",
    job: "UI Designer",
    photo: "./img/employer-4",
  },
];

const personCard = (card) => {
  return `<li class="team-list-item">
  <picture>
    <source
      srcset="${card.photo}.webp 1x, ${card.photo}@2x.webp 2x"
      type="image/webp"
    />

    <source srcset="${card.photo}.jpg 1x, ${card.photo}@2x.jpg 2x" />

    <img
      class="team-list-img"
      src="${card.photo}.jpg"
      alt="${card.name}"
      width="264"
    />
  </picture>
  <h3 class="team-list-name header-three">${card.name}</h3>
  <p class="team-list-job">${card.job}</p>
  <ul class="social-list list">
    <li class="social-list-item">
      <a
        class="social-list-item-link link"
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="instagram"
      >
        <svg class="social-list-item-svg">
          <use
            class="social-list-item-logo"
            href="./img/social-media.svg#icon-instagram"
            width="16"
            height="16"
          />
        </svg>
      </a>
    </li>
    <li class="social-list-item">
      <a
        class="social-list-item-link link"
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="twitter"
      >
        <svg class="social-list-item-svg">
          <use
            class="social-list-item-logo"
            href="./img/social-media.svg#icon-twitter"
            width="16"
            height="16"
          />
        </svg>
      </a>
    </li>
    <li class="social-list-item">
      <a
        class="social-list-item-link link"
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="facebook"
      >
        <svg class="social-list-item-svg">
          <use
            class="social-list-item-logo"
            href="./img/social-media.svg#icon-facebook"
            width="16"
            height="16"
          />
        </svg>
      </a>
    </li>
    <li class="social-list-item">
      <a
        class="social-list-item-link link"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="linkedin"
      >
        <svg class="social-list-item-svg">
          <use
            class="social-list-item-logo"
            href="./img/social-media.svg#icon-linkedin"
            width="16"
            height="16"
          />
        </svg>
      </a>
    </li>
  </ul>
</li>`;
};

const layout = stuff.map(personCard);
const refTeam = document.querySelector(".team-list");
if (refTeam) {
  refTeam.innerHTML = layout.join(" ");
}
