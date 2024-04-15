[[R Programming]]

Microsoft Excel into R

read_excel() for xls and xlsx
->returns tibble
excel_sheets()

Path: ``/`` needs to be ``\\``

``uf_progs %>% group_by(College) %>% summarise(n = n())``
->group by and summarise

### Exporting and saving data

![[Bild 26-09-2022.png|350]]->"any program will read a comma separated file" (CSV)
-> write_csv(...) ## save file as csv
->native format rds is much faster than csv

You can edit how NA is saved (na = "")

![[data-import.pdf]]
