const copy = {
  en: {
    introTitle: "How fast does your store turn signals into revenue?",
    introLead: "Test the decision system behind your store — then leave with three practices you can use today.",
    start: "Start!",
    signal: "SIGNAL",
    averageTime: "AVERAGE TEST TIME",
    averageTimeValue: "2:11 MIN",
    decisionLogged: "Decision logged",
    revealLater: "We will unpack the operating logic at the end.",
    next: "Next question",
    seeResult: "See the operating playbook",
    decisionWord: "Decision",
    resultPrefix: "You are",
    score: "SCORE",
    correct: "CORRECT",
    rethink: "RETHINK",
    yourChoice: "Your choice",
    correctChoice: "Best answer",
    why: "Why it is right",
    apply: "Use it today",
    todayLabel: "A 30-minute start",
    todayTitle: "Build one complete decision loop today.",
    todayOne: "Choose one live issue and write down the money at stake.",
    todayTwo: "Name the owner, source, action and decision deadline.",
    todayThree: "Set the comparison and date that will prove the result.",
    ctaEyebrow: "From habit to operating system",
    ctaTitle: "marql makes every one of these loops faster.",
    ctaBody: "It connects your live data, ranks decisions by money at stake, shows every source and tracks what each approved action was worth — across every store.",
    tryMarql: "Try marql",
    freeMonthNote: "1st month free",
    shareResult: "Share result",
    shareLead: "My marql decision system result:"
  },
  ru: {
    introTitle: "Как быстро ваш магазин превращает сигналы в выручку?",
    introLead: "Проверьте систему принятия решений — и получите три практики, которые можно применить уже сегодня.",
    start: "Начать!",
    signal: "СИГНАЛ",
    averageTime: "СРЕДНЕЕ ВРЕМЯ ТЕСТА",
    averageTimeValue: "2:11 МИН",
    decisionLogged: "Решение записано",
    revealLater: "В финале разберём логику каждого ответа.",
    next: "Следующий вопрос",
    seeResult: "Получить план действий",
    decisionWord: "Решение",
    resultPrefix: "Вы",
    score: "РЕЗУЛЬТАТ",
    correct: "ВЕРНО",
    rethink: "СТОИТ ПЕРЕСМОТРЕТЬ",
    yourChoice: "Ваш выбор",
    correctChoice: "Лучший ответ",
    why: "Почему это верно",
    apply: "Применить сегодня",
    todayLabel: "Начните за 30 минут",
    todayTitle: "Сегодня соберите один полный цикл решения.",
    todayOne: "Выберите одну живую проблему и запишите сумму денег под риском.",
    todayTwo: "Назначьте ответственного, источник данных, действие и срок решения.",
    todayThree: "Определите сравнение и дату, которые подтвердят результат.",
    ctaEyebrow: "От привычки к операционной системе",
    ctaTitle: "marql ускоряет каждый из этих циклов.",
    ctaBody: "Он подключает живые данные, ранжирует решения по деньгам на кону, показывает источники и измеряет ценность каждого одобренного действия во всей сети.",
    tryMarql: "Попробовать marql",
    freeMonthNote: "1-й месяц бесплатно",
    shareResult: "Поделиться результатом",
    shareLead: "Мой результат системы решений marql:"
  }
};

