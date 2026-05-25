const DEFAULT_WORDS = [
  { meaning: "둥지", answer: "nest" },
  { meaning: "세다", answer: "count" },
  { meaning: "만나다", answer: "meet" },
  { meaning: "굴", answer: "burrow" },
  { meaning: "바퀴", answer: "wheel" },
  { meaning: "제빵사", answer: "baker" },
  { meaning: "껍데기", answer: "shell" },
  { meaning: "(동물의)우리", answer: "cage" },
  { meaning: "운전하다", answer: "drive" },
  { meaning: "달팽이", answer: "snail" },
  { meaning: "깡충깡충 뛰다", answer: "hop" },
  { meaning: "간호사", answer: "nurse" },
  { meaning: "벌집", answer: "beehive" },
  { meaning: "기다", answer: "crawl" },
  { meaning: "주사", answer: "shot" },
  { meaning: "동물", answer: "animal" },
  { meaning: "애완동물", answer: "pet" },
  { meaning: "걷다", answer: "walk" },
  { meaning: "다른", answer: "other" },
  { meaning: "달리다", answer: "run" },
  { meaning: "주위에", answer: "around" },
  { meaning: "새", answer: "bird" },
  { meaning: "거북이", answer: "turtle" },
  { meaning: "사람들", answer: "people" },
  { meaning: "토끼", answer: "rabbit" },
  { meaning: "헤엄치다", answer: "swim" },
  { meaning: "빵", answer: "bread" },
  { meaning: "벌", answer: "bee" },
  { meaning: "다리", answer: "leg" },
  { meaning: "운전기사", answer: "driver" },
  { meaning: "이글루", answer: "igloo" },
  { meaning: "돌보다", answer: "take care of" },
  { meaning: "은행", answer: "bank" },
  { meaning: "눈", answer: "snow" },
  { meaning: "필요하다", answer: "need" },
  { meaning: "박물관", answer: "museum" },
  { meaning: "따뜻한", answer: "warm" },
  { meaning: "애완동물용 변기", answer: "litter box" },
  { meaning: "옆에", answer: "next to" },
  { meaning: "진흙", answer: "mud" },
  { meaning: "청소하다", answer: "clean" },
  { meaning: "병원", answer: "hospital" },
  { meaning: "시원한", answer: "cool" },
  { meaning: "약속하다", answer: "promise" },
  { meaning: "공원", answer: "park" },
  { meaning: "특별한", answer: "special" },
  { meaning: "원하다", answer: "want" },
  { meaning: "새로운", answer: "new" },
  { meaning: "집", answer: "home" },
  { meaning: "친구", answer: "friend" },
  { meaning: "이, 이것", answer: "this" },
  { meaning: "살다", answer: "live" },
  { meaning: "놀다", answer: "play" },
  { meaning: "마을", answer: "town" },
  { meaning: "만들다", answer: "make" },
  { meaning: "~와 함께", answer: "with" },
  { meaning: "~안에", answer: "in" },
  { meaning: "~처럼 보이다", answer: "look like" },
  { meaning: "애완동물", answer: "pet" },
  { meaning: "감사하다", answer: "thank" },
  { meaning: "냄새가 나다", answer: "smell" },
  { meaning: "아픈", answer: "sick" },
  { meaning: "뛰다, 점프하다", answer: "jump" },
  { meaning: "찾다", answer: "find" },
  { meaning: "자다", answer: "sleep" },
  { meaning: "바닥", answer: "floor" },
  { meaning: "침실", answer: "bedroom" },
  { meaning: "수의사", answer: "vet" },
  { meaning: "보다", answer: "see" },
  { meaning: "주방", answer: "kitchen" },
  { meaning: "걱정하다", answer: "worry" },
  { meaning: "화난", answer: "angry" },
  { meaning: "신발", answer: "shoe" },
  { meaning: "감기", answer: "cold" },
  { meaning: "쿠키", answer: "cookie" },
  { meaning: "어떤 것", answer: "something" },
  { meaning: "먹다", answer: "eat" },
  { meaning: "살다", answer: "live" },
  { meaning: "나쁜", answer: "bad" },
  { meaning: "많이", answer: "a lot" },
  { meaning: "아래층", answer: "downstairs" },
  { meaning: "보다", answer: "look" },
  { meaning: "코", answer: "nose" },
  { meaning: "놀다", answer: "play" },
  { meaning: "거실", answer: "living room" },
  { meaning: "귀", answer: "ear" },
  { meaning: "밤", answer: "night" },
  { meaning: "여기에", answer: "here" },
  { meaning: "눈", answer: "eye" },
  { meaning: "미안한", answer: "sorry" },
  { meaning: "그리다", answer: "draw" },
  { meaning: "겨울", answer: "winter" },
  { meaning: "하늘", answer: "sky" },
  { meaning: "모으다", answer: "collect" },
  { meaning: "호박", answer: "pumpkin" },
  { meaning: "도토리", answer: "acorn" },
  { meaning: "서 있다", answer: "stand" },
  { meaning: "따뜻한", answer: "warm" },
  { meaning: "허수아비", answer: "scarecrow" },
  { meaning: "장소", answer: "place" },
  { meaning: "그림", answer: "picture" },
  { meaning: "나뭇잎", answer: "leaf" },
  { meaning: "키카 큰", answer: "tall" },
  { meaning: "황금색의", answer: "golden" },
  { meaning: "입고 있다", answer: "wear" },
  { meaning: "갈색의", answer: "brown" },
  { meaning: "옷", answer: "clothes" },
  { meaning: "바람", answer: "wind" },
  { meaning: "들판", answer: "field" },
  { meaning: "춤추다", answer: "dance" },
  { meaning: "바쁜", answer: "busy" },
  { meaning: "가을", answer: "fall" },
  { meaning: "다람쥐", answer: "squirrel" },
  { meaning: "보다", answer: "see" },
  { meaning: "오리", answer: "duck" },
  { meaning: "형형색색의, 다채로운", answer: "colorful" },
  { meaning: "날다", answer: "fly" }
];

