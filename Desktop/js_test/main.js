// const signal = "blue";

// if (signal === "blue") {
//   console.log("進め");
// } else if (signal === "yellow") {
//   console.log("いったん止まれ");
// } else {
//   console.log("止まれ");
// }

// const speed = 60;

// if (signal == "blue") {
//   if ((speed) => 60) {
//     console.log("スピードおとせ");
//   }
// }

// const score = 80;
// const comment = score > 80 ? "good" : "bad";
// console.log(comment);

// const numbers = [1, 2, 3];
// for (number of numbers) {
//   console.log(number);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// // }
// const data = 3;

// switch (data) {
//   case 1:
//     console.log("1です ");
//     break;
//   case 2:
//     console.log("2です");
//     break;
//   default:
//     console.log("その他");
//     break;
// }

// if (data === 1) {
//   console.log("1");
// }
// if (data === 2) {
//   console.log("2");
// }
// if (data !== 1 && data !== 2) {
//   console.log("その他");
// }

// ユーザー定義関数
//インプット引数なし　アウトプットなし
function answer() {
  console.log("yes");
}

answer();

//インプット引数あり　アウトプットなし
// インプット（引数）　と処理は合わせる。
function getComment(string) {
  console.log(string);
}
getComment("nono");

// もしくは
const dog = "おこげ";
const dog_2 = "ルー";

function getComment(string) {
  console.log(string);
}
getComment(dog_2);

//インプット引数なし　アウトプットあり
function numberOfComment() {
  return 5;
}

// numberOfComment();
// これだけだと、表示の命令がない。値は帰ってきている。
// console.log(numberOfComment();
// もしくは
const NumberOfComment = numberOfComment();
console.log(NumberOfComment);

//インプット引数2つ　アウトプットあり
//戻り値も、処理と合わせる。
function sum(int1, int2) {
  let int3 = int1 + int2;
  return int3;
}

const myMap = new Map();

myMap.set("id", 3);
myMap.set("name", "本田");
console.log(myMap);
console.log(myMap.get("name"));

// for of文とも相性が良い。下記
// myMap.values や　myMap.keysで取得できる。

const valueList = myMap.keys();
for (value of valueList) {
  console.log(value);
}

// const fruits = new.array
const fruits = ["イチゴ", "バナナ"];

console.log(fruits);

fruits.push("みかん");

console.log(fruits);

fruits.forEach(function (input) {
  console.log(input);
});

// const getItem = () => {
//   console.log("アロー");
// };

const getItem = () => console.log("アロー");
getItem();

fruits.forEach((fruit) => console.log(fruit));

const scores = [20, 30, 40];
const newScores = scores.filter((value) => value >= 30);
console.log(newScores);

const members = ["本田", "香川", "長友"];
const member = members.find((value) => value === "長友");
console.log(member);

const userList = [10, 20, 30];
const userIdList = userList.map((value) => `${value}点です`);
console.table(userIdList);

// const test = new Object();
const test = {
  test1: 10,
  test2: 20,
  test3: 30,
};

console.log(test);

// console.log(test.values);ではダメ
console.log(Object.values(test));

for (value of Object.values(test)) {
  console.log(value);
}

// const postalCode = "123-45674";

// function checkPostalCode(string) {
//   const replaced = string.replace("-", "");
//   const length = replaced.length;
//   if (length === 7) {
//     return true;
//   }
//   return false;
// }
// console.log(checkPostalCode(postalCode));

// const postalCode = "123-4567";

// const postal = {
//   // checkPostalCode: function(){
//   // }
//   postalCode: "123-4567",
//   // this.postalCode thisはpostalオブジェクトのこと オブジェクトの中の値を使うときはthisが必要
//   checkPostalCode() {
//     const replaced = this.postalCode.replace("-", "");
//     const length = replaced.length;
//     if (length === 7) {
//       return true;
//     }
//     return false;
//   },
// };
// // postlというオブジェクトの中にcheckPostalCodeという関数・メソッドができた
// // console.log(postal.checkPostalCode(postalCode));
// console.log(postal.checkPostalCode());
const postal = {
  // checkPostalCode: function(){
  // }
  postalCode: "123-4567",
  // this.postalCode thisはpostalオブジェクトのこと オブジェクトの中の値を使うときはthisが必要
  checkPostalCode() {
    const replaced = this.postalCode.replace("-", "").length;
    // const length = replaced.length;
    if (replaced === 7) {
      return true;
    }
    return false;
  },
};
// postlというオブジェクトの中にcheckPostalCodeという関数・メソッドができた
// console.log(postal.checkPostalCode(postalCode));
console.log(postal.checkPostalCode());

const person = {
  name: "yui",
  like: "dog",

  getName() {
    console.log(this.name);
    return this;
  },
  getLike() {
    console.log(this.like);
    return this;
  },
};
person.getName().getLike();
