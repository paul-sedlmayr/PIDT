#Statistics , [[APA format]], [[R regression]], [[R plotting]], [[R statistics]]

https://rempsyc.remi-theriault.com/

##### `nice_t_test()` for t-Test in tables with Cohen's d and CI
```
t.test.results <- nice_t_test(data= mtcars, 
            response= names(mtcars)[1:3],
            group = "am", 
            warning = FALSE)
            
t.test.results
```
*Results:*
```
  Dependent Variable         t       df            p         d   CI_lower   CI_upper
1                mpg -3.767123 18.33225 0.0013736383 -1.477947 -2.2659731 -0.6705686
2                cyl  3.354114 25.85363 0.0024647126  1.208455  0.4315896  1.9683146
3               disp  4.197727 29.25845 0.0002300413  1.445221  0.6417834  2.2295592
```

-> group could also be male / female e.g.

###### `nice_t_test() bonfferoni corrected`
```  
t.test.results <- nice_t_test(data= mtcars, 
                              response= names(mtcars)[1:3],
                              group = "am",
                              correction = "bonfferoni",
                              warning = FALSE)
t.test.results
``` 
##### `nice_table()` for [[APA format]] tables
- Optional: `, highlight=TRUE)` to highlight significant $p$'s (most likely not [[APA format|APA-7]] conform)

*For [[R regression|regression]]:*

**1.** `model_x <- lm(mpg ~ wt * cyl + gear, data=mtcars)`

*see further*
##### `nice_assumptions()` to check for statistical assumptions
*([[Test for Normality]], [[Homoscedasticity]], [[Autocorrelation of Residuals]])*

**2.** `nice_table(nice_assumptions(model_x), col.format.p = 2:4)`
   -*"Diagnostic"* represents number of assumptions that might be problematic
   
![[6-Bild 13-03-2023.png|300]]

##### `nice_lm()` for linear model

**3**. `nice_table(nice_lm(model, b.label="B"))`
   -`b.label="B"` accounts for $\beta$ instead of "$b$"
![[7-Bild 13-03-2023.png|300]]


##### `save_as_docx()` to save table in word
`save_as_docx(x_table, path="...")`



##### `nice_table()`
##### `nice_contrast()` to compare groups in table
```R
table.stats <- nice_contrasts(response = "Sepal.Length", group = "Species", data = iris)
nice_table(table.stats)
```

![[8-Bild 13-03-2023.png|600]]
(!Compare d values; might also be $d_R$ -values that differ slightly!)




##### `nice_na()` to report NA cases

```
set.seed(50)
df <- data.frame(scale1_Q1 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA),
                 scale1_Q2 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA),
                 scale1_Q3 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA),
                 scale2_Q1 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA),
                 scale2_Q2 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA),
                 scale2_Q3 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA),
                 scale3_Q1 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA),
                 scale3_Q2 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA),
                 scale3_Q3 = c(sample(c(NA, 1:6), replace = TRUE), NA, NA))

# Then select your scales by name
nice_na(df, scales = c("scale1", "scale2", "scale3"))
#>                   var items na cells na_percent na_max na_max_percent all_na
#> 1 scale1_Q1:scale1_Q3     3  6    27      22.22      3            100      2
#> 2 scale2_Q1:scale2_Q3     3  9    27      33.33      3            100      2
#> 3 scale3_Q1:scale3_Q3     3  8    27      29.63      3            100      2
#> 4               Total     9 23    81      28.40      9            100      2

# Or whole dataframe
nice_na(df)
#>                   var items na cells na_percent na_max na_max_percent all_na
#> 1 scale1_Q1:scale3_Q3     9 23    81       28.4      9            100      2
```
-> `all_na` gibt Anzahl der ProbandInnen an, die überall NA haben  

  
##### `extract_duplicates` to extract all duplicates (participants)
`extract_duplicates(df1, id = "id")`
##### `nice_violin()` for [[Violin Plots]] 

