// Weekly reading log
// Stores an array of objects, where each object records one reading session
// with the day of the week (string), the book title (string), and minutes read (number)
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Summary: This function adds a new reading session to the weekly log.
// It takes a day, a book title, and the minutes read as inputs, bundles them
// into a single object, and appends it to the readingLog array. It does not
// return anything; its result is the modified readingLog.
function addReadBook(day, book, minutes) {
  // Uses object shorthand: { day, book, minutes } is the same as
  // { day: day, book: book, minutes: minutes }
  const newEntry = { day, book, minutes };
  // push() adds the new entry to the END of the array, keeping the log in
  // chronological order
  readingLog.push(newEntry);
}

// Summary: This function calculates the total time spent reading for the week.
// It takes the reading log array as input, adds up the minutes from every
// entry, and returns that sum as a number.
function totalReadingMinutes(log) {
  // Accumulator variable — starts at 0 and grows as each entry is counted
  let total = 0;
  // for...of loops over the VALUES of the array, so `entry` is one
  // reading-session object per iteration
  for (let entry of log) {
    // Accesses the numeric minutes property on each object and adds it
    // to the running total
    total += entry.minutes;
  }
  return total;
}

// Summary: This function figures out which book appears most often in the log.
// It takes the reading log array as input, counts how many sessions each title
// has, and returns the title (string) with the highest count.
function mostReadBook(log) {
  // Object used as a tally chart: keys are book titles, values are how many
  // times each title appears in the log
  const bookCounts = {};
  // First loop: walk through every log entry to build the tally
  for (let entry of log) {
    // If this title hasn't been seen yet, start its count at 1;
    // otherwise increment the existing count. This check matters because
    // reading an undefined key and adding to it would produce NaN.
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  // Track the current winner while scanning the tally object
  let maxBook = null;
  let maxCount = 0;
  // Second loop: for...in loops over the KEYS of bookCounts (the book titles),
  // comparing each title's count against the best one found so far
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      // Found a new leader — remember both the title and its count so later
      // titles are compared against the right number
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Summary: This function prints a human-readable line for each reading session.
// It takes the reading log array as input and outputs one console.log line per
// entry showing the day, minutes, and book title. It returns nothing — its
// result is the text printed to the console.
function printDailySummary(log) {
  for (let entry of log) {
    // Template literal (backticks) lets us embed the object's properties
    // directly inside the string with ${...}
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Suggested improvement: totalReadingMinutes could be rewritten with the
// built-in reduce() method, e.g.
//   return log.reduce((total, entry) => total + entry.minutes, 0);
// This is helpful because it replaces the manual accumulator loop with one
// declarative line, removes the mutable `total` variable, and signals the
// intent ("collapse this array into a single number") immediately to anyone
// reading the code.

// Example usage — runs when the file is executed with node
addReadBook("Saturday", "Dune", 50); // log now has 6 entries

// Test case: calls addReadBook with brand-new input data — a day (Sunday)
// and a book (Fahrenheit 451) that don't appear anywhere in the original log
addReadBook("Sunday", "Fahrenheit 451", 35);

printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog)); // "Dune" wins with 3 sessions
