const root = document.getElementById('root');
const je = {
    food : ["치킨","초밥","꽃목살","곱창","피자","붕어빵","갈치","찹쌀탕수육"],
    money : [30000,20000,10000],
    day : ["M","T","W","T","F","S","S"]
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    if(je.money<10000){
        document.write("오늘의 저녁은 :"+je.food[getRandomIntInclusive(5,5)]);

    }

    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

document.write("오늘의 저녁은 :"+je.food[getRandomIntInclusive(0,je.food.length)]);

root.addEventListener('click',function(){
    document.write("오늘의 저녁은 :"+je.food[getRandomIntInclusive(0,je.food.length)]);
});
