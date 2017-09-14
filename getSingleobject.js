var hello = require('./singleobject');
var he = new hello();
he.setName('a');
he.sayHello();
var he2 = new hello();
he2.setName('b');
he2.sayHello();