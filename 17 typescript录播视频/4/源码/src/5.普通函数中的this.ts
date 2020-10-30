interface T {
    a: number;
    fn: (x: number) => void;
}

let a = 2;
let obj: T = {
    a: 1,
    fn(this: T, x?: number) {
        console.log(this.a)
        // this
        // (<T>this).b;
        // this
    }
}

let fn = obj.fn;
fn(1);
