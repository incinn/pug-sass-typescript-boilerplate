interface Test {
    id: number;
    name: string;
}

function foo(): void {
    const item: Test = { id: 1, name: 'testing' };
    console.log(item);
}

foo();
