var remark = require('remark');
var html = require('remark-html');
var processor = remark().use(html);
var doc = processor.process(`
# foo
bar.
[fuga](hoge)

\`\`\`js
var foo = () => 123;
foo();
\`\`\`

- activeClassName
- break
- case

ok!
`);

console.log(doc);