const STORAGE_KEY = "word-king-deck-v2";
const SOURCE_EMPTY = "PDF/HWPX/DOCX 파일을 넣어 시작하세요";
const LETTER_RE = /[a-z]/i;

const state = {
  deck: [],
  sourceName: SOURCE_EMPTY,
  roundCards: [],
  currentIndex: 0,
  correctCount: 0,
  wrongCards: [],
  lastWrongCards: [],
  activeMistake: false,
  hintStep: 0,
  audioContext: null,
  locked: false,
  roundMode: "main"
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  bindEvents();
  const saved = loadSavedDeck();
  state.deck = saved?.cards?.length ? saved.cards : [];
  state.sourceName = saved?.sourceName || SOURCE_EMPTY;
  renderSetup();
  setReaction("ready");
});

function bindElements() {
  Object.assign(els, {
    setupView: document.querySelector("#setupView"),
    gameView: document.querySelector("#gameView"),
    resultView: document.querySelector("#resultView"),
    fileInput: document.querySelector("#fileInput"),
    resetDeckBtn: document.querySelector("#resetDeckBtn"),
    deckMeta: document.querySelector("#deckMeta"),
    wordCount: document.querySelector("#wordCount"),
    readyCount: document.querySelector("#readyCount"),
    missingCount: document.querySelector("#missingCount"),
    startBtn: document.querySelector("#startBtn"),
    shuffleToggle: document.querySelector("#shuffleToggle"),
    importStatus: document.querySelector("#importStatus"),
    addRowBtn: document.querySelector("#addRowBtn"),
    wordRows: document.querySelector("#wordRows"),
    roundLabel: document.querySelector("#roundLabel"),
    progressText: document.querySelector("#progressText"),
    progressFill: document.querySelector("#progressFill"),
    exitGameBtn: document.querySelector("#exitGameBtn"),
    promptText: document.querySelector("#promptText"),
    letterSlots: document.querySelector("#letterSlots"),
    answerLength: document.querySelector("#answerLength"),
    hintText: document.querySelector("#hintText"),
    skipBtn: document.querySelector("#skipBtn"),
    reactionArt: document.querySelector("#reactionArt"),
    reactionTitle: document.querySelector("#reactionTitle"),
    reactionText: document.querySelector("#reactionText"),
    resultBadge: document.querySelector("#resultBadge"),
    resultTitle: document.querySelector("#resultTitle"),
    resultScore: document.querySelector("#resultScore"),
    wrongList: document.querySelector("#wrongList"),
    reviewBtn: document.querySelector("#reviewBtn"),
    againBtn: document.querySelector("#againBtn"),
    backToSetupBtn: document.querySelector("#backToSetupBtn")
  });
}

function bindEvents() {
  els.fileInput.addEventListener("change", handleFileImport);
  els.resetDeckBtn.addEventListener("click", () => {
    state.deck = [];
    state.sourceName = SOURCE_EMPTY;
    saveDeck();
    renderSetup("단어장을 비웠어요. 새 PDF나 문서를 넣어 주세요.");
  });
  els.addRowBtn.addEventListener("click", addRow);
  els.startBtn.addEventListener("click", () => startQuiz(getPlayableDeck(), "main"));
  els.exitGameBtn.addEventListener("click", showSetup);
  els.skipBtn.addEventListener("click", showHint);
  els.reviewBtn.addEventListener("click", () => startQuiz(state.lastWrongCards, "review"));
  els.againBtn.addEventListener("click", () => startQuiz(getPlayableDeck(), "main"));
  els.backToSetupBtn.addEventListener("click", showSetup);
}

function cloneCards(cards) {
  return cards.map((card, index) => ({
    id: makeId(index),
    meaning: cleanCell(card.meaning),
    answer: cleanAnswer(card.answer)
  }));
}

function makeId(seed = "") {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `card-${Date.now()}-${seed}-${Math.random().toString(16).slice(2)}`;
}

function renderSetup(message = "") {
  showOnly("setup");
  els.deckMeta.textContent = state.sourceName;
  renderWordRows();
  updateSetupStats();
  const fallbackMessage = state.deck.length
    ? `${state.deck.length}개의 단어를 불러왔어요.`
    : "PDF, HWPX, DOCX, TSV 파일을 넣으면 단어장이 바뀌어요.";
  setStatus(message || fallbackMessage);
}

