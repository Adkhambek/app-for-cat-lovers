export interface Cat {
    id: number;
    name: string;
    age: number;
    color: string;
    isHungry: boolean;
    hasCollar: boolean;
    feedTime: number;
}

export interface catTypeInterface {
    type: "new" | "owned";
}
