# Reflection

## What was the most helpful aspect of this code's structure?

The most helpful aspect was the consistent shape of the data. Every entry in
`readingLog` is an object with the same three properties (`day`, `book`,
`minutes`), and every function takes the whole log array as its input. Once I
understood one entry, I understood the entire dataset, and each function could
be read on its own since it only touches the properties it needs —
`totalReadingMinutes` only cares about `.minutes`, `mostReadBook` only cares
about `.book`, and `printDailySummary` uses all three. The functions being
small and single-purpose made the whole file easy to follow.

## What part was confusing or took longer to understand?

`mostReadBook` took the longest to understand. It's the only function with two
loops and an intermediate data structure, and I had to realize that the
`bookCounts` object is being used as a tally chart (book titles as keys, counts
as values) before the rest of it made sense. It also switches from `for...of`
(which loops over array values) to `for...in` (which loops over object keys) —
the two look almost identical but iterate over completely different things.
The `if (!bookCounts[entry.book])` check was also tricky at first: it reads
like "if this book is falsy," but what it really means is "if this book hasn't been 
counted yet."