function renderWordRows() {
  els.wordRows.replaceChildren();
  const fragment = document.createDocumentFragment();

  state.deck.forEach((card, index) => {
    const row = document.createElement("tr");
    if (!card.answer.trim()) row.classList.add("missing-answer");

    const numberCell = document.createElement("td");
    numberCell.textContent = String(index + 1);

    const meaningCell = document.createElement("td");
    const meaningInput = document.createElement("input");
    meaningInput.className = "word-input";
    meaningInput.value = card.meaning;
    meaningInput.setAttribute("aria-label", `${index + 1}번 한국어`);
    meaningInput.addEventListener("input", () => {
      card.meaning = cleanCell(meaningInput.value);
      saveDeckSoon();
    });
    meaningCell.append(meaningInput);

    const answerCell = document.createElement("td");
    const answerInput = document.createElement("input");
    answerInput.className = "word-input";
    answerInput.value = card.answer;
    answerInput.setAttribute("aria-label", `${index + 1}번 영어`);
    answerInput.addEventListener("input", () => {
      card.answer = cleanAnswer(answerInput.value);
      row.classList.toggle("missing-answer", !card.answer.trim());
      updateSetupStats();
      saveDeckSoon();
    });
    answerCell.append(answerInput);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-row";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("aria-label", `${index + 1}번 삭제`);
    deleteButton.addEventListener("click", () => {
      state.deck.splice(index, 1);
      saveDeck();
      renderSetup("단어를 하나 뺐어요.");
    });
    deleteCell.append(deleteButton);

    row.append(numberCell, meaningCell, answerCell, deleteCell);
    fragment.append(row);
  });

  els.wordRows.append(fragment);
}

let saveTimer = null;
function saveDeckSoon() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveDeck();
    updateSetupStats();
  }, 250);
}

function updateSetupStats() {
  const total = state.deck.length;
  const ready = getPlayableDeck().length;
  const missing = total - ready;
  els.wordCount.textContent = String(total);
  els.readyCount.textContent = String(ready);
  els.missingCount.textContent = String(missing);
  els.startBtn.disabled = ready === 0;
}

function addRow() {
  state.deck.push({ id: makeId("new"), meaning: "", answer: "" });
  saveDeck();
  renderSetup("새 단어 줄을 만들었어요.");
  const lastRow = els.wordRows.querySelector("tr:last-child input");
  lastRow?.focus();
}

function getPlayableDeck() {
  return state.deck.filter((card) => card.meaning.trim() && card.answer.trim());
}

function startQuiz(cards, mode) {
  const playable = cloneCards(cards);
  if (!playable.length) {
    setStatus("영어 정답이 있는 단어가 필요해요.");
    showSetup();
    return;
  }

  state.roundMode = mode;
  state.roundCards = els.shuffleToggle.checked ? shuffle(playable) : playable;
  state.currentIndex = 0;
  state.correctCount = 0;
  state.wrongCards = [];
  state.lastWrongCards = [];
  showOnly("game");
  els.roundLabel.textContent = mode === "review" ? "오답 퀴즈" : "본 퀴즈";
  renderCurrentCard();
}

function renderCurrentCard() {
  if (state.currentIndex >= state.roundCards.length) {
    showResults();
    return;
  }

  const card = state.roundCards[state.currentIndex];
  state.activeMistake = false;
  state.hintStep = 0;
  state.locked = false;
  els.promptText.textContent = card.meaning;
  els.letterSlots.replaceChildren();
  const chars = Array.from(card.answer.toLowerCase());
  const letterCount = chars.filter((char) => LETTER_RE.test(char)).length;
  els.answerLength.textContent = `${letterCount}글자`;
  els.hintText.textContent = "";
  els.hintText.classList.remove("visible");

  chars.forEach((char) => {
    if (LETTER_RE.test(char)) {
      const input = document.createElement("input");
      input.className = "slot-input";
      input.maxLength = 1;
      input.inputMode = "latin";
      input.autocomplete = "off";
      input.dataset.expected = char;
      input.setAttribute("aria-label", "영어 한 글자");
      input.addEventListener("input", handleSlotInput);
      input.addEventListener("keydown", handleSlotKeydown);
      input.addEventListener("paste", handleSlotPaste);
      els.letterSlots.append(input);
      return;
    }

    const separator = document.createElement("span");
    separator.className = "separator-slot";
    separator.textContent = char === " " ? "·" : char;
    els.letterSlots.append(separator);
  });

  updateProgress();
  setReaction("ready");
  requestAnimationFrame(() => firstEmptyInput()?.focus());
}

function handleSlotInput(event) {
  if (state.locked) return;
  const input = event.currentTarget;
  const typed = input.value.slice(-1).toLowerCase();
  input.value = typed;

  if (!typed) return;
  if (typed === input.dataset.expected) {
    input.classList.add("filled");
    moveToNextInput(input);
    if (isCurrentAnswerComplete()) completeCard();
    return;
  }

  registerMiss(input);
}

function handleSlotKeydown(event) {
  const input = event.currentTarget;
  if (event.key === "Backspace" && !input.value) {
    previousInput(input)?.focus();
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    previousInput(input)?.focus();
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    nextInput(input)?.focus();
  }
}

