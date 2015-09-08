#!/bin/bash
# set variables, such as USER, PASS, SRC etc ...


#at the moment the columns are "date, bank account, description, debit, credit"
#files=( `pwd`/server/unprocessedtransactions/*.csv )
files=( $1 )

if [ "${#files[@]}" -ge 0 ]
then
for file in "${files[@]}"
do
 TABLE='transactions'
 echo "processing file [" $file "] to table [" $TABLE "] ...";
 mongoimport -h localhost:3001 -d meteor -c transactions --type csv --file ${file} --headerline

done
else
  echo "There are no more files to process"
fi

