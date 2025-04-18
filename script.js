document.addEventListener("DOMContentLoaded", () => {
    const sectionFirst = document.querySelector(".section-first");

    sectionFirst.addEventListener("click", () => {
        sectionFirst.classList.toggle("row-reverse");
    });

    // Afficher le contenu de la section 2R au clic
    const button = document.querySelector(".btn-contact");
    const input = document.querySelector(".input-contact");
    const paragraph = document.querySelector(".section-third-right p");
    const section = document.querySelector(".section-third-right");

    button.addEventListener("click", () => {
        const name = input.value;

        if (name !== "") {
            paragraph.style.display = "none";
            input.style.display = "none";
            button.style.display = "none";

            const message = document.createElement("p");
            message.textContent = `Nice to meet you ${name} ! Thanks to introduce yourself.`;

            section.appendChild(message);
        } else {
            alert("Please enter your name.");
        }
    });

    // Afficher le contenu des cards individuellement
    const modal = document.querySelector('.modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalSubtitle = document.querySelector('.modal-subtitle');
    const modalText = document.querySelector('.modal-text');
    const closeBtn = document.querySelector('.modal-close');

    const fullArticles = {
        0: {
            title: "Weather",
            subtitle: "Wed 17 Feb 2021 12:45",
            text: "In the north of the country it’s very windy and cold. There is a chance of some rain too, so don’t leave home without your umbrella! The temperature is around 10°C in the east. Thunderstorms are expected in the afternoon. In the north of the country it’s very windy and cold. There is a chance of some rain too, so don’t leave home without your umbrella! The temperature is around 10°C in the east. Thunderstorms are expected in the afternoon. In the north of the country it’s very windy and cold. There is a chance of some rain too, so don’t leave home without your umbrella! The temperature is around 10°C in the east. Thunderstorms are expected in the afternoon."
        },
        1: {
            title: "News",
            subtitle: "Bitcoin hits new record of $50,000",
            text: "The so-called cryptocurrency, which was created by an unknown inventor, has risen about 72% this year. Experts are warning that regulations may soon be enforced on cryptocurrency trading due to security concerns."
        },
        2: {
            title: "Horoscope",
            subtitle: "Pisces",
            text: "One of the most critical stories of 2021 gets underfoot today, Pisces. Tune into the messages around you. Changes are coming and your awareness will be your strongest tool."
        }
    };

    // Ouvre la modale
    document.querySelectorAll(".card").forEach((card, index) => {
        card.addEventListener("click", () => {
            const article = fullArticles[index];
            modalTitle.textContent = article.title;
            modalSubtitle.textContent = article.subtitle;
            modalText.textContent = article.text;
            modal.classList.remove("hidden");
        });
    });

    // Fermer bouton
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Fermer avec Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.add("hidden");
        }
    });

    // Bouton pour aligner le texte de la modale
    const modalCard = document.querySelector('.modal-card');
    const alignBtn = document.querySelectorAll('.align-btn');

    alignBtn.forEach(button => {
        button.addEventListener('click', () => {
            alignBtn.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

            if (button.classList.contains('left')) {
                modalCard.style.textAlign = 'left';
            } else if (button.classList.contains('center')) {
                modalCard.style.textAlign = 'center';
            }
        });
    });

    // Chuck Norris API Header
    const header = document.querySelector('.header');

    async function ChuckNorrisApi() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            header.textContent = data.value;
        } catch (error) {
            header.textContent = "Error ChucKNorrisAPI";
            console.error('Error fetching Chuck Norris joke:', error);
        }
    }
        
    ChuckNorrisApi();

    setInterval(ChuckNorrisApi, 10000)
});
