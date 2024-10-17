// ひらがなの配列
const hiragana = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り",
    "る", "れ", "ろ", "わ", "ん"];

// ランダムなひらがなを選択する関数
function getRandomHiragana() {
const randomIndex = Math.floor(Math.random() * hiragana.length);
return hiragana[randomIndex];
}

// 生成ボタンを押すとランダムな文字が表示される
function generateRandomLetters() {
const firstLetter = getRandomHiragana();
const lastLetter = getRandomHiragana();

// 最初の文字
document.getElementById("firstLetter").textContent = `「${firstLetter}」から始まり`;
// 最後の文字
document.getElementById("lastLetter").textContent = `「${lastLetter}」で終わる`;
}