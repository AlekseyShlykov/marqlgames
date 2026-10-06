const translations = {
  en: {
    introTitle: "How good is your retail instinct?",
    introLead: "Compare your decisions with other operations managers and discover how good you are at running a store.",
    start: "Start!",
    averageTime: "AVERAGE TEST TIME",
    averageTimeValue: "2:11 MIN",
    peerPulse: "Peer pulse",
    peerTitle: "How operators answered",
    peerNote: "Illustrative benchmark for this game.",
    next: "Next situation",
    seeResult: "See my result",
    situation: "Situation",
    peersSame: "of operators made the same call",
    resultPrefix: "You are",
    decisionStyle: "Decision style",
    decisionQuality: "Decision quality",
    majorityMatches: "Majority matches",
    amongScenarios: "across the five calls",
    profileLabel: "Your management read",
    nextMove: "Your next move",
    ctaTitle: "Great operators still need a second pair of eyes.",
    ctaBody: "marql connects your store data, surfaces the decisions with money at stake, and helps you measure what each call was worth.",
    tryMarql: "Try marql",
    freeMonthNote: "1st month free",
    shareResult: "Share result",
    shareLead: "My marql retail operator result:",
    conservative: "Conservative",
    calculated: "Calculated",
    bold: "Bold",
    you: "YOU",
    selected: "Selected",
    profileQualityHigh: "You combine momentum with evidence — a rare operating strength. You protect the downside without letting good opportunities disappear into another spreadsheet, and your team can trust that a decision will actually be made. Your growth zone is to turn this instinct into a repeatable system: write down the expected financial effect, the signal that would change your mind and the date you will review the outcome.",
    profileQualityMid: "You have strong operating instincts and a recognisable decision style. You can create momentum without losing sight of what the business is trying to protect. Your growth zone is consistency: before the bigger calls, make the economics visible, name the assumption you are testing and decide in advance what success will look like.",
    profileQualityLow: "You have a clear management style: you do not hide from difficult choices, and you are willing to take responsibility when the picture is incomplete. That decisiveness is valuable to any team. Your growth zone is to give each action a little more financial protection — one euro-at-stake estimate, one verifiable hypothesis and one point at which you will adjust or reverse the decision.",
    strengths: {
      evidence: "evidence first",
      pace: "keeps momentum",
      margin: "margin aware",
      downside: "protects downside",
      action: "action oriented",
      consistency: "consistent calls"
    }
  },
  ru: {
    introTitle: "Насколько сильна ваша интуиция в ритейле?",
    introLead: "Сравните свои решения с выбором других операционных менеджеров и узнайте, насколько хорошо вы управляете магазином.",
    start: "Начать!",
    averageTime: "СРЕДНЕЕ ВРЕМЯ ТЕСТА",
    averageTimeValue: "2:11 МИН",
    peerPulse: "Выбор коллег",
    peerTitle: "Как ответили операторы",
    peerNote: "Иллюстративный бенчмарк для этой игры.",
    next: "Следующая ситуация",
    seeResult: "Узнать результат",
    situation: "Ситуация",
    peersSame: "операторов приняли то же решение",
    resultPrefix: "Вы",
    decisionStyle: "Стиль решений",
    decisionQuality: "Качество решений",
    majorityMatches: "Совпадений с большинством",
    amongScenarios: "из пяти ситуаций",
    profileLabel: "Ваш управленческий профиль",
    nextMove: "Следующий шаг",
    ctaTitle: "Даже сильному оператору нужна вторая пара глаз.",
    ctaBody: "marql подключается к данным магазина, показывает решения с деньгами на кону и помогает измерить ценность каждого шага.",
    tryMarql: "Попробовать marql",
    freeMonthNote: "1-й месяц бесплатно",
    shareResult: "Поделиться результатом",
    shareLead: "Мой результат в игре marql:",
    conservative: "Консервативный",
    calculated: "Расчётливый",
    bold: "Рисковый",
    you: "ВЫ",
    selected: "Вы выбрали",
    profileQualityHigh: "Вы уверенно сочетаете темп с фактами — это редкая и очень ценная операционная сила. Вы защищаете бизнес от лишнего риска, но не позволяете хорошим возможностям затеряться в очередной таблице, а команда понимает, что решение действительно будет принято. Ваша зона роста — превратить эту сильную интуицию в повторяемую систему: заранее фиксировать ожидаемый финансовый эффект, сигнал для пересмотра и дату проверки результата.",
    profileQualityMid: "У вас крепкая управленческая интуиция и узнаваемый стиль решений. Вы умеете создавать движение и при этом помните, что именно бизнес должен защитить. Ваша зона роста — последовательность: перед крупными решениями делать экономику видимой, называть проверяемую гипотезу и заранее определять, как будет выглядеть успех.",
    profileQualityLow: "У вас заметный управленческий стиль: вы не прячетесь от сложных выборов и готовы брать ответственность даже при неполной картине. Для команды такая решительность очень ценна. Ваша зона роста — дать каждому действию немного больше финансовой защиты: оценить деньги под риском, сформулировать проверяемую гипотезу и заранее выбрать момент, когда решение нужно скорректировать или отменить.",
    strengths: {
      evidence: "опора на данные",
      pace: "высокий темп",
      margin: "чувство маржи",
      downside: "контроль риска",
      action: "ориентация на действие",
      consistency: "последовательность"
    }
  }
};

