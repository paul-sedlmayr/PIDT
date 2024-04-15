tidy[[R Programming]], #Statistics , [[R regression]]

![[1-Bild 27-10-2022.png|300]]

List of values for table:
```r
summaryfun <- unction(x)list(N=length(x),Mean=mean(x),Median=median(x),SD=sd(x),Min=min(x),Max=max(x))

```

### [[R t-Test]]


### [[R ANOVA]]

### [[R correlation]]


### Chi-Square test

###### `xtabs(count ~ tobgp + cancer, data = esoph_long)`
```
##           cancer
## tobgp      controls cases
##   0-9g/day      447    78
##   10-19         178    58
##   20-29          99    33
##   30+            51    31
```
###### `xtabs(count ~ tobgp + cancer, data = esoph_long) %>% chisq.test()`


### Probability distributions

For every distribution certain variables:
`dfam()`  ; density
`pfam()`  ; cumulative probability
`qfam()`  ; quantile
`rfam()`  ; random values from `fam`


#### [[Normal distribution]]

**`fam` is replaced by `norm` for normal distribution**
`qnorm` and `pnorm()` are opposite functions
```
dnorm(x, mean = 0, sd = 1, log = FALSE)
pnorm(q, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)
qnorm(p, mean = 0, sd = 1, lower.tail = TRUE, log.p = FALSE)
rnorm(n, mean = 0, sd = 1)
```
For example:
`dnorm(c(80, 90, 100, 110, 120), mean = 100, sd = 10)`

#### [[Bernoulli|Binomialverteilung]]

```
dbinom(x, size, prob, log = FALSE)
pbinom(q, size, prob, lower.tail = TRUE, log.p = FALSE)
qbinom(p, size, prob, lower.tail = TRUE, log.p = FALSE)
rbinom(n, size, prob)
```



###### Plotting the normal density
```
opar <- par(mar = c(5.1, 4.1, 0.1, 0.1))
mu <- 100; sigma <- 10
curve(dnorm(x, mean = mu, sd = sigma),
      xlim = qnorm(c(0.001, 0.999), mean = mu, sd = sigma),
      ylim = c(0, dnorm(mu, mean = mu, sd = sigma)),
      ylab = "Density")
par(opar)
```
`par(mar = c(5.1, 4.1, 0.1, 0.1)`
-> margins on the side of the graph

`xlim = qnorm(c(0.001, 0.999), mean = mu, sd = sigma)`
-> graph is covered from 0.001 to 0.999

`qnorm(0.025, lower.tail = FALSE)` = 1.96
->by default lower.trail= true

###### [[Intelligence|IQ]] Distribution
`qnorm(c(0.25, 0.75), mean = 100, sd = 15)` 
-or `100 + 15 * qnorm(c(0.25, 0.75))`

`pnorm(130, mean = 100, sd = 15, lower.tail = FALSE)`
-> chance of having IQ higher at 130 or higher


 For more details check [[R Simulations]]


### Examples
##### Plot normal distribution for IQ
```
library(ggplot2)

x <- 5000

iq_scores <- rnorm(x, mean, sd)

probabilities <- dnorm(iq_scores, mean=mean(iq_scores), sd=sd(iq_scores))

data <- data.frame(iq_scores, probabilities)

ggplot(data, aes(x=iq_scores, y=probabilities)) +
  geom_line() +
  xlab("IQ Score") +
  ylab("Probability")
```



### R Funktionen `var()`, `sd()`und `cov()`
![[Bild 08-09-2023-2.png|500]]

See [[Stats vl_6_parameterschätzung]]

