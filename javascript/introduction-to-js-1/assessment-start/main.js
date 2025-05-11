const customName = document.getElementById('customname');
// HTMLドキュメントからrandomize要素(buttonID)を取得
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// ランダムに値を取得する関数
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// 変数に文字列を格納
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

// 変数に配列を格納
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertY = ["the soup kitchen", "Disneyland", "the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

// randomize変数に対するクリックイベントが発生したら、result関数を実行
randomize.addEventListener('click', result);

// result関数の作成。customNameに対する条件分岐
function result() {
    // 物語の初期値を格納（値を変更して使用するため）
    let newStory = storyText;

    // 配列からランダムに値を取得（3＊3の組み合わせで物語を作成する）
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // 物語の中のプレースホルダを置き換える
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll('/:insertz:', zItem);

    // 名前が空欄ではなかったら名前を置き換える
    if(customName.value !== '') {
    const name = customName.value;

    // 名前が入力されていたらBobを置き換える
    newStory = newStory.replace('Bob', name);

    }
    // UKにチェックが入っていたら気温を摂氏に変換
    if(document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature =  Math.round(94);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}