const questions = [
  {
    tag: { en: "REVENUE VELOCITY", ru: "СКОРОСТЬ ВЫРУЧКИ" },
    title: {
      en: "What has the strongest impact on revenue when store conditions change?",
      ru: "Что сильнее всего влияет на выручку, когда ситуация в магазине меняется?"
    },
    context: {
      en: "Demand shifts, shelves empty and discount leakage starts between reporting cycles. One operating capability limits how long revenue stays exposed.",
      ru: "Спрос меняется, полки пустеют, утечка скидок начинается между отчётами. Один навык определяет, как долго выручка остаётся под риском."
    },
    signalLabel: { en: "Revenue exposed each day", ru: "Выручка под риском ежедневно" },
    signalValue: "€ 2,900",
    signalDetail: { en: "until a decision reaches the store", ru: "пока решение не дошло до магазина" },
    mascot: "../assets/Group.svg",
    motion: "roll",
    mascotAlt: { en: "A shopping cart mascot moving quickly", ru: "Маскот-тележка быстро движется" },
    correct: 1,
    options: [
      { en: "A larger assortment in every location", ru: "Более широкий ассортимент в каждой точке" },
      { en: "The speed from signal to decision to action", ru: "Скорость от сигнала до решения и действия" },
      { en: "More detail in the monthly report", ru: "Более подробный ежемесячный отчёт" },
      { en: "Deeper discounts across the whole network", ru: "Более глубокие скидки по всей сети" }
    ],
    reviewTitle: { en: "Speed is a revenue multiplier.", ru: "Скорость — мультипликатор выручки." },
    why: {
      en: "Every day of stock-out, labour mismatch or margin leakage repeats the same loss. Faster decisions shorten that exposure and give a good action more days to produce value. Speed does not replace judgment — it reduces the cost of waiting.",
      ru: "Каждый день дефицита, неверного расписания или утечки маржи повторяет одну и ту же потерю. Быстрое решение сокращает этот период и даёт полезному действию больше времени для результата. Скорость не заменяет качество — она снижает цену ожидания."
    },
    apply: {
      en: "Pick one live revenue leak. Give it one owner, one euro-at-stake estimate and a 24-hour decision deadline.",
      ru: "Выберите одну живую утечку выручки. Назначьте одного ответственного, оценку денег под риском и срок решения — 24 часа."
    }
  },
  {
    tag: { en: "TRUSTED SIGNALS", ru: "НАДЁЖНЫЕ СИГНАЛЫ" },
    title: {
      en: "Margin falls four points while revenue rises. What earns the first decision?",
      ru: "Маржа упала на четыре пункта, а выручка выросла. Какие данные заслуживают первого решения?"
    },
    context: {
      en: "The topline looks healthy, but profit is leaking somewhere inside product mix, purchasing or manual discounts.",
      ru: "Верхнеуровневая выручка выглядит хорошо, но прибыль утекает через ассортимент, закупки или ручные скидки."
    },
    signalLabel: { en: "Gross margin movement", ru: "Изменение валовой маржи" },
    signalValue: "−4 pts",
    signalDetail: { en: "revenue is still up 7%", ru: "при этом выручка выросла на 7%" },
    mascot: "../assets/08 · Card terminal · 54.8 × 72.25 mm.svg",
    motion: "trace",
    mascotAlt: { en: "A card terminal mascot tracing a margin signal", ru: "Маскот-терминал проверяет сигнал по марже" },
    correct: 2,
    options: [
      { en: "The annual trend presentation", ru: "Годовая презентация с трендами" },
      { en: "The store manager's strongest opinion", ru: "Самое уверенное мнение менеджера точки" },
      { en: "The transaction-level cause, with source and sync time", ru: "Причина на уровне транзакций с источником и временем обновления" },
      { en: "A screenshot of a competitor promotion", ru: "Скриншот акции конкурента" }
    ],
    reviewTitle: { en: "A number is useful when its cause is traceable.", ru: "Число полезно, когда его причину можно проверить." },
    why: {
      en: "Revenue growth can hide discount leakage, an expensive mix shift or rising cost of goods. A transaction-level cause connected to POS and accounting turns an anomaly into a specific action — and lets the team verify every number.",
      ru: "Рост выручки может скрывать утечку скидок, дорогой сдвиг ассортимента или рост себестоимости. Причина на уровне транзакций, связанная с POS и бухгалтерией, превращает аномалию в конкретное действие и позволяет проверить каждое число."
    },
    apply: {
      en: "Set a daily alert for margin and discount share. Require every alert to include source, last sync time and the euro gap before anyone acts.",
      ru: "Настройте ежедневный сигнал по марже и доле скидок. До любого действия требуйте источник, время обновления и размер разрыва в деньгах."
    }
  },
  {
    tag: { en: "PROVEN IMPACT", ru: "ДОКАЗАННЫЙ ЭФФЕКТ" },
    title: {
      en: "Sales rose after your action. What proves the decision actually worked?",
      ru: "После вашего действия продажи выросли. Что доказывает, что решение действительно сработало?"
    },
    context: {
      en: "Seasonality, payday, weather and nearby promotions can all move the same metric. The result needs a comparison, not just a good-looking line.",
      ru: "Сезонность, день зарплаты, погода и соседние акции могут двигать тот же показатель. Нужна база для сравнения, а не просто красивый график."
    },
    signalLabel: { en: "Measured uplift", ru: "Измеренный прирост" },
    signalValue: "+€ 8,400",
    signalDetail: { en: "only counts after comparison", ru: "считается только после сравнения" },
    mascot: "../assets/receipt-mascot-animated.svg",
    motion: "prove",
    mascotAlt: { en: "A receipt mascot checking measured impact", ru: "Маскот-чек проверяет измеренный эффект" },
    correct: 2,
    options: [
      { en: "The chart went up after launch", ru: "График вырос после запуска" },
      { en: "The team agrees the action felt successful", ru: "Команда считает действие успешным" },
      { en: "The outcome beats a baseline or control and is measured in money", ru: "Результат лучше базы или контроля и измерен в деньгах" },
      { en: "No customer complained about the change", ru: "Ни один клиент не пожаловался на изменение" }
    ],
    reviewTitle: { en: "Impact needs a counterfactual and a euro value.", ru: "Эффекту нужны сравнение и денежная оценка." },
    why: {
      en: "A before-and-after chart cannot separate your action from everything else that changed. A baseline, matched location, control group or holdout window gives the result a credible comparison; translating the gap into money makes the next priority clearer.",
      ru: "График «до и после» не отделяет ваше действие от других изменений. База, сопоставимая точка, контрольная группа или период дают честное сравнение, а перевод разницы в деньги помогает выбрать следующий приоритет."
    },
    apply: {
      en: "For the next promotion, save the baseline, choose one comparable untreated store or cohort, define the success metric and book the review date now.",
      ru: "Для следующей акции сохраните базу, выберите сопоставимый магазин или когорту без воздействия, задайте метрику успеха и сразу назначьте дату проверки."
    }
  }
];

