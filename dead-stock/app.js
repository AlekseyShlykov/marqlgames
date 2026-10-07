const copy = {
  en: {
    pageTitle: "Find the dead stock — a marql retail game",
    introTitle: "Can you find the stock that stopped earning?",
    introLead: "Make five store-level inventory calls and leave with a practical dead-stock playbook.",
    start: "Start!",
    scanLabel: "STORE × SKU",
    averageTime: "AVERAGE TEST TIME",
    averageTimeValue: "2:11 MIN",
    decisionLogged: "Decision logged",
    revealLater: "We will unpack the inventory logic at the end.",
    next: "Next check",
    seeResult: "See my stock playbook",
    decisionWord: "Check",
    resultPrefix: "You are",
    score: "SCORE",
    correct: "CORRECT",
    rethink: "RETHINK",
    yourChoice: "Your choice",
    correctChoice: "Best answer",
    why: "Why it is right",
    apply: "Use it today",
    todayLabel: "A practical first scan",
    todayTitle: "Find the money, verify the units, match the action.",
    todayOne: "Calculate days of cover for every product and store from the last 90 days of sales.",
    todayTwo: "Count flagged stock and separate dead, slow and excess positions.",
    todayThree: "Transfer, pause reorders or clear — then rerun the same list in one or two weeks.",
    sourceLabel: "Rules and examples are based on the marql article",
    sourceLink: "How to Find Dead Stock in a Retail Chain, Store by Store",
    ctaEyebrow: "From list to action",
    ctaTitle: "marql finds dead stock store by store.",
    ctaBody: "Connect POS and ERP data to see days of cover and capital at cost, review transfer drafts and measure what each accepted action changed.",
    tryMarql: "Try marql",
    freeMonthNote: "1st month free",
    shareResult: "Share result",
    shareLead: "My marql dead-stock result:"
  },
  ru: {
    pageTitle: "Найдите мёртвый запас — игра marql для ритейла",
    introTitle: "Сможете найти запас, который перестал зарабатывать?",
    introLead: "Примите пять решений по запасам отдельных магазинов и получите практичный план работы с dead stock.",
    start: "Начать!",
    scanLabel: "МАГАЗИН × SKU",
    averageTime: "СРЕДНЕЕ ВРЕМЯ ТЕСТА",
    averageTimeValue: "2:11 МИН",
    decisionLogged: "Решение записано",
    revealLater: "В финале разберём логику работы с запасами.",
    next: "Следующая проверка",
    seeResult: "Получить план по запасам",
    decisionWord: "Проверка",
    resultPrefix: "Вы",
    score: "РЕЗУЛЬТАТ",
    correct: "ВЕРНО",
    rethink: "СТОИТ ПЕРЕСМОТРЕТЬ",
    yourChoice: "Ваш выбор",
    correctChoice: "Лучший ответ",
    why: "Почему это верно",
    apply: "Применить сегодня",
    todayLabel: "Практичная первая проверка",
    todayTitle: "Найдите деньги, проверьте остатки, выберите действие.",
    todayOne: "Рассчитайте дни покрытия для каждого товара и магазина по продажам за последние 90 дней.",
    todayTwo: "Пересчитайте отмеченные остатки и разделите мёртвый, медленный и избыточный запас.",
    todayThree: "Переместите товар, остановите заказ или запустите очистку запаса — затем повторите расчёт через одну-две недели.",
    sourceLabel: "Правила и примеры основаны на статье marql",
    sourceLink: "How to Find Dead Stock in a Retail Chain, Store by Store",
    ctaEyebrow: "От списка к действию",
    ctaTitle: "marql находит мёртвый запас по каждому магазину.",
    ctaBody: "Подключите данные POS и ERP, чтобы видеть дни покрытия и капитал по себестоимости, проверять проекты перемещений и измерять эффект каждого принятого действия.",
    tryMarql: "Попробовать marql",
    freeMonthNote: "1-й месяц бесплатно",
    shareResult: "Поделиться результатом",
    shareLead: "Мой результат по управлению dead stock в marql:"
  }
};

