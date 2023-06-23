//1. 3つ以上の値を用意して変数に代入してください。その1番目と3番目をコンソールで表示してください。
var fruits = ["リンゴ", "バナナ", "イチゴ"];
  console.log(fruits[0]);
  console.log(fruits[2]);


//2 key、value、プロパティーについて説明してください。

//key:オブジェクトを作成する際に、例えばですが「name: "太郎",」を書いた場合、
//この「name」にあたる部分のことをkeyと言う。

//value:オブジェクトを作成する際に、例えば「name: "太郎",」を書いた場合、
//この「太郎」にあたる部分のことをvalueと言う。

//プロパティー：上記のkeyとvalueを合わせた名称をプロパティーと言う。
//例えば 「ヒト」というオブジェクトがあった場合、
//その「ヒト」の状態を知るために「名前」「性別」「年齢」といった情報をプロパティーという。



//3. 3つほどプロパティを用意したオブジェクトを用意してコンソールで表示してください。
var teacher = {
    name: "稲葉",
    age: 35,
    subject: "数学",
  }
  console.log(teacher);


  
//4. オブジェクトを3つ用意してそれを配列として代入してください。配列の0番目と3番目を表示させ、
//その中のkeyを指定してコンソールに表示させてください。
var teachers = [
  {
  name: "太郎",
  age: 25,
  subject: "国語",
},
{
  name: "浩司",
  age: 30,
  subject: "数学",
},
{
  name: "花子",
  age: 26,
  subject: "社会",
},
{
  name: "浩志",
  age: 35,
  subject: "科学",
}
]
console.log(teachers[0]);
console.log(teachers[3]);
console.log(teachers[0].age);
console.log(teachers[3].subject);
