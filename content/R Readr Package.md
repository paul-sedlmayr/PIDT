[[R Programming]], [[R Data Import Export]]

- smarter than normal R


### Read_csv
`read_csv("file.csv", col_names = FALSE)` ; provide no headers
`read_csv("file.csv", col_names = c("x", "y", "z"))` ; provide headers
`read_csv(c("f1.csv", "f2.csv", "f3.csv"), id = "origin_file")`  ; multiple files into one table
`read_csv("file.csv", skip = 1)` ; skip lines when importing


### General
![[Bild 23-09-2022.png|550]]
-> data from text files
.csv -> comma separated file


**Get folder from file folder**
`setwd("...")`    ##(hit tab)
`getwd("...")`
