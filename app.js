let max = 50;
let num = 0;
let count = 0;

for(let i = 1; i <= 50; i++){
  num = num + i;
  count++;
    if(i % 10 === 0) {
      console.log("今" + count + "回ループしました")
    }
    if(i % 4 === 0){
      console.log("4で割れる数です。" + count)
    }
}

if(count = max){
  alert("50回カウントが終わりました。")
}