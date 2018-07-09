export const version = 1;

export const questions = [
    {
        scoreValue: 1,
        id: 'basic-variable',
        question:
            'Select the answer below that would set a variable named `myVariable` to 3:',
        incorrectFeedback:
            'This a very basic question and if this answer wasn\'t on accident, the rest of the quiz is probably going to be very difficult. Start by reading up on the [fundamentals of Javascript](https://www.w3schools.com/js/)',
        answers: [
            'myVariable(3)',
            'var myVariable = 3;',
            'var myVariable[3]',
            'var myVariable = {\n    3\n}',
        ],
        answerType: 'code',
        correctAnswer: 2,
    },
    {
        scoreValue: 2,
        id: 'null-vs-undefined',
        question: 'What is the difference between `null` and `undefined`?',
        incorrectFeedback:
            'There are a surprising number of developers who don\'t know this. Burn the difference into memory because it\'s extremely important to understand.',
        answers: [
            '`null` is a blank value that has to be assigned where `undefined` is assigned to any variable/property which hasn\'t been given a value',
            '`null` is equivalent to 0 where undefined is a falsey value of 0',
            '`null` is equivalent to false when comparing objects and undefined is equivalent to `false` when comparing numbers',
            'There is no difference',
        ],
        answerType: 'markdown',
        correctAnswer: 1,
    },
    {
        scoreValue: 2,
        id: 'variable-pointers',
        question: 'What does `y` equal and why?',
        incorrectFeedback:
            'This is another thing that trips up developers. The key to remember here is that variables are just *pointers*. When x gets set to 3, y is still pointing at the *value* of x - not x itself.',
        codeFigure: 'var x = 4;\nvar y = x;\nx = 3;',
        answers: [
            '**3**: Because `y` is a reference to `x` and `x` is 3',
            '**undefined**: Because `y` was set to `x` but then `x` changed so now `y` is a dead reference',
            '**4**: Because `y` was set to the value of `x`, not x itself',
        ],
        answerType: 'markdown',
        correctAnswer: 3,
    },
    {
        scoreValue: 1,
        id: 'invoke-function',
        question: 'Invoke/call the function:',
        incorrectFeedback:
            'This is another basic question that you should be able to answer if you\'re going to be doing Javascript development.',
        codeFigure: 'function myFunction(){\n\n}',
        answers: [
            '(myFunction)',
            'myFunction||',
            'myFunction()',
            '|myFunction|',
        ],
        answerType: 'code',
        correctAnswer: 3,
    },
    {
        scoreValue: 2,
        id: 'function-variable-reference',
        question: 'What is `a` equal to shown below?',
        incorrectFeedback:
            'It\'s a common pattern in JS to set variables to functions or other objects. Always keep an eye out to make sure the function isn\'t being invoked. Every character is important.',
        codeFigure:
            'function myFunction(){\n  var x = 5;\n\n  return 3 + x;\n}\n\nvar a = myFunction;',
        answers: ['error', 'myFunction', 'undefined', '8'],
        answerType: 'code',
        correctAnswer: 2,
    },
    {
        scoreValue: 1,
        id: 'function-return-value',
        question: 'What is `b` equal to shown below?',
        incorrectFeedback:
            'Being able to read what the return value of a function is something you should definitely have down pat. Practice writing some basic functions that return simple values - like a number or string.',
        codeFigure:
            'var r = 5;\n\nfunction anotherFunction(){\n  return 3 * r;\n}\n\nvar b = anotherFunction();',
        answers: ['15', 'error', 'undefined', '3'],
        answerType: 'code',
        correctAnswer: 1,
    },
    {
        scoreValue: 3,
        id: 'functions-returning-functions',
        question: 'What is `c` equal to shown below?',
        incorrectFeedback:
            'This is a bit tougher. It can take a bit to read these kind of statements. The way to do it is to work backwards from where the first function is invoked. In this case, start at caller(callee) and break down what each function does starting from the outside (caller) and working your way inside (callee).',
        codeFigure:
            'var name = "Bill";\n\nfunction caller(func){\n  var myObject = {\n    name: "Joe"\n  };\n\n  return func(myObject);\n}\n\nfunction callee(param) {\n  return param.name\n}\n\nvar c = caller(callee);',
        answers: ['Bill', 'caller', 'myObject', 'Joe'],
        answerType: 'code',
        correctAnswer: 4,
    },
    {
        scoreValue: 3,
        id: 'complicated-math-and-closures',
        question: 'What is `d` equal to shown below?',
        incorrectFeedback:
            'This is even tougher than the previous one but the concept here is the same. Find where the top level function is invoked and work you\'re way inward.',
        codeFigure:
            'function caller(f){\n  var x = 3;\n\n  return f(5)(x);\n}\n\nvar d = caller(function(w){\n  var x = 4;\n\n  return function(y) {\n    return x * y + w;\n  };\n});',
        answers: ['undefined', '19', '23', '17'],
        answerType: 'code',
        correctAnswer: 4,
    },
    {
        scoreValue: 2,
        id: 'invoking-with-this',
        question:
            'Given this were running in the browser, what would `e` be equal to shown below?',
        incorrectFeedback:
            'Understanding this is a fundamental piece of Javascript. Check out [this article](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/) for a thorough explanation.',
        codeFigure:
            'var myObject = {\n  method: function(){\n    return this;\n  }\n}\n\nvar e = myObject.method();',
        answers: ['undefined', 'Window', 'myObject', 'error'],
        answerType: 'code',
        correctAnswer: 3,
    },
    {
        scoreValue: 3,
        id: 'window-anonymous-functions',
        question:
            'Given this were running in the browser, what would `x` be equal to shown below?',
        incorrectFeedback:
            'All anonymous functions belong to the global object (in the browser, that\'s `Window`). What determines a functions this (aka "function context"), is how it\'s *invoked*.',
        codeFigure:
            'var myObject = {\n  method: function(){\n    return this;\n  }\n}\n\nvar e = myObject.method;\nvar x = e();',
        answers: ['undefined', 'Window', 'myObject', 'error'],
        answerType: 'code',
        correctAnswer: 2,
    },
    {
        scoreValue: 2,
        id: 'function-call-instantiation',
        question:
            'Which answer below creates a new instance of `Person` with an `age` property, a `name` of Dan, and assigns that instance to a variable called `dan`?',
        incorrectFeedback:
            'A common pattern, before ES6 classes, we\'re to pass objects into a function and assign those props.',
        codeFigure:
            'function Person(props){\n  for(var prop in props) {\n    this[prop] = props[prop];\n  }\n}',
        answers: [
            'var dan = Person(\n  age: 24,\n  name: \'Dan\'\n);',
            'var dan = new Person({\n  age: 24,\n  name: \'Dan\'\n});',
            'var dan = new Person({\n  24,\n  \'Dan\'\n});',
            'var dan = Person({\n  age: 24,\n  name: \'Dan\'\n});',
        ],
        answerType: 'code',
        correctAnswer: 2,
    },
    {
        scoreValue: 2,
        id: 'var-vs-let-vs-const',
        question: 'What is the difference between `var`, `let`, and `const`',
        incorrectFeedback:
            'This is new syntax for ES6 and is good to know. Read more about it [here](http://wesbos.com/let-vs-const/)',
        answers: [
            '`let` is the newer equivalent of var where `const` is used when you want to instantiate a `new` constructor function',
            'Both `let` and `const` are values that cannot change where `var` can change but `let` is only used for numbers, strings and object variables',
            '`let` and `const` are only meant to be used in functions. `const` values cannot be changed however. `var` is now used for global variables',
            '`let` and `const` are both block-scoped variables except that `const` cannot be changed and both are newer replacements for `var`',
        ],
        answerType: 'markdown',
        correctAnswer: 4,
    },
    {
        scoreValue: 2,
        id: 'destructuring-basic',
        question:
            'Which answer below is an example of two `const` variables called `name` and `age` that were created by destructuring `myObject?`',
        incorrectFeedback:
            'Destructuring is a really handy feature of ES6 (the latest version of Javascript). Read more about it [here](http://wesbos.com/destructuring-objects/).',
        codeFigure: 'const myObject = {\n  age: 31,\n  name: "Dan"\n}',
        answers: [
            'const age = myObject[age];\nconst name = myObject[name];',
            'const { age, name } = myObject;',
            'const age, name = myObject;',
            'const myObject[age], myObject[name];',
        ],
        answerType: 'code',
        correctAnswer: 2,
    },
    {
        scoreValue: 1,
        id: 'import-export-basic',
        question: 'What are `import` and `export` used for?',
        incorrectFeedback:
            'These are absolutely critical pieces of the new ES6 syntax that you should know. The MDN site has great documents explaining both [export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) and [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)',
        answers: [
            '`import` is used for passing variables into a function where `export` is used for passing variables out of a function',
            '`import` and `export` are both used when you want to handle different languages in your application',
            '`import` and `export` are used to keep your modules (functions, classes, etc.) in separate files',
        ],
        answerType: 'markdown',
        correctAnswer: 3,
    },
].map((question, i) => ({
    ...question,
    index: i + 1,
}));
