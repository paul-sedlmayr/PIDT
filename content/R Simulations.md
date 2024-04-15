[[R Programming]]

### Generalizing

##### `sample()`

`sample(1:6, 2, replace = TRUE)`

`sample.int(6, size=2, replace = TRUE`
-> a little bit faster; specific for integers

##### `x %in% y`

`all(x[1:4] %in% y)`


### Examples

#### Roll a loaded die (gezinkter Würfel)
```
sample.int(6, size=2, replace = TRUE
-> a little bit faster; specific for integers

p <- c(1, rep(2, 4), 3)

## [1] 1 2 2 2 2 3

p/sum(p) ; probability of each one

## [1] 0.08333333 0.16666667 0.16666667 0.16666667 0.16666667 0.25000000

p <- p / sum(p)
x <- sample(1:6, 24, replace = TRUE, prob = p)
```
What is the probability of having more sixes than threes if you roll 24 times?
-> Simulation (10000 replications)
```
x <- replicate(10000, sample(1:6, 24, replace = TRUE, prob = p))
## gives you 24 times 10000 matrix

n1 <- apply(x, 2, function(y) sum(y == 1)) 
n6 <- apply(x, 2, function(y) sum(y == 6))
mean(n6 > n1) ## How often are there more sixes than threes
```

#### Draw a poker hand

`outer(1:3, 5:6)`
->Default= "`*`" , you can also use "+"

`cards <- outer(c("C", "D", "H", "S"), c(2:10, c("J","Q","K","A")), paste, sep = "_")`
`sample(cards, size = 5)`



### Heads and tails

`x <- sample(c("H","T"), 100, replace = TRUE)`

``xr <- rle(x)``   ; list that returns the runs
`xr$lenghts`  ; lengths of runs of heads and tails
`xr$values` ; for example "H" or "T"

`max(xr$lengths)` 

#### Simulation

```
nsim <- 1000; ntosses <- 100
maxrl <- vector(length = nsim)
for (i in 1:nsim) {
	x <- sample(c("H","T"), ntosses, replace = TRUE)
	xr <- rle(x)
	maxrl[i] <- max(xr$lengths)
}
```
In what proportion of the 10000 experiments did we observe at least one run of min length 6
`mean(maxrl >= 6)`

(*see slides!*)


#### Biased coin
```
nsim <- 10000
ntoss <- 100
pH <- c(0.5, 0.6, 0.7, 0.8, 0.9)
res <- matrix(nrow = nsim, ncol = length(pH))   
colnames(res) <- pH
for (i in seq_along(pH)) {
    res[, i] <- apply(simtosses(nsim, ntoss, probH = pH[i]), 2, fmaxrl)
}
muhat <- apply(res, 2, mean)
sigmahat <- apply(res, 2, sd)
se.muhat <- sigmahat / sqrt(nsim)
round(rbind(muhat, se.muhat), 3)
```

`seq_along(x)== |ilength(x)`

> "when I vary that parameters of the distribution, what happens to the distribution"

```
- apply(res, 2, quantile, probs = c(0, 0.05, 0.25, 0.5, 0.75, 0.95, 1))
 ##      0.5 0.6   0.7 0.8 0.9
 ## 0%     3   3  4.00   6   9
 ## 5%     5   5  6.95   9  15
 ## 25%    6   6  8.00  12  20
 ## 50%    7   8 10.00  15  25
 ## 75%    8   9 12.00  18  32
 ## 95%   10  12 17.00  25  46
 ## 100%  18  22 37.00  48  95
```

For .5 -> interval usually from 5 to 10 (5 to 95%)

#### Sampling

```
mu <- 100 ; sigma <- 15 ; n <- 30
x <- rnorm(n, mean = mu, sd = sigma)
```

`mean(x) + c(-1, 1) * qt(0.975, df = n - 1) * sd(x) / sqrt(n)
`## [1]  95.66485 108.61304
-> confidence intervals

###### "Did all letters show up in my sample?"
```
x <- sample(LETTERS[1:5], 9, replace = TRUE)
x

## [1] "C" "D" "D" "A" "E" "B" "A" "E" "A"

LETTERS[1:5] %in% x

## [1] TRUE TRUE TRUE TRUE TRUE

all(LETTERS[1:5] %in% x)

## [1] TRUE
```
Simulate it:
```
n_reps <- 1000
n_ltrs <- 6
n_sample <- 10
n_successes <- 0L   # Initialize counter
for (i in 1:n_reps) {
  x <- sample(LETTERS[1:n_ltrs], n_sample, replace = TRUE)
  is_success <- all(LETTERS[1:n_ltrs] %in% x)
  n_successes <- n_successes + is_success
}
n_successes / n_reps
```
-> 