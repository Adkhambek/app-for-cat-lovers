import { Cat } from "./types";

let id: number = 0;

const catNames: string[] = [
    "Daisy",
    "Gracie",
    "Rosie",
    "Kiki",
    "Pumpkin",
    "Mocha",
    "Mittens",
    "Boo",
    "Momo",
    "Gizmo",
    "Boots",
    "Goose",
    "Remi",
    "Sunny",
    "Croqueta",
    "Nugget",
    "Tiptoe",
    "Cheeto",
    "Blu",
    "Peaches",
    "Daisy",
    "Dahlia",
    "Daffodil",
    "Iris",
    "Marigold",
    "Clover",
    "Poppy",
    "Primrose",
    "Protea",
    "Thistle",
    "Apple Blossom",
    "Magnolia",
    "Buttercup",
    "Rose",
    "Tiger Lily",
    "Fritillary",
    "Snap Dragon",
    "Petunia",
    "Monchichi",
    "Popple",
    "Hot Wheels",
    "Ducky",
    "Puffalump",
    "Bear"
];

const colors: string[] = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
    "#C0C0C0",
    "#808080",
    "#800000",
    "#808000",
    "#008000",
    "#800080",
    "#008080",
    "#000080"
];

function randomize(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomCat(): Cat {
    id++;
    return {
        id,
        name: randomize(catNames),
        age: Math.floor(Math.random() * 12) + 1,
        color: randomize(colors),
        isHungry: false,
        hasCollar: Math.random() > 0.5,
        timeoutId: undefined
    };
}

export default generateRandomCat;
