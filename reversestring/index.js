// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');
    return str.split('').reverse().join('');
}

function reverse2(str) {
    let reversed = "";
    for (let character of str) {
        reversed = character + reversed;
    }
    debugger;
    return reversed;
}

function reverse3(str) {
    return str.split('').reduce((rev, char) =>  char + rev, ''/* initial value */);
}

console.log(reverse('apple'));
console.log(reverse2('apple'));
console.log(reverse3('apple'));


module.exports = reverse;

/* debugの仕方
1. 処理を止めたいところにdebuggerをかく
2. node inspect ファイル名で、対話型シェルを呼ぶ
3. c(continue)でdebuggerを書いたところまで実行する
4. replを実行し、変数名を実行すると変数の中身が見れる。
loopの場合
1. 一周目を実行
2. replでぬけて、cで２周目以降を実行する
*/