const questions = [
  {
    mascot: "assets/Group.svg",
    mascotMotion: "roll",
    mascotAlt: { en: "A cheerful shopping cart mascot", ru: "Весёлый маскот-тележка" },
    tag: { en: "INVENTORY", ru: "ЗАПАСЫ" },
    title: {
      en: "Your bestseller will be out of stock by tomorrow. What do you do?",
      ru: "Завтра закончится ваш бестселлер. Что будете делать?"
    },
    context: {
      en: "The regular delivery arrives in eight days. An express shipment costs 22% more, and a substitute has half the usual conversion.",
      ru: "Обычная поставка будет через восемь дней. Срочная стоит на 22% дороже, а замена продаётся вдвое хуже."
    },
    signalLabel: { en: "Weekly sales at risk", ru: "Недельная выручка под риском" },
    signalValue: "€ 6,400",
    signalDetail: { en: "8 days until regular delivery", ru: "8 дней до обычной поставки" },
    options: [
      { text: { en: "Wait for the regular delivery and feature the substitute.", ru: "Дождаться обычной поставки и продвигать замену." }, risk: 18, quality: 2, peers: 18 },
      { text: { en: "Split the order: expedite three days of cover, ship the rest normally.", ru: "Разделить заказ: три дня запаса срочно, остальное — обычной доставкой." }, risk: 46, quality: 4, peers: 42 },
      { text: { en: "Expedite the full order before shelves go empty.", ru: "Срочно доставить весь заказ до того, как опустеет полка." }, risk: 82, quality: 3, peers: 29 },
      { text: { en: "Raise the price on the final units and limit purchases per customer.", ru: "Поднять цену на остаток и ограничить количество в одни руки." }, risk: 70, quality: 1, peers: 11 }
    ]
  },
  {
    mascot: "assets/08 · Card terminal · 54.8 × 72.25 mm.svg",
    mascotMotion: "count",
    mascotAlt: { en: "A card terminal mascot counting the margin", ru: "Маскот-терминал считает маржу" },
    tag: { en: "MARGIN", ru: "МАРЖА" },
    title: {
      en: "Discounts tripled, but revenue is up 7%. Do you step in?",
      ru: "Скидки выросли втрое, но выручка прибавила 7%. Вмешиваться?"
    },
    context: {
      en: "Two stores are driving the increase. Gross margin is down four points, and managers say promotions are bringing in new customers.",
      ru: "Рост обеспечили два магазина. Валовая маржа упала на четыре пункта, а менеджеры говорят, что акции приводят новых клиентов."
    },
    signalLabel: { en: "Margin leakage", ru: "Потеря маржи" },
    signalValue: "€ 2,900",
    signalDetail: { en: "per week across two stores", ru: "в неделю в двух магазинах" },
    options: [
      { text: { en: "Stop all discretionary discounts today.", ru: "Сегодня же остановить все скидки по усмотрению менеджеров." }, risk: 22, quality: 2, peers: 24 },
      { text: { en: "Run a one-week controlled test by store, receipt and customer cohort.", ru: "Провести недельный контролируемый тест по магазинам, чекам и когортам." }, risk: 43, quality: 4, peers: 48 },
      { text: { en: "Keep the campaign — revenue growth proves it works.", ru: "Продолжить кампанию: рост выручки доказывает, что она работает." }, risk: 74, quality: 1, peers: 19 },
      { text: { en: "Give store managers a higher discount ceiling to accelerate growth.", ru: "Увеличить лимит скидки для менеджеров, чтобы ускорить рост." }, risk: 92, quality: 0, peers: 9 }
    ]
  },
  {
    mascot: "assets/Group-6.svg",
    mascotMotion: "lift",
    mascotAlt: { en: "A stock crate mascot", ru: "Маскот-коробка с запасами" },
    tag: { en: "WORKING CAPITAL", ru: "ОБОРОТНЫЙ КАПИТАЛ" },
    title: {
      en: "€42k has been sitting on the shelf for 90 days. Your move?",
      ru: "€42 тыс. лежат на полках уже 90 дней. Ваш ход?"
    },
    context: {
      en: "The slow stock is unevenly spread: some SKUs still sell in suburban stores, while city-centre demand has almost stopped.",
      ru: "Медленные запасы распределены неравномерно: часть SKU ещё продаётся в пригороде, а в центре спрос почти исчез."
    },
    signalLabel: { en: "Cash tied in stock", ru: "Деньги в запасах" },
    signalValue: "€ 42,000",
    signalDetail: { en: "18% of inventory is ageing", ru: "18% запасов устаревает" },
    options: [
      { text: { en: "Clear every slow SKU at 40% off this weekend.", ru: "Распродать все медленные SKU со скидкой 40% в эти выходные." }, risk: 78, quality: 2, peers: 22 },
      { text: { en: "Markdown by age and margin, then measure sell-through weekly.", ru: "Снижать цену с учётом возраста и маржи, еженедельно измеряя продажи." }, risk: 54, quality: 4, peers: 36 },
      { text: { en: "Hold until the next seasonal window to protect margin.", ru: "Дождаться следующего сезона, чтобы сохранить маржу." }, risk: 14, quality: 1, peers: 13 },
      { text: { en: "Transfer stock to stores where those SKUs still convert.", ru: "Перевести запасы в магазины, где эти SKU всё ещё продаются." }, risk: 38, quality: 4, peers: 29 }
    ]
  },
  {
    mascot: "assets/09 · Barcode scanner · 64.8 × 58.77 mm.svg",
    mascotMotion: "scan",
    mascotAlt: { en: "A barcode scanner mascot working the queue", ru: "Маскот-сканер обслуживает очередь" },
    tag: { en: "LABOUR", ru: "ПЕРСОНАЛ" },
    title: {
      en: "Labour is over target, yet Friday queues hit 11 minutes.",
      ru: "Затраты на персонал выше плана, но по пятницам очередь — 11 минут."
    },
    context: {
      en: "Most overtime is logged on quiet weekday mornings. Peak-hour abandonment is rising, but the monthly labour budget is already 14% over.",
      ru: "Большая часть переработок приходится на тихие будни утром. В часы пик клиенты уходят всё чаще, а бюджет уже превышен на 14%."
    },
    signalLabel: { en: "Peak queue time", ru: "Очередь в час пик" },
    signalValue: "11 min",
    signalDetail: { en: "labour cost 14% above target", ru: "затраты на персонал +14% к плану" },
    options: [
      { text: { en: "Cut the same number of hours from every shift.", ru: "Сократить одинаковое число часов в каждой смене." }, risk: 16, quality: 1, peers: 12 },
      { text: { en: "Add another Friday shift and accept the budget miss.", ru: "Добавить пятничную смену и принять превышение бюджета." }, risk: 66, quality: 2, peers: 21 },
      { text: { en: "Move quiet-hour coverage into the peak and test for two weeks.", ru: "Перенести часы из тихих периодов в пик и проверить две недели." }, risk: 42, quality: 4, peers: 53 },
      { text: { en: "Fast-track self-checkout before changing the schedule.", ru: "Срочно запустить кассы самообслуживания до изменения графика." }, risk: 85, quality: 2, peers: 14 }
    ]
  },
  {
    mascot: "assets/receipt-mascot-animated.svg",
    mascotMotion: "inspect",
    mascotAlt: { en: "A receipt mascot inspecting store performance", ru: "Маскот-чек изучает эффективность магазина" },
    tag: { en: "STORE PERFORMANCE", ru: "ЭФФЕКТИВНОСТЬ МАГАЗИНА" },
    title: {
      en: "One store is 12% behind plan. The manager blames footfall.",
      ru: "Один магазин отстаёт от плана на 12%. Менеджер винит трафик."
    },
    context: {
      en: "Nearby locations are flat, not down. The store has more stock-outs, a smaller basket and lower conversion than comparable sites.",
      ru: "Соседние точки не растут, но и не падают. Здесь больше out-of-stock, меньше чек и ниже конверсия, чем у сопоставимых магазинов."
    },
    signalLabel: { en: "Revenue gap", ru: "Отставание выручки" },
    signalValue: "−12%",
    signalDetail: { en: "vs plan this month", ru: "к плану за этот месяц" },
    options: [
      { text: { en: "Prepare to close the store before the loss gets larger.", ru: "Готовить закрытие, пока убыток не стал больше." }, risk: 95, quality: 0, peers: 5 },
      { text: { en: "Give the manager 30 more days to recover without intervention.", ru: "Дать менеджеру ещё 30 дней без вмешательства." }, risk: 24, quality: 1, peers: 16 },
      { text: { en: "Benchmark conversion, basket and stock-outs; fix the largest euro gap first.", ru: "Сравнить конверсию, чек и out-of-stock; сначала закрыть самый дорогой разрыв." }, risk: 40, quality: 4, peers: 61 },
      { text: { en: "Launch a blanket 15% promotion to restore traffic quickly.", ru: "Запустить общую скидку 15%, чтобы быстро вернуть трафик." }, risk: 76, quality: 2, peers: 18 }
    ]
  }
];