const profiles = {
  en: [
    { max: 1, title: "The system builder", summary: "You are already looking beyond isolated actions and toward a stronger decision system. The opportunity is to connect speed, trusted causes and proof into one operating loop. The playbook below gives you a practical place to start today." },
    { max: 2, title: "The decision tuner", summary: "You recognise most of the operating loop and have a strong base to build on. Close the one missing link and your team can move faster without trading away confidence or financial control." },
    { max: 3, title: "The decision architect", summary: "You naturally think in complete decision loops. You understand that speed matters most when the signal is trustworthy and the result is measured — exactly how isolated wins become a repeatable operating system." }
  ],
  ru: [
    { max: 1, title: "Создатель системы", summary: "Вы уже смотрите дальше отдельных действий и хотите выстроить более сильную систему решений. Главная возможность — соединить скорость, проверяемую причину и доказательство в один операционный цикл. Ниже — практичный способ начать уже сегодня." },
    { max: 2, title: "Настройщик решений", summary: "Вы видите большую часть операционного цикла и уже имеете сильную базу. Закройте одно недостающее звено — и команда сможет двигаться быстрее без потери уверенности и финансового контроля." },
    { max: 3, title: "Архитектор решений", summary: "Вы естественно мыслите полными циклами решений. Вы понимаете, что скорость особенно ценна вместе с надёжным сигналом и измеренным результатом — именно так отдельные победы превращаются в повторяемую операционную систему." }
  ]
};

const state = { lang: "en", current: 0, answers: [] };

const elements = {
  app: document.querySelector("#app"),
  topbar: document.querySelector(".topbar"),
  intro: document.querySelector("#introScreen"),
  game: document.querySelector("#gameScreen"),
  result: document.querySelector("#resultScreen"),
  start: document.querySelector("#startButton"),
  brand: document.querySelector("#brandButton"),
  share: document.querySelector("#shareButton"),
  shareMenu: document.querySelector("#shareMenu"),
  linkedinShare: document.querySelector("#linkedinShare"),
  xShare: document.querySelector("#xShare"),
  continue: document.querySelector("#continueButton"),
  kicker: document.querySelector("#questionKicker"),
  progressCurrent: document.querySelector("#progressCurrent"),
  progressSegments: [...document.querySelectorAll(".progress-track span")],
  tag: document.querySelector("#questionTag"),
  title: document.querySelector("#questionTitle"),
  context: document.querySelector("#questionContext"),
  signalLabel: document.querySelector("#signalLabel"),
  signalValue: document.querySelector("#signalValue"),
  signalDetail: document.querySelector("#signalDetail"),
  mascot: document.querySelector("#questionMascot"),
  mascotImage: document.querySelector("#questionMascotImage"),
  options: document.querySelector("#optionsGrid"),
  lockPanel: document.querySelector("#lockPanel")
};

function t(key) {
  return copy[state.lang][key];
}

function local(value) {
  return typeof value === "string" ? value : value[state.lang];
}

