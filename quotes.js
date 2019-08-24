const QUOTES = [
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
  "A misplaced decimal point will always end up where it will do the greatest damage.",
  "A good programmer looks both ways before crossing a one-way street.",
  "A computer program does what you tell it to do, not what you want it to do.",
  "Artificial Intelligence usually beats natural stupidity.",
  "Any fool can use a computer. Many do. - Ted Nelson",
  "Hey! It compiles! Ship it!",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "Computers make very fast, very accurate mistakes.",
  "If brute force doesn’t solve your problems, then you aren’t using enough.",
  "It works on my machine.",
  "Life would be so much easier if we only had the source code.",
  "Only half of programming is coding. The other 90% is debugging.",
  "Pasting code from the Internet into production code is like chewing gum found in the street.",
  "The nice thing about standards is that there are so many to choose from.",
  "There is nothing quite so permanent as a quick fix.",
  "There’s no test like production.",
  "Weeks of coding can save you hours of planning.",
  "You start coding. I’ll go find out what they want.",
  "Let’s call it an accidental feature. - Larry Wall",
  "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - Bill Gates",
  "Never trust a computer you can’t throw out a window. - Steve Wozniak",
  "Nobody expects the Spanish inquisition. - Monty Python",
  "The greatest performance improvement of all is when a system goes from not-working to working. - John Ousterhout",
  "You can never underestimate the stupidity of the general public. - Scott Adams",
  "You must have chaos in your soul to give birth to a dancing star. - Friedrich Nietzsche",
  "Without requirements or design, programming is the art of adding bugs to an empty 'text' file. - Louis Srygley",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
  "One man´s crappy software is another man´s full time job. - Jessica Gaston",
  "It´s okay to figure out murder mysteries, but you shouldn´t need to figure out code. You should be able to read it. - Steve McConnell",
  "Inside every large program, there is a program trying to get out. - C.A.R. Hoare",
  "The goal of Computer Science is to build something that will last at least until we´ve finished building it.",
  "The best way to get a project done faster is to start sooner - Jim Highsmith",
  "Reality itself is too obvious to be true. - Jean Baudrillard",
  "Let me just change this one line of code…",
  "Did you know? The collective noun for a group of programmers is a merge-conflict.",
  "If the programmers like each other, they play a game called 'pair programming'. And if not then the game is called 'peer review'. - Anna Nachesa",
  "The proper use of comments is to compensate for our failure to express ourself in code. - Robert C. Martin",
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  "Code never lies, comments sometimes do. - Ron Jeffries"
];

const getRandomQuote = () => {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

exports.getRandomQuote = getRandomQuote;