const profiles = {
  en: [
    { max: 29, title: "The careful guardian", heading: "You protect the downside — and give the business a steady hand.", summary: "You bring discipline, patience and a strong sense of responsibility to operational decisions. You naturally look for reversibility and protect margin before placing a large bet, which helps the team avoid expensive, emotional reactions. Your growth zone is selective speed: identify the smaller decisions that are safe to test quickly, so caution protects value without slowing every opportunity." },
    { max: 44, title: "The evidence-led stabiliser", heading: "You make risky situations measurable and easier to manage.", summary: "You are good at finding the signal beneath the noise and turning uncertainty into controlled steps. That makes you a calming operator: the team gets a clear reason for the action, not just a louder opinion. Your growth zone is deciding what level of evidence is enough — some opportunities need a fast test, not perfect certainty." },
    { max: 59, title: "The balanced operator", heading: "You know when to test, when to protect and when to move.", summary: "You combine commercial instinct with practical restraint. There is enough caution in your decisions to protect margin and enough pace to capture meaningful upside, which makes your style reliable across very different situations. Your growth zone is precision: make the expected value and review point explicit, so other managers can reproduce your best calls." },
    { max: 74, title: "The bold optimiser", heading: "You trade certainty for momentum — and know how to energise a team.", summary: "You are comfortable acting with an incomplete picture when the upside is meaningful. That decisiveness helps opportunities move forward while others are still discussing them, and it gives the team confidence that difficult calls will not remain unanswered. Your growth zone is to make every bold move measurable and reversible: define the money at stake, the early warning signal and the point at which you will adjust course." },
    { max: 100, title: "The fast mover", heading: "You learn in motion and turn ambiguity into action.", summary: "You bring energy, courage and a strong bias toward progress. In retail, that can be a real competitive advantage: issues do not sit unattended and opportunities get a chance to produce value. Your growth zone is adding visible financial guardrails before the decision lands, so your speed compounds learning instead of creating avoidable volatility." }
  ],
  ru: [
    { max: 29, title: "Осторожный хранитель", heading: "Вы защищаете бизнес от потерь и даёте команде чувство устойчивости.", summary: "В ваших решениях заметны дисциплина, терпение и сильное чувство ответственности. Вы естественно ищете обратимые шаги и защищаете маржу до крупной ставки — это помогает команде избегать дорогих эмоциональных реакций. Ваша зона роста — избирательная скорость: находить небольшие решения, которые можно безопасно тестировать быстро, чтобы осторожность сохраняла ценность, но не замедляла каждую возможность." },
    { max: 44, title: "Стабилизатор на данных", heading: "Вы превращаете риск в измеримый и управляемый эксперимент.", summary: "Вы умеете находить сигнал под шумом и переводить неопределённость в контролируемые шаги. Это делает вас сильным стабилизатором: команда получает ясную причину для действия, а не просто самое громкое мнение. Ваша зона роста — заранее определять, какого объёма доказательств достаточно: некоторым возможностям нужен быстрый тест, а не идеальная уверенность." },
    { max: 59, title: "Сбалансированный оператор", heading: "Вы знаете, когда тестировать, когда защищать и когда действовать.", summary: "Вы сочетаете коммерческую интуицию с практичной сдержанностью. В ваших решениях достаточно осторожности для защиты маржи и достаточно скорости для использования сильных возможностей — такой стиль надёжен в очень разных ситуациях. Ваша зона роста — точность: делать ожидаемый эффект и дату проверки явными, чтобы другие менеджеры могли повторять ваши лучшие решения." },
    { max: 74, title: "Смелый оптимизатор", heading: "Вы меняете определённость на скорость и умеете заряжать команду движением.", summary: "Вы готовы действовать при неполной картине, когда видите значимый потенциал. Такая решительность двигает возможности вперёд, пока другие ещё обсуждают их, и даёт команде уверенность, что сложный вопрос не останется без ответа. Ваша зона роста — сделать каждый смелый шаг измеримым и обратимым: заранее зафиксировать деньги под риском, ранний предупреждающий сигнал и момент для корректировки курса." },
    { max: 100, title: "Быстрый игрок", heading: "Вы учитесь в движении и превращаете неопределённость в действие.", summary: "Вы приносите в работу энергию, смелость и сильную ориентацию на результат. В ритейле это может быть настоящим конкурентным преимуществом: проблемы не остаются без внимания, а возможности получают шанс принести ценность. Ваша зона роста — добавлять видимые финансовые ограничения до старта, чтобы скорость накапливала полезный опыт, а не лишнюю волатильность." }
  ]
};

