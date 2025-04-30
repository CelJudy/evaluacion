# Rename PDF file

a little script to create an copy of pdf file and rename with custom name

## Install node

install node from https://nodejs.org/en/download/prebuilt-binaries

then execute in terminal to validate that node installed correctly
```bash
  node -v
```


## Prepare project

1. Paste excel file called `evaluacion.xlsx` in this folder
2. Create a table in postgreSQL using `tabla.sql` script
3. Create an `.env` file with next parameters and set your values
    - USER
    - PASS
    - HOST
    - DATABASE

### Execute project

- inside project folder execute in terminal to install dependencies

```bash
  npm install
```

- and then run script

```bash
  node index.js
```

wait until table in postgres be filled