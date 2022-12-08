export interface Cat {
    id: number;
    name: string;
    age: number;
    isHungry: boolean;
    hasCollar: boolean;
}

export interface catTypeInterface {
    type: "new" | "owned";
}
