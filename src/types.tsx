export interface Cat {
    id: number;
    name: string;
    age: number;
    color: string;
    isHungry: boolean;
    hasCollar: boolean;
    timeoutId: undefined | ReturnType<typeof setTimeout>;
}

export interface catsListInterface {
    feedCat: (id: number) => void;
    isOwned: boolean;
    cats: Cat[];
}