const questions = [
  {
    tag: { en: "STORE-LEVEL VIEW", ru: "УРОВЕНЬ МАГАЗИНА" },
    title: {
      en: "The chain shows 60 days of cover. What should you inspect next?",
      ru: "По сети видно 60 дней покрытия. Что проверить дальше?"
    },
    context: {
      en: "One product totals 120 units and sells two units a day across three stores. The network average looks reasonable, but it can hide opposite problems.",
      ru: "По одному товару в трёх магазинах числится 120 единиц, а продажи по сети — две единицы в день. Среднее выглядит нормально, но может скрывать противоположные проблемы."
    },
    signalLabel: { en: "Chain-wide cover", ru: "Покрытие по сети" },
    signalValue: "60 days",
    signalDetail: { en: "120 units ÷ 2 units a day", ru: "120 единиц ÷ 2 единицы в день" },
    mascot: "../assets/Group-6.svg",
    motion: "sort",
    mascotAlt: { en: "A stock crate mascot sorting inventory by store", ru: "Маскот-коробка сортирует запасы по магазинам" },
    correct: 1,
    options: [
      { en: "Mark the product down in every store", ru: "Снизить цену товара во всех магазинах" },
      { en: "Calculate days of cover for this product in each store", ru: "Рассчитать дни покрытия этого товара отдельно по каждому магазину" },
      { en: "Place one chain-wide reorder to protect availability", ru: "Сделать один заказ на всю сеть для защиты наличия" },
      { en: "Treat the product as healthy because 60 days is the average", ru: "Считать товар здоровым, потому что среднее покрытие — 60 дней" }
    ],
    reviewTitle: { en: "Dead stock is a product × store fact.", ru: "Мёртвый запас — это факт на уровне товар × магазин." },
    why: {
      en: "Days of cover equals stock on hand divided by average daily sales. In the article's example, the same chain total hides Store A with 40 units and no sales in 90 days, Store B with only four days of cover, and Store C with 148 days. The total cannot tell you which action fits each store.",
      ru: "Дни покрытия равны остатку, делённому на средние дневные продажи. В примере статьи общий показатель скрывает магазин A с 40 единицами и нулём продаж за 90 дней, магазин B всего с четырьмя днями покрытия и магазин C со 148 днями. Общий итог не показывает, какое действие подходит каждой точке."
    },
    apply: {
      en: "Export stock on hand and the last 90 days of sales by SKU and store. Calculate cover on each row before sorting the list.",
      ru: "Выгрузите остаток и продажи за последние 90 дней по каждому SKU и магазину. Рассчитайте покрытие в каждой строке до сортировки списка."
    }
  },
  {
    tag: { en: "PHYSICAL COUNT", ru: "ФИЗИЧЕСКИЙ ПЕРЕСЧЁТ" },
    title: {
      en: "The system shows 12 units and no sales. What comes before a markdown?",
      ru: "В системе 12 единиц и ни одной продажи. Что сделать до уценки?"
    },
    context: {
      en: "Units can be stolen, damaged, misplaced or simply not written off. The record may show stock that customers cannot actually find.",
      ru: "Единицы могли быть украдены, повреждены, потеряны или не списаны. В системе может числиться товар, которого покупатель не найдёт."
    },
    signalLabel: { en: "System record", ru: "Запись в системе" },
    signalValue: "12 units",
    signalDetail: { en: "no recorded sales", ru: "нет зафиксированных продаж" },
    mascot: "../assets/09 · Barcode scanner · 64.8 × 58.77 mm.svg",
    motion: "scan",
    mascotAlt: { en: "A barcode scanner mascot checking the shelf", ru: "Маскот-сканер проверяет полку" },
    correct: 2,
    options: [
      { en: "Cut the price immediately", ru: "Сразу снизить цену" },
      { en: "Stop every reorder in the category", ru: "Остановить все заказы в категории" },
      { en: "Count the shelf and back room, then correct the record", ru: "Пересчитать полку и подсобку, затем исправить учёт" },
      { en: "Move the recorded 12 units to another store", ru: "Переместить указанные в системе 12 единиц в другой магазин" }
    ],
    reviewTitle: { en: "Count the shelf before you trust the list.", ru: "Пересчитайте полку, прежде чем доверять списку." },
    why: {
      en: "Stock on record with no sales has two explanations: nobody wants it, or nobody can find it. The second is an invisible stock-out, so a markdown cannot fix it. The grocery study cited by the article found an 11% store-wide sales lift after an inventory audit, concentrated in items where system stock exceeded the physical count.",
      ru: "У остатка без продаж есть два объяснения: товар никому не нужен или его никто не может найти. Второй случай — невидимый дефицит, который уценка не исправит. В исследовании продуктового ритейла, на которое ссылается статья, аудит запасов дал рост продаж магазина на 11%; весь эффект пришёлся на позиции, где системный остаток превышал фактический."
    },
    apply: {
      en: "Physically count a sample of the highest-value flagged positions before approving transfers or discounts.",
      ru: "Физически пересчитайте выборку самых дорогих отмеченных позиций до согласования перемещений или скидок."
    }
  },
  {
    tag: { en: "THE 60/90-DAY RULE", ru: "ПРАВИЛО 60/90 ДНЕЙ" },
    title: {
      en: "Which position passes the article's dead-stock rule?",
      ru: "Какая позиция проходит правило dead stock из статьи?"
    },
    context: {
      en: "New, seasonal and repacked goods can look inactive in the sales line. The rule needs enough time and evidence to make the silence conclusive.",
      ru: "Новые, сезонные и переупакованные товары могут выглядеть неактивными в строке продаж. Правилу нужны достаточный срок и подтверждения."
    },
    signalLabel: { en: "Candidate positions", ru: "Позиции-кандидаты" },
    signalValue: "4 SKUs",
    signalDetail: { en: "only one passes every check", ru: "только одна проходит все проверки" },
    mascot: "../assets/08 · Card terminal · 54.8 × 72.25 mm.svg",
    motion: "trace",
    mascotAlt: { en: "A terminal mascot checking the 60 and 90-day rules", ru: "Маскот-терминал проверяет правила 60 и 90 дней" },
    correct: 0,
    options: [
      { en: "8 on hand; no sale in 60 days; no recent repack; 3 sold in 90 days; on shelf 75 days", ru: "8 в остатке; нет продаж 60 дней; не переупаковывался; 3 продажи за 90 дней; на полке 75 дней" },
      { en: "10 on hand; arrived 10 days ago; no sale yet", ru: "10 в остатке; поступил 10 дней назад; продаж пока нет" },
      { en: "A case with no direct sales; poured into the bulk bin 20 days ago", ru: "Короб без прямых продаж; высыпан в весовой бункер 20 дней назад" },
      { en: "Winter seasonal stock reviewed in September without last-year comparison", ru: "Зимний сезонный товар в сентябре без сравнения с прошлым годом" }
    ],
    reviewTitle: { en: "Silence becomes dead stock only after the exceptions are ruled out.", ru: "Отсутствие продаж становится dead stock только после проверки исключений." },
    why: {
      en: "marql's article rule requires stock on hand, no sale in the last 60 days, no repack movement in the last 60 days, and either fewer than five units sold in 90 days or at least 60 days on the shelf. New stock is not yet conclusive, seasonal stock needs a like-for-like period, and a recent pour counts as movement.",
      ru: "Правило marql требует наличия остатка, отсутствия продаж последние 60 дней, отсутствия движения через переупаковку последние 60 дней, а также либо менее пяти продаж за 90 дней, либо не менее 60 дней на полке. По новому товару вывод делать рано, сезонный нужно сравнивать с аналогичным периодом, а недавняя пересыпка считается движением."
    },
    apply: {
      en: "Add first-receipt date, last-sale date, 90-day unit sales, repack movement and a seasonal flag to every candidate row.",
      ru: "Добавьте к каждой позиции дату первого поступления, дату последней продажи, продажи в штуках за 90 дней, движение переупаковки и признак сезонности."
    }
  },
  {
    tag: { en: "MATCH THE ACTION", ru: "ПОДБЕРИТЕ ДЕЙСТВИЕ" },
    title: {
      en: "Store A has no demand; Store B will run out in four days. Your best first move?",
      ru: "В магазине A нет спроса, а в B товар закончится через четыре дня. Ваш первый шаг?"
    },
    context: {
      en: "The same SKU has 40 units and no sales in Store A. Store B holds 6 units and sells 1.5 a day. Store C has 148 days of cover.",
      ru: "Тот же SKU: 40 единиц без продаж в магазине A; 6 единиц при продажах 1,5 в день в B; 148 дней покрытия в C."
    },
    signalLabel: { en: "Store B cover", ru: "Покрытие магазина B" },
    signalValue: "4 days",
    signalDetail: { en: "6 units ÷ 1.5 a day", ru: "6 единиц ÷ 1,5 в день" },
    mascot: "../assets/Group.svg",
    motion: "roll",
    mascotAlt: { en: "A shopping cart mascot moving stock between stores", ru: "Маскот-тележка перемещает запас между магазинами" },
    correct: 1,
    options: [
      { en: "Order new stock for every store", ru: "Заказать новый товар для всех магазинов" },
      { en: "Transfer units from A to B before the stock-out, if margin covers the move", ru: "Переместить товар из A в B до дефицита, если маржа покрывает перевозку" },
      { en: "Mark down the product in Store B", ru: "Снизить цену товара в магазине B" },
      { en: "Move Store A's units to Store C", ru: "Переместить запас магазина A в магазин C" }
    ],
    reviewTitle: { en: "Move stock to demand before buying more.", ru: "Переместите запас к спросу до новой закупки." },
    why: {
      en: "A store-to-store transfer can recover sales without a new order when one location has non-moving units and another is close to a stock-out. The article's guardrails are to act before demand, leave roughly a week of sales at the sending store, and transfer only when the receiving margin covers the cost of the move.",
      ru: "Перемещение между магазинами может вернуть продажи без новой закупки, когда в одной точке товар не движется, а в другой близок дефицит. Ограничения из статьи: действовать до возникновения спроса, оставить в отправляющем магазине примерно недельный объём продаж и перемещать только тогда, когда маржа получателя покрывает стоимость перевозки."
    },
    apply: {
      en: "Match dead or high-cover rows with stores at or below reorder point, then compare recoverable margin with transport cost.",
      ru: "Сопоставьте мёртвые позиции или строки с высоким покрытием с магазинами на уровне точки заказа или ниже, затем сравните возвращаемую маржу со стоимостью перевозки."
    }
  },
  {
    tag: { en: "COST OF WAITING", ru: "СТОИМОСТЬ ОЖИДАНИЯ" },
    title: {
      en: "€10,000 of stock at a 20% annual holding rate costs about how much each week?",
      ru: "Сколько примерно стоит неделя хранения запаса на €10 000 при годовой ставке 20%?"
    },
    context: {
      en: "Holding cost includes the opportunity cost of tied-up capital plus items such as taxes, insurance, obsolescence, spoilage and space.",
      ru: "Стоимость хранения включает альтернативную стоимость замороженного капитала, а также налоги, страхование, устаревание, порчу и занимаемое место."
    },
    signalLabel: { en: "Stock at cost", ru: "Запас по себестоимости" },
    signalValue: "€10,000",
    signalDetail: { en: "illustrative annual rate: 20%", ru: "пример годовой ставки: 20%" },
    mascot: "../assets/receipt-mascot-animated.svg",
    motion: "prove",
    mascotAlt: { en: "A receipt mascot calculating inventory holding cost", ru: "Маскот-чек рассчитывает стоимость хранения запаса" },
    correct: 2,
    options: [
      { en: "About €4 a week", ru: "Около €4 в неделю" },
      { en: "About €20 a week", ru: "Около €20 в неделю" },
      { en: "About €38 a week", ru: "Около €38 в неделю" },
      { en: "About €200 a week", ru: "Около €200 в неделю" }
    ],
    reviewTitle: { en: "Price the capital and the cost of keeping it.", ru: "Оцените капитал и стоимость его удержания." },
    why: {
      en: "€10,000 × 20% ÷ 52 is about €38 a week. The ASCM definition cited in the article puts carrying cost commonly at 10%–35% of inventory value per year, depending on industry. Twenty percent is the article's worked example, not a universal rate; each chain should calculate its own.",
      ru: "€10 000 × 20% ÷ 52 — это примерно €38 в неделю. В определении ASCM, приведённом в статье, типичный carrying cost составляет 10–35% стоимости запаса в год в зависимости от отрасли. 20% — расчётный пример статьи, а не универсальная ставка; каждой сети нужна собственная."
    },
    apply: {
      en: "Rank flagged positions by capital at cost, add your weekly holding cost, and compare the cost of waiting with the value each action can recover now.",
      ru: "Ранжируйте позиции по капиталу в себестоимости, добавьте недельную стоимость хранения и сравните цену ожидания с ценностью, которую действие может вернуть сейчас."
    }
  }
];