function handleSlotPaste(event) {
  event.preventDefault();
  if (state.locked) return;
  const text = event.clipboardData.getData("text").toLowerCase().replace(/[^a-z]/g, "");
  if (!text) return;
  const inputs = slotInputs();
  let start = inputs.indexOf(event.currentTarget);

  for (const char of text) {
    const input = inputs[start];
    if (!input) break;
    input.value = char;
    if (char !== input.dataset.expected) {
      registerMiss(input);
      return;
    }
    input.classList.add("filled");
    start += 1;
  }

  if (isCurrentAnswerComplete()) completeCard();
  else inputs[start]?.focus();
}

function registerMiss(input) {
  state.activeMistake = true;
  input.value = "";
  input.classList.remove("filled");
  input.classList.add("shake");
  setReaction("miss");
  window.setTimeout(() => input.classList.remove("shake"), 200);
}

function completeCard() {
  if (state.locked) return;
  state.locked = true;
  const card = state.roundCards[state.currentIndex];

  if (state.activeMistake) {
    state.wrongCards.push(card);
  } else {
    state.correctCount += 1;
  }

  setReaction("success");
  playSuccessSound();
  window.setTimeout(() => {
    state.currentIndex += 1;
    renderCurrentCard();
  }, 780);
}

function showHint() {
  if (state.locked) return;
  const card = state.roundCards[state.currentIndex];
  const hints = buildHints(card.answer);
  const hint = hints[Math.min(state.hintStep, hints.length - 1)];
  state.hintStep += 1;
  els.hintText.textContent = hint;
  els.hintText.classList.add("visible");
  setReaction("ready", "힌트를 보고 천천히 이어가요.");
  firstEmptyInput()?.focus();
}

function buildHints(answer) {
  const letters = answer.toLowerCase().replace(/[^a-z]/g, "").split("");
  const words = answer.trim().split(/\s+/).filter(Boolean);
  const hints = [];

  if (letters[0]) hints.push(`첫 글자: ${letters[0]}`);
  if (letters.length > 1) hints.push(`마지막 글자: ${letters[letters.length - 1]}`);
  if (words.length > 1) hints.push(`단어 수: ${words.length}개`);
  hints.push("띄어쓰기 표시는 · 로 보여요.");
  return hints;
}

function isCurrentAnswerComplete() {
  return slotInputs().every((input) => input.value.toLowerCase() === input.dataset.expected);
}

function slotInputs() {
  return Array.from(els.letterSlots.querySelectorAll(".slot-input"));
}

function firstEmptyInput() {
  return slotInputs().find((input) => !input.value);
}

function moveToNextInput(input) {
  nextInput(input)?.focus();
}

function nextInput(input) {
  const inputs = slotInputs();
  return inputs[inputs.indexOf(input) + 1] || null;
}

function previousInput(input) {
  const inputs = slotInputs();
  return inputs[inputs.indexOf(input) - 1] || null;
}

function updateProgress() {
  const current = Math.min(state.currentIndex + 1, state.roundCards.length);
  const total = state.roundCards.length;
  els.progressText.textContent = `${current} / ${total}`;
  els.progressFill.style.width = `${(state.currentIndex / total) * 100}%`;
}

function showResults() {
  const total = state.roundCards.length;
  const wrongTotal = state.wrongCards.length;
  const correct = state.correctCount;
  state.lastWrongCards = cloneCards(state.wrongCards);
  showOnly("result");
  els.resultBadge.textContent = state.roundMode === "review" ? "오답 결과" : "결과";
  els.resultTitle.textContent = wrongTotal ? "조금 더 다듬으면 돼요" : "전부 맞췄어요";
  els.resultScore.textContent = `총 ${total}개 중 ${correct}개 정답`;
  els.reviewBtn.hidden = wrongTotal === 0;
  renderWrongList(state.lastWrongCards);
}

function renderWrongList(cards) {
  els.wrongList.replaceChildren();
  if (!cards.length) {
    const done = document.createElement("span");
    done.className = "wrong-chip";
    done.textContent = "오답 없음";
    els.wrongList.append(done);
    return;
  }

  cards.forEach((card) => {
    const chip = document.createElement("span");
    chip.className = "wrong-chip";
    chip.textContent = `${card.meaning} → ${card.answer}`;
    els.wrongList.append(chip);
  });
}

function showSetup() {
  renderSetup("");
}

function showOnly(view) {
  els.setupView.classList.toggle("hidden", view !== "setup");
  els.gameView.classList.toggle("hidden", view !== "game");
  els.resultView.classList.toggle("hidden", view !== "result");
}

function setReaction(type, overrideText = "") {
  const successTexts = ["좋아요, 바로 다음 문제!", "깔끔하게 맞췄어요.", "정답이에요."];
  const missTexts = ["한 글자만 다시 볼까요.", "조금 아쉬워요.", "천천히 다시 입력해요."];

  if (type === "success") {
    els.reactionArt.innerHTML = successSvg();
    els.reactionTitle.textContent = "정답";
    els.reactionText.textContent = overrideText || pick(successTexts);
    return;
  }

  if (type === "miss") {
    els.reactionArt.innerHTML = missSvg();
    els.reactionTitle.textContent = "아쉬움";
    els.reactionText.textContent = overrideText || pick(missTexts);
    return;
  }

  els.reactionArt.innerHTML = readySvg();
  els.reactionTitle.textContent = "준비됐어요";
  els.reactionText.textContent = overrideText || "한 글자씩 입력하면 자동으로 넘어가요.";
}

function playSuccessSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    const context = state.audioContext || new AudioContextClass();
    state.audioContext = context;
    if (context.state === "suspended") context.resume();

    const now = context.currentTime;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
    gain.connect(context.destination);

    [660, 880].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, now + index * 0.08);
      oscillator.connect(gain);
      oscillator.start(now + index * 0.08);
      oscillator.stop(now + 0.24 + index * 0.02);
    });
  } catch {
    // Sound is a bonus; the quiz should keep going even if audio is blocked.
  }
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function successSvg() {
  return `
    <svg viewBox="0 0 220 180" role="img" aria-label="정답 이미지">
      <path d="M36 141c28 20 116 20 148 0 12-8 14-23 4-33-26-27-126-26-154 0-10 10-9 25 2 33z" fill="#dff4ee"/>
      <circle cx="110" cy="82" r="46" fill="#f3c969"/>
      <circle cx="94" cy="76" r="6" fill="#20303c"/>
      <circle cx="126" cy="76" r="6" fill="#20303c"/>
      <path d="M91 98c10 14 29 14 38 0" fill="none" stroke="#20303c" stroke-width="7" stroke-linecap="round"/>
      <path d="M42 54l8 15 17 3-12 12 3 17-16-8-15 8 3-17-13-12 18-3z" fill="#e76f51"/>
      <path d="M166 33l6 12 13 2-10 9 3 13-12-6-12 6 2-13-9-9 13-2z" fill="#2a9d8f"/>
    </svg>
  `;
}

function missSvg() {
  return `
    <svg viewBox="0 0 220 180" role="img" aria-label="오답 이미지">
      <path d="M37 142c31 18 116 18 146 0 13-8 14-23 3-33-28-25-124-25-152 0-11 10-10 25 3 33z" fill="#e8f1f6"/>
      <path d="M111 35c25 30 43 52 43 77 0 26-19 43-43 43s-43-17-43-43c0-25 18-47 43-77z" fill="#8bbbd0"/>
      <circle cx="96" cy="106" r="5" fill="#20303c"/>
      <circle cx="126" cy="106" r="5" fill="#20303c"/>
      <path d="M96 130c8-9 23-9 31 0" fill="none" stroke="#20303c" stroke-width="6" stroke-linecap="round"/>
      <path d="M55 56h28M69 42v28" stroke="#e76f51" stroke-width="8" stroke-linecap="round"/>
      <path d="M164 50h20M174 40v20" stroke="#f3c969" stroke-width="7" stroke-linecap="round"/>
    </svg>
  `;
}

function readySvg() {
  return `
    <svg viewBox="0 0 220 180" role="img" aria-label="준비 이미지">
      <rect x="46" y="50" width="128" height="90" rx="8" fill="#fff7e0" stroke="#d9e1e3" stroke-width="4"/>
      <path d="M70 79h80M70 107h66" stroke="#457b9d" stroke-width="9" stroke-linecap="round"/>
      <path d="M151 126l29-29 12 12-29 29-17 5z" fill="#e76f51"/>
      <path d="M151 126l12 12" stroke="#20303c" stroke-width="4" stroke-linecap="round"/>
      <circle cx="66" cy="33" r="12" fill="#2a9d8f"/>
      <circle cx="151" cy="33" r="8" fill="#f3c969"/>
    </svg>
  `;
}

function shuffle(cards) {
  const next = [...cards];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [next[index], next[target]] = [next[target], next[index]];
  }
  return next;
}

function setStatus(message) {
  els.importStatus.textContent = message;
}

function saveDeck() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      sourceName: state.sourceName,
      cards: state.deck
    }));
  } catch {
    setStatus("브라우저 저장 공간을 쓸 수 없지만, 현재 화면에서는 계속 사용할 수 있어요.");
  }
}

function loadSavedDeck() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!Array.isArray(saved.cards)) return null;
    return {
      sourceName: saved.sourceName || SOURCE_EMPTY,
      cards: cloneCards(saved.cards)
    };
  } catch {
    return null;
  }
}

async function handleFileImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  setStatus(`${file.name} 읽는 중...`);
  try {
    const cards = await parseVocabularyFile(file);
    if (!cards.length) throw new Error("단어 표를 찾지 못했어요.");
    state.deck = cards;
    state.sourceName = file.name;
    saveDeck();
    const ready = cards.filter((card) => card.answer).length;
    const missing = cards.length - ready;
    renderSetup(`${cards.length}개를 불러왔어요. 영어가 빈 항목은 ${missing}개예요.`);
  } catch (error) {
    setStatus(error.message || "파일을 읽지 못했어요.");
  } finally {
    event.target.value = "";
  }
}

async function parseVocabularyFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();
  const buffer = await file.arrayBuffer();

  if (extension === "hwp") {
    throw new Error("HWP 파일은 한글에서 HWPX로 다시 저장한 뒤 넣어 주세요.");
  }

  if (extension === "pdf") {
    return parsePdf(buffer, file.name);
  }

  if (extension === "hwpx" || extension === "docx") {
    const entries = await readZipEntries(buffer);
    return extension === "hwpx"
      ? parseHwpx(entries, file.name)
      : parseDocx(entries, file.name);
  }

  if (extension === "txt" || extension === "csv" || extension === "tsv") {
    const text = new TextDecoder("utf-8").decode(buffer);
    return parsePlainText(text, file.name);
  }

  throw new Error("지원 형식은 PDF, HWPX, DOCX, TXT, CSV, TSV예요.");
}

