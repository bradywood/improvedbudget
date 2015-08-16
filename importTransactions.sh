#!/bin/bash
# set variables, such as USER, PASS, SRC etc ...

rm sqlerror.log

#at the moment the columns are "date, bank account, description, debit, credit"
files=( `pwd`/server/unprocessedtransactions/*.csv )

if [ "${#files[@]}" -ge 0 ]
then
for file in "${files[@]}"
do
 TABLE='transactions'
 echo "processing file [" $file "] to table [" $TABLE "] ...";
mysql -u"${USER}" -p"${PASSWORD}" -hlocalhost -D"${DB}" <<EOF >>"sqlerror.log" 2>&1

LOAD DATA INFILE '${file}'
 INTO TABLE ${TABLE}
 FIELDS TERMINATED BY ','
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 (@transaction_date_variable,account_nickname,description,debit,credit)
 SET transaction_date = STR_TO_DATE(@transaction_date_variable, '%d/%m/%y')
EOF
  if [ $? -ne 0 ]
  then
    echo "file: ${file} has had issues processing (see above), please correct before file is archived." >> sqlerror.log
  else
    mv ${file} archivetransactions/${file##*/}
  fi
done
else
  echo "There are no more files to process"
fi

