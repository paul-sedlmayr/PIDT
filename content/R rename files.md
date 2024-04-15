
Caution: did only move files last time
```r
folder = "C:\\Users\\paul0\\OneDrive - Universität Graz\\OneSyncFiles\\Vault1"
files <- list.files(folder,pattern = "*.CSV",full.names = T) 
   sapply(files,FUN=function(eachPath){ 
   file.rename(from=eachPath,to= sub(pattern="\\/", paste0("\\/N0_"),eachPath))
 })
```