const profiles = {
  en: [
    {
      max: 2,
      title: "The stock scout",
      summary: "You notice that inventory needs investigation before action — a valuable instinct when one report can hide several different problems. Your next step is to make the checks repeatable: calculate cover by store, verify the shelf and label every exception before choosing a discount or transfer. That structure will turn your curiosity into protected margin and freed cash."
    },
    {
      max: 4,
      title: "The inventory diagnostician",
      summary: "You already separate symptoms from causes and make most stock decisions at the right level. That protects the business from blanket markdowns and unnecessary orders. Your growth zone is closing the loop: price the cost of waiting, record why each SKU left the list, and rerun the same scan so the team can prove which actions released cash."
    },
    {
      max: 5,
      title: "The dead-stock operator",
      summary: "You read inventory as a set of store-level decisions, not one chain-wide number. You verify the units, distinguish dead from slow and excess stock, and match transfers or clearance to the economics. That is a strong operating discipline. Your next advantage is cadence: automate the same rules, review the highest-value rows and measure the second list against the first."
    }
  ],
  ru: [
    {
      max: 2,
      title: "Исследователь запасов",
      summary: "Вы чувствуете, что запас нужно исследовать до действия, — это ценная интуиция, когда один отчёт может скрывать несколько разных проблем. Следующий шаг — сделать проверки повторяемыми: считать покрытие по магазинам, сверять полку и отмечать исключения до уценки или перемещения. Такая структура превратит вашу внимательность в защищённую маржу и высвобождённые деньги."
    },
    {
      max: 4,
      title: "Диагност запасов",
      summary: "Вы уже отделяете симптомы от причин и принимаете большинство решений по запасам на правильном уровне. Это защищает бизнес от массовых уценок и лишних заказов. Ваша зона роста — замкнуть цикл: оценивать стоимость ожидания, фиксировать причину выхода каждого SKU из списка и повторять расчёт, чтобы команда видела, какие действия действительно высвободили деньги."
    },
    {
      max: 5,
      title: "Оператор мёртвых запасов",
      summary: "Вы читаете запас как набор решений по отдельным магазинам, а не как одну цифру по сети. Вы проверяете фактическое наличие, отличаете мёртвый запас от медленного и избыточного и выбираете перемещение или очистку по экономике. Это сильная операционная дисциплина. Следующее преимущество даст ритм: автоматизировать правила, регулярно разбирать самые дорогие строки и измерять второй список относительно первого."
    }
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
  document.title = t("pageTitle");
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
  document.querySelector("#scoreValue").textContent = `${score} / ${questions.length}`;
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