async function parsePdf(buffer, sourceName) {
  const streams = await readPdfStreams(buffer);
  const unicodeMap = buildPdfUnicodeMap(streams.map((stream) => stream.text));
  const pages = streams
    .map((stream) => extractPdfTextItems(stream.text, unicodeMap))
    .filter((items) => items.length);
  const cards = pdfItemsToCards(pages);
  if (cards.length) return cards;

  const chunks = pages.flat().map((item) => item.text);

  const fallbackCards = parsePlainText(chunks.join("\n"), sourceName)
    .filter((card) => looksLikeEnglishAnswer(card.answer));
  if (fallbackCards.length) return fallbackCards;

  throw new Error("PDF에서 영어 정답이 있는 단어쌍을 찾지 못했어요. 스캔 PDF라면 HWPX나 DOCX로 넣어 주세요.");
}

async function readPdfStreams(buffer) {
  const bytes = new Uint8Array(buffer);
  const decoder = new TextDecoder("latin1");
  const streams = [];
  let offset = 0;

  while (offset < bytes.length) {
    const streamMarker = indexOfAscii(bytes, "stream", offset);
    if (streamMarker < 0) break;

    let start = streamMarker + "stream".length;
    if (bytes[start] === 13 && bytes[start + 1] === 10) start += 2;
    else if (bytes[start] === 10 || bytes[start] === 13) start += 1;

    const end = indexOfAscii(bytes, "endstream", start);
    if (end < 0) break;

    let raw = bytes.slice(start, end);
    if (raw[raw.length - 2] === 13 && raw[raw.length - 1] === 10) raw = raw.slice(0, -2);
    else if (raw[raw.length - 1] === 10 || raw[raw.length - 1] === 13) raw = raw.slice(0, -1);

    let data = raw;
    try {
      data = await inflatePdfData(raw);
    } catch {
      data = raw;
    }

    streams.push({ text: decoder.decode(data) });
    offset = end + "endstream".length;
  }

  return streams;
}

function indexOfAscii(bytes, needle, start = 0) {
  const pattern = Array.from(needle, (char) => char.charCodeAt(0));
  for (let index = start; index <= bytes.length - pattern.length; index += 1) {
    let matched = true;
    for (let patternIndex = 0; patternIndex < pattern.length; patternIndex += 1) {
      if (bytes[index + patternIndex] !== pattern[patternIndex]) {
        matched = false;
        break;
      }
    }
    if (matched) return index;
  }
  return -1;
}

async function inflatePdfData(bytes) {
  if (!("DecompressionStream" in window)) {
    throw new Error("이 브라우저에서는 PDF 압축 해제를 지원하지 않아요. 최신 Chrome이나 Edge로 열어 주세요.");
  }

  try {
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate"));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch {
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  }
}

function buildPdfUnicodeMap(streamTexts) {
  const unicodeMap = new Map();

  streamTexts.forEach((text) => {
    for (const block of text.matchAll(/beginbfchar([\s\S]*?)endbfchar/g)) {
      for (const match of block[1].matchAll(/<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/g)) {
        unicodeMap.set(match[1].toLowerCase(), decodePdfUnicodeHex(match[2]));
      }
    }

    for (const block of text.matchAll(/beginbfrange([\s\S]*?)endbfrange/g)) {
      for (const match of block[1].matchAll(/<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>\s*\[([\s\S]*?)\]/g)) {
        const start = parseInt(match[1], 16);
        const targets = Array.from(match[3].matchAll(/<([0-9a-fA-F]+)>/g), (target) => target[1]);
        targets.forEach((target, index) => {
          unicodeMap.set((start + index).toString(16).padStart(match[1].length, "0"), decodePdfUnicodeHex(target));
        });
      }

      for (const match of block[1].matchAll(/<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/g)) {
        const start = parseInt(match[1], 16);
        const end = parseInt(match[2], 16);
        const targetStart = parseInt(match[3], 16);
        for (let code = start; code <= end; code += 1) {
          const key = code.toString(16).padStart(match[1].length, "0");
          unicodeMap.set(key, String.fromCharCode(targetStart + code - start));
        }
      }
    }
  });

  return unicodeMap;
}