function updateStaticCopy() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = copy[state.lang][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll(".language-button").forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function showScreen(name) {
  [elements.intro, elements.game, elements.result].forEach((screen) => screen.classList.remove("is-active"));
  elements[name].classList.add("is-active");
  elements.topbar.classList.toggle("on-light", name === "game");
  window.scrollTo({ top: 0, behavior: "smooth" });
  elements.app.focus({ preventScroll: true });
}

function renderQuestion() {
  const question = questions[state.current];
  const selected = state.answers[state.current];
  elements.kicker.textContent = `${t("decisionWord")} ${String(state.current + 1).padStart(2, "0")}`;
  elements.progressCurrent.textContent = String(state.current + 1);
  elements.tag.textContent = local(question.tag);
  elements.title.textContent = local(question.title);
  elements.context.textContent = local(question.context);
  elements.signalLabel.textContent = local(question.signalLabel);
  elements.signalValue.textContent = question.signalValue;
  elements.signalDetail.textContent = local(question.signalDetail);
  elements.mascot.className = `question-mascot motion-${question.motion}`;
  elements.mascot.setAttribute("aria-label", local(question.mascotAlt));
  elements.mascotImage.src = question.mascot;
  elements.lockPanel.hidden = selected === undefined;

  elements.progressSegments.forEach((segment, index) => {
    segment.classList.toggle("is-complete", index < state.current);
    segment.classList.toggle("is-current", index === state.current);
  });

  elements.options.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const isSelected = selected === index;
    button.type = "button";
    button.className = "option-button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(isSelected));
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${local(option)}</span>
      <span class="option-check" aria-hidden="true">${isSelected ? "✓" : ""}</span>
    `;
    if (selected !== undefined) {
      button.disabled = true;
      button.classList.toggle("is-selected", isSelected);
      button.classList.toggle("is-muted", !isSelected);
    }
    button.addEventListener("click", () => selectAnswer(index));
    elements.options.append(button);
  });

  elements.continue.querySelector("[data-i18n]").textContent = state.current === questions.length - 1 ? t("seeResult") : t("next");
}

function selectAnswer(index) {
  if (state.answers[state.current] !== undefined) return;
  state.answers[state.current] = index;
  renderQuestion();
  requestAnimationFrame(() => elements.lockPanel.scrollIntoView({ behavior: "smooth", block: "nearest" }));
}

function continueGame() {
  if (state.answers[state.current] === undefined) return;
  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  renderResult();
  showScreen("result");
}

function renderResult() {
  const score = questions.reduce((total, question, index) => total + (state.answers[index] === question.correct ? 1 : 0), 0);
  const profile = profiles[state.lang].find((item) => score <= item.max);
  document.querySelector("#resultTitle").textContent = `${t("resultPrefix")} — ${profile.title}`;
  document.querySelector("#resultSummary").textContent = profile.summary;
  document.querySelector("#scoreValue").textContent = `${score} / 3`;
  document.querySelectorAll("#scoreDots i").forEach((dot, index) => dot.classList.toggle("is-on", index < score));

  document.querySelector("#answerReview").innerHTML = questions.map((question, index) => {
    const selected = state.answers[index];
    const isCorrect = selected === question.correct;
    return `
      <article class="review-card${isCorrect ? "" : " is-wrong"}">
        <div class="review-number">
          <strong>${String(index + 1).padStart(2, "0")}</strong>
          <span class="review-status">${isCorrect ? t("correct") : t("rethink")}</span>
        </div>
        <div class="review-answer">
          <p class="review-kicker">${local(question.tag)}</p>
          <h3>${local(question.reviewTitle)}</h3>
          <p class="choice-readout">
            ${t("yourChoice")}: <strong>${local(question.options[selected])}</strong><br />
            ${isCorrect ? "" : `${t("correctChoice")}: <strong>${local(question.options[question.correct])}</strong>`}
          </p>
        </div>
        <div class="review-application">
          <p class="review-kicker">${t("why")}</p>
          <p>${local(question.why)}</p>
          <div class="apply-now">
            <strong>${t("apply")}</strong>
            <p>${local(question.apply)}</p>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function startGame() {
  state.current = 0;
  state.answers = [];
  updateStaticCopy();
  renderQuestion();
  showScreen("game");
}

function resetGame() {
  state.current = 0;
  state.answers = [];
  elements.lockPanel.hidden = true;
  updateStaticCopy();
  showScreen("intro");
}

function shareResult() {
  const willOpen = elements.shareMenu.hidden;
  elements.shareMenu.hidden = !willOpen;
  elements.share.setAttribute("aria-expanded", String(willOpen));
  if (!willOpen) return;

  const resultTitle = document.querySelector("#resultTitle").textContent;
  const text = `${t("shareLead")} ${resultTitle}`;
  const url = window.location.href;
  elements.linkedinShare.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  elements.xShare.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${text} ${url}`)}`;
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".share-control") && !elements.shareMenu.hidden) {
    elements.shareMenu.hidden = true;
    elements.share.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.shareMenu.hidden) {
    elements.shareMenu.hidden = true;
    elements.share.setAttribute("aria-expanded", "false");
    elements.share.focus();
  }
});

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    updateStaticCopy();
    if (elements.game.classList.contains("is-active")) renderQuestion();
    if (elements.result.classList.contains("is-active")) renderResult();
  });
});

elements.start.addEventListener("click", startGame);
elements.continue.addEventListener("click", continueGame);
elements.share.addEventListener("click", shareResult);
elements.brand.addEventListener("click", resetGame);

updateStaticCopy();
