// lexical context
// =========================================
var teacher = "Kyle";

function ask(question) {
  console.log(teacher, question);
}

function otherFunction() {
  var teacher = "Suzy";

  ask("Why?");
}

// otherFunction();

// almost equivalent of dynamic context
// =========================================
function ask(question) {
  console.log(this.teacher, question);
}

function otherLesson() {
  var myContext = { teacher: "Suzy" };

  ask.call(myContext, "Why?");
}

otherLesson();

// implicit binding
// =========================================

const lesson = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

lesson.ask("What is implicit binding?");

// implicit dynamic binding
// =========================================
function ask(question) {
  console.log(this.teacher, question);
}

const lesson1 = {
  teacher: "Kyle",
  ask,
};

const lesson2 = {
  teacher: "Suzy",
  ask,
};

lesson1.ask("What is dynamic binding?");
lesson2.ask("What is dynamic binding?");

// explicit binding
// =========================================
function ask(question) {
  console.log(this.teacher, question);
}

const lesson1 = {
  teacher: "Kyle",
  ask,
};

const lesson2 = {
  teacher: "Suzy",
  ask,
};

ask.call(lesson1, "What is explicit binding?");
ask.call(lesson2, "What is explicit binding?");
ask.apply(lesson1, ["What is explicit binding?"]);
ask.apply(lesson2, ["What is explicit binding?"]);

// explicit hard binding
// =========================================

const lesson = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(lesson.ask, 10, "Lost this?");
setTimeout(lesson.ask.bind(lesson), 10, "Hard bound this?");

// this and arrow functions
// =========================================

const lesson = {
  teacher: "Kyle",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 10);
  },
};

lesson.ask("Is this lexical 'this'?");

const lesson = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this.teacher, question);
  },
};

lesson.ask("What happened to 'this'?");
lesson.ask.call(lesson, "Still no 'this'?");
