const accId="asiajsiasina";
let mobile="1212719271";
var addrs="Thane";
accntTyp="saving";

// accId="najskdas"; not allowed conts are constant value which are immutable in nature
// mobile="1212121"; can changed as only variable is declared using let keyword not scope is defined
// addrs="Mumbai" can changes like let its also variable declaration but should not be used in latest version as its deprecated
// accntTyp="current" can change like above

/*
 Scopes:
var :   Scope: Function-scoped, meaning it is accessible within the function it 
        is declared in. If declared outside of any function, it is globally scoped.
let :   Scope: Block-scoped, meaning it is only accessible within the nearest enclosing { } block.
const : Scope: Block-scoped, similar to let
        no declaration :Scope: If a variable is assigned without var, let, or const inside a function,
        it is implicitly made a global variable. This is generally considered bad practice. 
 
 */

console.table([accId,mobile,addrs,accntTyp]);

{
    const a="ashish";
    let b="Ayansh";
    var glob="Sumitra";
    console.table([a,b]);
}
// console.log(glob);this will print as var has global scope .So dont use var ever
// console.log(a,b); here will get error as scope of above vars are inside {}