const state = {
  lang: "en",
  current: 0,
  answers: []
};

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
  questionMascot: document.querySelector("#questionMascot"),
  questionMascotImage: document.querySelector("#questionMascotImage"),
  options: document.querySelector("#optionsGrid"),
  peerPanel: document.querySelector("#peerPanel"),
  peerMatch: document.querySelector("#peerMatch"),
  peerBars: document.querySelector("#peerBars")
};

function t(key) {
  return translations[state.lang][key];
}

function local(value) {
  return typeof value === "string" ? value : value[state.lang];
}

function updateStaticCopy() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[state.lang][key]) node.textContent = translations[state.lang][key];
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
  const chosenIndex = state.answers[state.current]?.optionIndex;

  elements.kicker.textContent = `${t("situation")} ${String(state.current + 1).padStart(2, "0")}`;
  elements.progressCurrent.textContent = String(state.current + 1);
  elements.tag.textContent = local(question.tag);
  elements.title.textContent = local(question.title);
  elements.context.textContent = local(question.context);
  elements.signalLabel.textContent = local(question.signalLabel);
  elements.signalValue.textContent = question.signalValue;
  elements.signalDetail.textContent = local(question.signalDetail);
  elements.questionMascot.className = `question-mascot motion-${question.mascotMotion}`;
  elements.questionMascot.setAttribute("aria-label", local(question.mascotAlt));
  elements.questionMascotImage.src = question.mascot;
  elements.peerPanel.hidden = chosenIndex === undefined;

  elements.progressSegments.forEach((segment, index) => {
    segment.classList.toggle("is-complete", index < state.current);
    segment.classList.toggle("is-current", index === state.current);
  });

  elements.options.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    const selected = chosenIndex === index;
    button.type = "button";
    button.className = "option-button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(selected));
    button.dataset.index = String(index);
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${local(option.text)}</span>
      <span class="option-check" aria-hidden="true">${selected ? "✓" : ""}</span>
    `;
    if (chosenIndex !== undefined) {
      button.disabled = true;
      button.classList.toggle("is-selected", selected);
      button.classList.toggle("is-muted", !selected);
    }
    button.addEventListener("click", () => chooseOption(index));
    elements.options.append(button);
  });

  if (chosenIndex !== undefined) renderPeerPanel(chosenIndex);
}

function chooseOption(optionIndex) {
  if (state.answers[state.current]) return;
  const option = questions[state.current].options[optionIndex];
  state.answers[state.current] = {
    optionIndex,
    risk: option.risk,
    quality: option.quality,
    majority: option.peers === Math.max(...questions[state.current].options.map((item) => item.peers))
  };
  renderQuestion();
  requestAnimationFrame(() => {
    elements.peerPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function renderPeerPanel(chosenIndex) {
  const question = questions[state.current];
  const chosen = question.options[chosenIndex];
  elements.peerMatch.textContent = `${chosen.peers}% ${t("peersSame")}`;
  elements.peerBars.innerHTML = "";

  question.options.forEach((option, index) => {
    const row = document.createElement("div");
    row.className = `peer-row${index === chosenIndex ? " is-selected" : ""}`;
    row.innerHTML = `
      <span>${String.fromCharCode(65 + index)}</span>
      <div class="peer-bar"><span style="width: ${option.peers}%"></span></div>
      <strong>${option.peers}%</strong>
    `;
    elements.peerBars.append(row);
  });

  elements.continue.querySelector("[data-i18n]").textContent = state.current === questions.length - 1 ? t("seeResult") : t("next");
}

function continueGame() {
  if (!state.answers[state.current]) return;
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
  const averageRisk = Math.round(state.answers.reduce((sum, answer) => sum + answer.risk, 0) / state.answers.length);
  const quality = Math.round((state.answers.reduce((sum, answer) => sum + answer.quality, 0) / (state.answers.length * 4)) * 100);
  const majority = state.answers.filter((answer) => answer.majority).length;
  const profile = profiles[state.lang].find((item) => averageRisk <= item.max);
  const qualityCopy = quality >= 80 ? t("profileQualityHigh") : quality >= 60 ? t("profileQualityMid") : t("profileQualityLow");

  document.querySelector("#resultTitle").textContent = `${t("resultPrefix")} — ${profile.title}`;
  document.querySelector("#resultSummary").textContent = profile.summary;
  document.querySelector("#profileHeading").textContent = profile.heading;
  document.querySelector("#profileBody").textContent = qualityCopy;
  document.querySelector("#riskScore").textContent = `${averageRisk} / 100`;
  document.querySelector("#qualityScore").textContent = String(quality);
  document.querySelector("#majorityMatches").textContent = `${majority} / 5`;
  document.querySelector("#plotMarker").style.left = `${Math.max(5, Math.min(95, averageRisk))}%`;

  const strengthKeys = [];
  if (quality >= 75) strengthKeys.push("evidence", "margin");
  if (averageRisk >= 55) strengthKeys.push("pace", "action");
  if (averageRisk < 55) strengthKeys.push("downside");
  if (majority >= 3) strengthKeys.push("consistency");
  if (strengthKeys.length < 3) strengthKeys.push("action");

  const uniqueStrengths = [...new Set(strengthKeys)].slice(0, 4);
  document.querySelector("#strengthList").innerHTML = uniqueStrengths
    .map((key) => `<span class="strength-pill">${translations[state.lang].strengths[key]}</span>`)
    .join("");

  const dotGroup = document.querySelector("#decisionDots");
  dotGroup.innerHTML = state.answers.map((answer, index) => {
    const x = 40 + answer.risk * 6.4;
    const y = 126 - answer.quality * 20 + index * 3;
    return `<circle class="decision-dot" cx="${x}" cy="${y}" r="6"><title>${t("situation")} ${index + 1}: ${answer.risk}</title></circle>`;
  }).join("");

  const plot = document.querySelector("#riskPlot svg");
  plot.setAttribute("aria-label", `${t("decisionStyle")}: ${averageRisk} / 100`);
}

function resetGame() {
  state.current = 0;
  state.answers = [];
  elements.peerPanel.hidden = true;
  updateStaticCopy();
  showScreen("intro");
}

function startGame() {
  state.current = 0;
  state.answers = [];
  updateStaticCopy();
  renderQuestion();
  showScreen("game");
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
