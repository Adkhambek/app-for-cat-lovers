export interface Cat {
    id: number;
    name: string;
    age: number;
    color: string;
    isHungry: boolean;
    hasCollar: boolean;
    feedTime: number;
}

export interface catsListInterface {
    type: "new" | "owned";
    cats: Cat[];
}