function extractPdfTextItems(text, unicodeMap) {
  const items = [];

  for (const block of text.matchAll(/BT([\s\S]*?)ET/g)) {
    const content = block[1];
    const matrix = content.match(/(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s+Tm/);
    const x = matrix ? Number(matrix[5]) : 0;
    const y = matrix ? Number(matrix[6]) : 0;
    const textCommandPattern = /\[([\s\S]*?)\]\s*TJ|<([0-9a-fA-F]+)>\s*Tj|\(([^()]*)\)\s*Tj/g;
    for (const match of content.matchAll(textCommandPattern)) {
      const chunk = match[1]
        ? decodePdfTextArray(match[1], unicodeMap)
        : match[2]
          ? decodePdfHexText(match[2], unicodeMap)
          : decodePdfLiteralString(match[3] || "");
      if (cleanCell(chunk)) items.push({ text: chunk, x, y });
    }
  }

  return items;
}

function decodePdfTextArray(value, unicodeMap) {
  const pieces = [];
  for (const match of value.matchAll(/<([0-9a-fA-F]+)>|\(([^()]*)\)/g)) {
    pieces.push(match[1] ? decodePdfHexText(match[1], unicodeMap) : decodePdfLiteralString(match[2] || ""));
  }
  return pieces.join("");
}

function decodePdfHexText(hex, unicodeMap) {
  let text = "";

  if (unicodeMap.size && hex.length % 4 === 0) {
    for (let index = 0; index < hex.length; index += 4) {
      text += unicodeMap.get(hex.slice(index, index + 4).toLowerCase()) || "";
    }
    if (text) return text;
  }

  if (hex.length % 4 === 0) return decodePdfUnicodeHex(hex);

  for (let index = 0; index < hex.length; index += 2) {
    text += String.fromCharCode(parseInt(hex.slice(index, index + 2), 16));
  }
  return text;
}

function decodePdfUnicodeHex(hex) {
  let text = "";
  for (let index = 0; index + 3 < hex.length; index += 4) {
    const code = parseInt(hex.slice(index, index + 4), 16);
    if (Number.isFinite(code) && code !== 0xffff) text += String.fromCharCode(code);
  }
  return text;
}

function decodePdfLiteralString(value) {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\\(/g, "(")
    .replace(/\\\)/g, ")")
    .replace(/\\\\/g, "\\");
}

function pdfItemsToCards(pages) {
  const cards = [];

  pages.forEach((items) => {
    const columns = inferPdfColumns(items);
    if (columns.length < 2) return;

    groupPdfRows(items).forEach((row) => {
      const cells = Array.from({ length: columns.length }, () => []);
      row
        .slice()
        .sort((a, b) => a.x - b.x)
        .forEach((item) => {
          const columnIndex = getPdfColumnIndex(item.x, columns);
          cells[columnIndex].push(item);
        });
      const cellTexts = cells.map(joinPdfCell);

      for (let index = 0; index < cellTexts.length - 1; index += 2) {
        const meaning = cleanMeaning(cellTexts[index]);
        const answer = cleanAnswer(cellTexts[index + 1]);
        if (!meaning || isHeaderCell(meaning) || isHeaderCell(answer) || !looksLikeEnglishAnswer(answer)) continue;
        cards.push({ id: makeId(cards.length), meaning, answer });
      }
    });
  });

  return cards;
}

function joinPdfCell(items) {
  return items
    .slice()
    .sort((a, b) => a.y - b.y || a.x - b.x)
    .map((item) => item.text)
    .join("");
}

function groupPdfRows(items) {
  const rows = [];
  const tolerance = 90;
  const sorted = items.slice().sort((a, b) => a.y - b.y || a.x - b.x);

  sorted.forEach((item) => {
    let row = rows.find((candidate) => Math.abs(candidate.y - item.y) <= tolerance);
    if (!row) {
      row = { y: item.y, items: [] };
      rows.push(row);
    }
    row.items.push(item);
    row.y = item.y;
  });

  return rows.map((row) => row.items);
}

function inferPdfColumns(items) {
  const headerPositions = items
    .filter((item) => isHeaderCell(cleanCell(item.text)))
    .map((item) => item.x)
    .sort((a, b) => a - b);
  const positions = [];

  headerPositions.forEach((position) => {
    if (!positions.some((existing) => Math.abs(existing - position) < 40)) {
      positions.push(position);
    }
  });

  return positions.length >= 2 ? positions : [462, 1267, 1948, 2753, 3434, 4239];
}

function getPdfColumnIndex(x, columns) {
  for (let index = 0; index < columns.length - 1; index += 1) {
    const boundary = (columns[index] + columns[index + 1]) / 2;
    if (x < boundary) return index;
  }
  return columns.length - 1;
}

function looksLikeEnglishAnswer(value) {
  return /[a-z]/i.test(value) && !/[가-힣]/.test(value);
}

function parseHwpx(entries, sourceName) {
  const preview = getEntryText(entries, "preview/prvtext.txt");
  if (preview) {
    const cards = parsePlainText(preview, sourceName);
    if (cards.length) return cards;
  }

  const rows = [];
  for (const [name, entry] of entries) {
    if (!name.startsWith("contents/section") || !name.endsWith(".xml")) continue;
    rows.push(...extractXmlTableRows(entry.text, /<hp:tr[\s\S]*?<\/hp:tr>/g, /<hp:tc[\s\S]*?<\/hp:tc>/g, /<hp:t[^>]*>([\s\S]*?)<\/hp:t>/g));
  }
  return rowsToCards(rows, sourceName);
}

function parseDocx(entries, sourceName) {
  const documentXml = getEntryText(entries, "word/document.xml");
  if (!documentXml) return [];
  const rows = extractXmlTableRows(documentXml, /<w:tr[\s\S]*?<\/w:tr>/g, /<w:tc[\s\S]*?<\/w:tc>/g, /<w:t[^>]*>([\s\S]*?)<\/w:t>/g);
  if (rows.length) return rowsToCards(rows, sourceName);
  const text = collectXmlText(documentXml, /<w:t[^>]*>([\s\S]*?)<\/w:t>/g);
  return parsePlainText(text, sourceName);
}

