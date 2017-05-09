function test1() {
    console.log("test1(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("test1(): called");
    }
}

function test2() {
    console.log("test2(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("test2(): called");
    }
}

class test {
    @test1()
    @test2()
    method() {}
}