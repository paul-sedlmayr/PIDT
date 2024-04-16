[[R Programming]], [[R tidyverse]]

See [[R string#Referencing characters|special characters]]




[[stringr cheat sheet.pdf]]
![[160-strings.html]]

```ad-hint
title: StringR formula
collapse: open


**str_function(x, pattern)**



```


#### Overview stringR

|  |  |
|---|---| 
| `str_replace() / str_replace_all()` | to replace patterns  | 
 | `str_length()` |  length of string | 
| `str_to_lower()  / str_to_upper` | |
|  `str_to_title() / str_to_sentence()` | |
| `str_which()` |  find positions matching pattern | 
 | `str_detect()`  | detect presence of pattern | 
 | `str_subset()` |  subset of matching pattern | 
 | `str_count()` |  count matches | 
 | `str_extract()`  / `str_extract_all()` | extract matching patterns | 
 | `str_match()`  / `str_match_all()` | extract matching components | 
 | `str_split()  / str_split_fixed()` | to split string |
 

### Functions
##### `str_c()` combining strings
````
str_c("x", "y")
#> [1] "xy"
str_c("x", "y", "z")
#> [1] "xyz"
````

```
str_c("x", "y", sep = ", ")
#> [1] "x, y" 

str_c(c(7, 2, 6), letters[24:26], sep = "*", collapse = " + ")
##[1] "7*x + 2*y + 6*z"
```

```
people <- c("jerry", "newman")
dialogue <- str_c(rev(people), ":", "Hello", people, "\n")
##Jerry: "Hello Newman"
##Newman: "Hallo Jerry"
``` 

**Collapse** vector into single string
```
str_c(c("x", "y", "z"), collapse = ", ")
#> [1] "x, y, z"
```

**Paste modified strings**
```
str_c("prefix-", c("a", "b", "c"), "-suffix")
#> [1] "prefix-a-suffix" "prefix-b-suffix" "prefix-c-suffix"
```
`x <- str_c(state.name, " (", state.abb, ")")`
`##"Alabama (AL)" ...`


##### `str_sub()` Subsetting strings
`Str_sub`
`table(str_sub(state.name -1, -1))`
`##table of state names ending with "a"`

```
x <- c("Apple", "Banana", "Pear")
str_sub(x, 1, 3)
#> [1] "App" "Ban" "Pea"

#.negative numbers count backwards from end
str_sub(x, -3, -1)
#> [1] "ple" "ana" "ear"
```

```
str_sub(x, -4, -4) <- "["
str_sub(x, -1, -1) <- "]"
```
 
##### `str_replace() / str_replace_all()` to replace patterns

`str_replace(fruit, "[aeiou]", "-")` ; to replace the first vowel 

```
PH <- "([2-9][0-9]{2}) ([2-9][0-9]{2})-([0-9]{4})"
contacts %>%
    mutate(new_number = str_replace(number, PH, "(\\1) \\2 \\3"))```
````
-> back reference to pattern (`\\1`)


`flatten_chr` 
-> create one big vector; chr: character

`read_lines or readLines

`separate` in place of `extract`

##### `str_length()` length of string
##### `str_to_lower()` / `str_to_upper`

Function to only edit first letter
```r 
capFirst <- function(s) {
  paste(toupper(substring(s, 1, 1)), substring(s, 2), sep = "")
}   
```

##### `str_to_title()` / `str_to_sentence()`
##### `str_extract`
`extract()`; extracts columns from a data frame 


##### `writeLines()` to print
### Matching

>Matches never overlap

##### `str_view()` / `str_view_all()`
`x <- c("apple", "banana", "pear")`
`str_view(x, "an")`

->shows b**an**ana

 ``str_view(x, ".a.")
  ->"a" as in-**between two characters**
  -"." means match with every character
  -`"\\."` if the character is a **period**
  ->watch out with the amount of backslashes


`str_view("abc.45", ".[.].")``
-   abc.45
`str_view("abc.45", ".\\..")`
-   abc.45

`str_view_all('Is it "summarise" or "summarize"?', "summari(s|z)e")`
-  Is it "summarise" or "summarize"?


##### `str_which()` find positions matching pattern

BaseR: `grep(pattern, x)`

##### `str_detect()` detect presence of pattern

BaseR: `grepl(pattern, x)`

##### `str_subset()` keep the strings matching the pattern

BaseR: `grep(pattern, x, value = TRUE)`


##### `str_sub()` subset of matching pattern

`str_sub(state.name, 4, 9)[1:5]`  ; 4th to 9th letter for 1:5

`str_sub(state.name, 4, -1)[1:5]` ; 4h to last letter for 1:5 

`table(str_sub(state.name, 1, 1))` ; table with frequency of first letters

List of state names with (abbreviations), then change `[` to `]`
```
x <- str_c(state.name, " (", state.abb, ")")
x[1:5]

str_sub(x, -4, -4) <- "["
str_sub(x, -1, -1) <- "]"
x[1:5]

## [1] "Alabama [AL]"    "Alaska [AK]"     "Arizona [AZ]"    "Arkansas [AR]"  
## [5] "California [CA]"
```



##### `str_count()` count matches

BaseR: `sapply(gregexpr(pattern, x), length)`


##### `str_extract()` / `str_extract_all()` extract matching patterns

-> only the first match if not `_all` 

BaseR: ``regexpr(pattern, x)` + `regmatches()``

##### `str_match()` / `str_match_all()` extract matching components

BaseR: ``regexpr(pattern, x)` + `regmatches()``
Tidyverse: `extract` is more useful when extracting from dataframe

##### `str_split() / str_split_fixed()` to split string

Returns list by default; `, simplify = TRUE` returns matrix

`sentences %>% head(4) %>% str_split(" ")`
 ->splitting at every space

`str_split(x, boundary("word"))
-> separates at backslashes and leaves out periods
->also `sentence` possible


BaseR: `strsplit(x, pattern)`

#### `writeLines()` see raw string (without "")



#### Referencing characters

|   |   |
| --- |---|
| `.` |  any character but newline |
| `^a` | begins with a   |
| `a$` | ends with a  |
| `[aeiou]` | matches with every aeiou  |
| `[^aeiou]` | everything but aeiou; different than anchor |
| `[B-E]` | matches B, C, D, or E |
| `?` | 0 or 1 occurrences |
| `+` | 1 or more |
| `*` | 0 or more |
| `{m,n}` | m to n times (both inclusive) |
| `{m}` | exactly m times |
| `{m,}` | m or more times |

`str_view(c("I", "II", "III"), "II?")` ;one or two
`str_view(c("I", "II", "III"), "I{2,3}")` ;two or three

- The meaning of `^` changes from “start of string” outside `[]` to “not” inside `[]`.


-   Examples:
    -   `good|bad` matches good _or_ bad.
    -   `az?` matches a and az (`z?` matches 0 or 1 z’s).
    -   `az*` matches a, az, azz, azzz, etc. (`z+` matches 0 or more z’s).
    -   `az+` matches az, azz, azzz, etc. (`z+` matches 1 or more z’s, i.e., at least 1).
    -   `az{3}` matches azzz.
    -   `az{3,5}` matches azzz, azzzz, and azzzzz (3 to 5 z’s).
    -   `az{2,}` matches azz, azzz, azzzz, etc (2 or more z’s).
    -  `a\\.c` matches "`a.c`"
#### Backslash

A backslash `\` needs to be presented by another backslash

|  |   |
| --- | --- |
| `\B`   | non-start of word or non-end of word |
| `\d`  | any digit -> [0-9] |
| `\D`  |  any non-digit  ->`[^0-9] |
| `\s`  | any whitespace character |
| `\S`  | any non-space character |
| `\w`   | any "word" character ([a-zA-Z0-9]) |
| `\W`   | any non-word character |
  | | |
  | `\n`  | newline (aka 'line feed')   |                       
  |`\r`  |      carriage return        |                            
  |`\t`   |      tab                         |                       
  |`\b`   |      backspace              |                            
  |`\a`   |      alert (bell)              |                         
  |`\f`   |       form feed             |                             
  |`\v`   |       vertical tab           |                            
  |`\\`  |        backslash `'\'`          |                            
 | `\' `    |    ASCII apostrophe '''    |                           
  |`\"`  |       ASCII quotation mark '"'      |                     
  |`\` |        ASCII grave accent (backtick) `'``'`    |              
  |`\nnn`   |     character with given octal code (1, 2 or 3 digits)| 
  |`\xnn`   |    character with given hex code (1 or 2 hex digits) | 
  |`\unnnn` |    Unicode character with given code (1-4 hex digits) |
  | `\Unnnnnnnn` | Unicode character with given code (1-8 hex digits)|

-> `""\\\bcan\\b"`   ## can

`x <- c("\u3bc", "\u3c3", "\u3a3", "\u211d")`
x: "μ" "σ" "Σ" "ℝ"

#### Overview baseR/stringR
  ![[1-Bild 09-11-2022.png|400]]
![[2-Bild 09-11-2022.png|400]]
![[Bild 08-11-2022.png|400]]

#### Example: Generate random phone number
```
rphone <- function(area = NULL, exchange = NULL, station = NULL) {
    ## Generate random area code and exhange unless otherwise specified.
    if (is.null(area)) area <- sample(200:999, 1)
    if (is.null(exchange)) exchange <- sample(200:999, 1)
    ## Have to allow for leading zeros with station code.
    if (is.null(station)) {
        station <- sample(0:9, 4, replace = TRUE)
        station <- str_c(station, collapse = "")
    }
    ## Paste them together and return the string.
    str_c(area, " ", exchange, "-", station)
}

bob_and_carol <- rphone()
ted_and_alice <- rphone(area = str_sub(bob_and_carol, 1, 3))
```


`str_view(fruit, "([aeiou]).([aeiou]).(\\1|\\2)", match = TRUE)`
- `"(\\1|\\2)"` ;either the first character or the second


`str_detect(c("Bob", "Carol"), "A|a")`
-> logical function for vector

`sum(str_detect(words, "z")`; 3

`str_which(words, "z")`   `(same as which(str_detect(...)))`


```
df <- tibble(word = words) %>%
    mutate(vowels = str_count(words, "[AEIOUaeiou]"),
           consonants = str_count(words, "[^AEIOUaeiou]"))
df %>% slice_sample(n = 6, replace = TRUE) %>% arrange(word)
```

Create pattern that allows us to find fruits in sentences

````
fruit_match <- str_c(fruit, collapse = "|")
str_sub(fruit_match, 1, 70)  # Show the 1st 70 characters of the pattern
````
`fruit-sentences <- str_subset (sentences, fruit match)`

- `str_sub` and `str_subset` are different

stringr help function: regex() with ignore_case = TRUE

````
fruit_sentences <- str_subset(sentences, regex(fruit_match, ignore_case = TRUE))
matches <- str_extract(fruit_sentences, regex(fruit_match, ignore_case = TRUE))
matches
````

Read chapter 14 R4DS

`str_detect(fruit, "[^a-zA-Z0-9 ]") %>% any()`
->"any" to not get a whole vector

A lot of steps to think about to create pattern
->what to do when the letters are part of another pattern

`str_view_all()`

`str_extract_all` ; extracts all the matches; returning a list

`str_extract_all(fruit_sentences, regex(fruit_match, ignore_case = TRUE)), simplify = TRUE)`    ; matrix form


### Grouped Matches

`noun <- "(a|the) ([^ ]+)"
-> A/the, a blank and the non-blank 









