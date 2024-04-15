[[R Programming]], #Tidy , #Data , [Tidyverse](https://tidyr.tidyverse.org/) , [[Wickham, Hadley]]

![[Bild 09-11-2022.png|130]]

### General
A basic principle is that data should be arranged so that
    -   Each variable is a column
    -   Each observation is a row

- with tibble, you can use data frames easier

#### Tibble & Tribble
Another way to create a tibble is with `tribble()`, short for **tr**ansposed tibble. `tribble()` is customized for data entry in code: column headings are defined by formulas (i.e. they start with `[~](https://rdrr.io/r/base/tilde.html)`), and entries are separated by commas. This makes it possible to lay out small amounts of data in easy to read form

```r
tribble(
  ~x, ~y, ~z,
  #--|--|----
  "a", 2, 3.6,
  "b", 1, 8.5
)
#> # A tibble: 2 x 3
#>   x         y     z
#>   <chr> <dbl> <dbl>
#> 1 a         2   3.6
#> 2 b         1   8.5
```


### Functions

`replicate(26, sample(100), simplify= FALSE)`
names(l) <- letters
tibble(l)

->list of 26 vectors of length 100 

`as_tibble(l)`

#### `separate()` splitting values on two variables

`separate(rate, into = c("cases", "population"), convert = TRUE)` 
or: `separate(rate, into = c("cases", "population"), sep = "/")`
-> usually splits when encountering non-alphabetic 
->splits to character; convert to more specific classes use `, convert = TRUE)`

`separate_rows` ; split value to two values in same row (see cheat sheet)


#### `unite()` inverse function of separate

`unite(new, century, year, sep = "")`
-> default for separate is `"_"`



#### `unnest()` split values to multiple variables

`df %>% transform(y = strsplit(y, ",")) %>% unnest(y)`
-from `"e,f", "g"` to `"e","f","g"`



#### `pivot_longer` and `pivot_wider`: transform to rows / columns

![[Bild 26-10-2022.png|150]]       --->   ![[1-Bild 26-10-2022.png|150]]     

`df %>% pivot_longer(cols=c("year1", "year2"), names_to="year", values_to="points")`
`df %>% pivot_wider(names_from="year", values_from="points")`



#### `replace_na` to assign value to NA
(*see cheat sheet*)


#### `expand` new tibble with all possible combinations



#### `complete` new tibble with all possible combinations assigning NA 



#### `drop_na` drop rows filled with NA



#### `fill` complete NA with next or previous value


#### `col_numbers` to specify as numeric
`col_types = col(column = col_number())`


### Citation

```BibTex
@Article{,
    title = {Welcome to the {tidyverse}},
    author = {Wickham, Hadley and Averick, Mara and Jennifer Bryan and Winston Chang and Lucy D'Agostino McGowan and Romain François and Garrett Grolemund and Alex Hayes and Lionel Henry and Jim Hester and Max Kuhn and Thomas Lin Pedersen and Evan Miller and Stephan Milton Bache and Kirill Müller and Jeroen Ooms and David Robinson and Dana Paige Seidel and Vitalie Spinu and Kohske Takahashi and Davis Vaughan and Claus Wilke and Kara Woo and Hiroaki Yutani},
    year = {2019},
    journal = {Journal of Open Source Software},
    volume = {4},
    number = {43},
    pages = {1686},
    doi = {10.21105/joss.01686},
  }
```
### Cheat sheet 

![[tidyr.pdf]]

![[data-import.pdf]]