```r
figure_x <- nice_violin(group="Species", 
                      response = "Sepal.Length", data = iris,
                      ytitle = "Length of Sepal",
                      signif_annotation = c("***", "***", "***"),
                      signif_yposition = c(8.7, 7.3, 8.2), 
                      signif_xmin = c("setosa", "setosa", "versicolor"),
                      signif_xmax = c("virginca", "versicolor", " virginica"))
figure_x
```

![[9-Bild 13-03-2023.png|300]]






#Miss More possible commands

##### `extract_duplicates(datax, id)` to data frama (for inspection)
>Extracts ALL duplicates (including the first one, contrary to `duplicated` or `dplyr::distinct`) to a data frame for visual inspection.

##### `best_duplicate()` to extract duplicate with fewer missing
>In case of ties, picks the first one

##### `find_mad()` to identify outliers (3 MAD)
>Identify outliers based on (e.g.,) **3 median absolute deviations (MAD)** from the median.

##### `winsorize_mad(mtcars$qsec, criteria = 3)`
>"Winsorize" outliers based on (e.g.,) **3** median absolute deviations (MAD)

##### `nice_reverse()` to recode reverse scores
```R
# Reverse score of 5 with a maximum score of 5
nice_reverse(5, 5)
#> [1] 1
```

##### `format_value` formats statistical figures for use (in character!)
>"Easily format _p_ or _r_ values. Note: **converts to `character` class for use in figures or manuscripts** to accommodate e.g., “< .001”."

##### `nice_randomize()` to randomize with different designs

```r
nice_randomize(design = "between", Ncondition = 4, n = 8,
               condition.names = c("BP","CX","PZ","ZL"))
#>   id Condition
#> 1  1        ZL
#> 2  2        BP
#> 3  3        PZ
#> 4  4        CX
#> 5  5        CX
#> 6  6        PZ
#> 7  7        BP
#> 8  8        ZL

# Within-Group Design
nice_randomize(design = "within", Ncondition = 3, n = 3,
               condition.names = c("SV","AV","ST"))
.....
```


##### `nice_normality` to make nice density and QQ-plots per group
```r
nice_normality(data = iris,
               variable = "Sepal.Length",
               group = "Species",
               grid = FALSE,
               shapiro = TRUE,
               histogram = TRUE)
```
([[Test for Normality]]?)

##### `plot_outliers()` to check and plot outliers
>Visually check outliers based on (e.g.) +/- 3 MAD (median absolute deviations) or SD

`plot_outliers(airquality, group = "Month", response = "Ozone", method = "sd")`

##### `nice_var()` to obtain variance per group and variance outliers
>variance per group as well as check for the rule of thumb of one group having **variance four times bigger** than any of the other groups
  (*[[Heteroscedasticy]]*)

`nice_var(data = iris, variable = "Sepal.Length", group = "Species")`

##### `nice_varplot()` to visualize variance per group

`nice_varplot(data = iris, variable = "Sepal.Length", group = "Species")`

##### `figure.savefig("xy.png")` to save file


#### References

1. [APA Tables and Psychology R with  rempsyc Package - YouTube](https://www.youtube.com/watch?v=Go3qjqrIC-I)
2. [rempsyc/rempsyc (github.com)](https://github.com/RemPsyc/rempsyc#utility-functions)

3. See [[R Lavaan]]-Package:

>For an alternative, vector-based syntax to `lavaan` (a latent variable analysis/[[Structural Equation Model (SEM)]]-modeling package), as well as other convenience functions such as naming paths and defining indirect links automatically, see my other package, `lavaanExtra`.

**
#### Citation

```BibTex
@Article{,
    doi = {10.21105/joss.05466},
    url = {https://doi.org/10.21105/joss.05466},
    year = {2023},
    publisher = {The Open Journal},
    volume = {8},
    number = {87},
    pages = {5466},
    author = {Rémi Thériault},
    title = {{rempsyc}: Convenience functions for psychology},
    journal = {Journal of Open Source Software},
  }
```