function getEntryText(entries, name) {
  return entries.get(name.toLowerCase())?.text || "";
}

function parsePlainText(text, sourceName) {
  if (/<[^<>]*>/.test(text)) {
    const rows = text
      .split(/\r?\n/)
      .map((line) => Array.from(line.matchAll(/<([^<>]*)>/g), (match) => cleanCell(match[1])))
      .filter((row) => row.length);
    return rowsToCards(rows, sourceName);
  }

  const rows = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map(splitPlainLine);
  return rowsToCards(rows, sourceName);
}

function splitPlainLine(line) {
  if (line.includes("\t")) return line.split("\t").map(cleanCell);
  if (line.includes("|")) return line.split("|").map(cleanCell);
  if (line.includes(",")) return splitCsvLine(line).map(cleanCell);
  return line.split(/\s{2,}|\s+-\s+|\s+–\s+|\s+—\s+/).map(cleanCell);
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;

  for (const char of line) {
    if (char === "\"") {
      quoted = !quoted;
      continue;
    }
    if (char === "," && !quoted) {
      cells.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current);
  return cells;
}

function rowsToCards(rows) {
  const cards = [];

  rows.forEach((row) => {
    const cells = row.map(cleanCell);
    if (!cells.some(Boolean)) return;

    for (let index = 0; index < cells.length; index += 2) {
      const meaning = cells[index] || "";
      const answerFromFile = cells[index + 1] || "";
      if (!meaning || isHeaderCell(meaning)) continue;
      cards.push({
        id: makeId(cards.length),
        meaning,
        answer: cleanAnswer(answerFromFile)
      });
    }
  });

  return cards;
}

function isHeaderCell(value) {
  const normalized = value.toLowerCase().trim();
  return ["meaning", "word", "뜻", "단어", "한국어", "영어", "korean", "english"].includes(normalized);
}

function extractXmlTableRows(xml, rowPattern, cellPattern, textPattern) {
  const rows = [];
  let rowMatch;
  while ((rowMatch = rowPattern.exec(xml))) {
    const cells = [];
    const rowXml = rowMatch[0];
    let cellMatch;
    const localCellPattern = new RegExp(cellPattern.source, cellPattern.flags);
    while ((cellMatch = localCellPattern.exec(rowXml))) {
      cells.push(collectXmlText(cellMatch[0], textPattern));
    }
    if (cells.length) rows.push(cells);
  }
  return rows;
}

function collectXmlText(xml, pattern) {
  const pieces = [];
  const localPattern = new RegExp(pattern.source, pattern.flags);
  let match;
  while ((match = localPattern.exec(xml))) {
    pieces.push(decodeXml(match[1]));
  }
  return cleanCell(pieces.join(""));
}

function decodeXml(value) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<x>${value}</x>`, "application/xml");
  return doc.documentElement.textContent || "";
}

async function readZipEntries(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  const eocdOffset = findEndOfCentralDirectory(view);
  if (eocdOffset < 0) throw new Error("ZIP 기반 문서만 읽을 수 있어요. HWP는 HWPX로 저장해 주세요.");

  const totalEntries = view.getUint16(eocdOffset + 10, true);
  const centralOffset = view.getUint32(eocdOffset + 16, true);
  const decoder = new TextDecoder("utf-8");
  const entries = new Map();
  let offset = centralOffset;

  for (let index = 0; index < totalEntries; index += 1) {
    if (view.getUint32(offset, true) !== 0x02014b50) break;

    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const fileNameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localHeaderOffset = view.getUint32(offset + 42, true);
    const nameStart = offset + 46;
    const name = decoder.decode(bytes.slice(nameStart, nameStart + fileNameLength));

    const localNameLength = view.getUint16(localHeaderOffset + 26, true);
    const localExtraLength = view.getUint16(localHeaderOffset + 28, true);
    const dataStart = localHeaderOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataStart, dataStart + compressedSize);
    const data = method === 0 ? compressed : await inflateZipData(compressed, method);

    entries.set(name.toLowerCase(), {
      name,
      text: decoder.decode(data)
    });

    offset = nameStart + fileNameLength + extraLength + commentLength;
  }

  return entries;
}

function findEndOfCentralDirectory(view) {
  const minOffset = Math.max(0, view.byteLength - 65557);
  for (let offset = view.byteLength - 22; offset >= minOffset; offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) return offset;
  }
  return -1;
}

async function inflateZipData(bytes, method) {
  if (method !== 8) throw new Error("지원하지 않는 ZIP 압축 방식이에요.");
  if (!("DecompressionStream" in window)) {
    throw new Error("이 브라우저에서는 문서 압축 해제를 지원하지 않아요. 최신 Chrome이나 Edge로 열어 주세요.");
  }

  try {
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch {
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate"));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  }
}

function cleanCell(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function cleanMeaning(value) {
  return cleanCell(value).replace(/,([^\s])/g, ", $1");
}

function cleanAnswer(value) {
  return cleanCell(value).replace(/[“”]/g, "\"").toLowerCase();
}
