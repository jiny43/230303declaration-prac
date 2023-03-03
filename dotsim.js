
const lunch = [
"국밥",
"콩나물무침",
"샐러드랑 닭가슴살",
"맥주",
"파스타",
"쌀국수",
"컵밥",
"한솥도시락",
"생라면",
"불고기",
"siri얼",
];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

console.log("내가 먹은 것은 : "+ lunch[getRandomIntInclusive(0,lunch.length)]);