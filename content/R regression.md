[[R Programming]], [23 Model basics R4DS](https://r4ds.had.co.nz/model-basics.html#model-basics), [[Regression]]

##### `lm( y ~ x, data = z)`

Linear model and plot in baseR
```r
tuna_gr <- lm(ppg ~ Size, data = tuna)

opar <- par(mar = c(5.1, 4.1, 0.1, 0.1))
plot(ppg ~ Size, data = tuna)
abline(tuna_gr)
par(opar)
```


##### `confint()` gives out confidence intervals for a linear model

##### `predict()`

`houses_grid$price = predict(lm_aqi, newdata = houses_grid)`
- newdata for new data

`new_speed <- data.frame(speed = c(10, 15, 30))
`predict(mod, new_speeds)`
-> we need a data frame to predict

##### `update()` to account for additional variable
`summary(update(lm_abb, . ~ . - beds))`
->what happens if you take variables away

##### `summary()`

##### `coef(lm)` for coefficients
##### `lm$residuals`
`hist(lmabc$residuals)`
##### `attributes()`


### [[Multiple Regression]]

`lm_abb <- lm(price ~ sqft + beds + baths, data = myhouses)`
->predictors on right side

```
lm_st <- lm(formula = PricePerGram ~ Size + Type, data = tuna)

summary(lm_st)
```
**-> R is creating "dummy variables" for comparisons**
 -> "Type"-groups are compared to the first type

```
plot3 <- tuna %>%
  bind_cols(fitted_price = predict(lm_st)) %>%
  ggplot(aes(x = Size, y = ppg, color = Type)) +
  geom_point() +
  geom_line(aes(y = fitted_price))
```

### [[Logistic Regression]]
Success probability as a function of predictors


##### Generalized Linear Model
 
"they generalizing a linear model"

What distribution does my family fit to?

A linear model is a GLM using the *identity function*, $g(\mu) = \mu$

For GLM, you have to specify the the test (for example "LR", likelihood ratio test) [[Likelihood]]



##### Modeling a Binary or Binominal response

Suppose $Y$ can take values 0 and 1 (only)

$\mu = E(Y) = P(Y=1)$

Logistic regression 

$g(u) = \log{(\frac{\mu}{1-\mu})}$



##### Logistic Regression for Binary Response

(*not complete*)


#FunFact : There is a dataset "How many people died in the [[Prussian]] army from horse kicks"

"Odds and [[Probaility]] are not the same thing. You can get one from the other but they are not interchangeably"








### Examples


#### Fitting Logit Model to Success and Failure Counts

```
esoph_logit_1m <-
    glm(cbind(ncases, ncontrols) ~ agegp + tobgp * alcgp, family = binomial,
        data = esoph)

esoph_logit_2m <-
    update(esoph_logit_1m, . ~ . - tobgp:alcgp)
```

Testing for interaction
```
anova(esoph_logit_2m, esoph_logit_1m, test = "LRT")
```
(_there are different fitting processes; see slides_)

#### Reading

Modelr for modelling
```
library(modelr)
options(na.action = na.warn)
```

#### Output use

###### Multiple regression housing prices
![[1-Bild 06-12-2022.png|400]]
![[2-Bild 06-12-2022.png|400]]

Main = Intercept + control `*` x
Other = (Intercept + estimate) + control `*` x

![[Bild 05-12-2022.png|350]] ![[1-Bild 05-12-2022.png|350]]