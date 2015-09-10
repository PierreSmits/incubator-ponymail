#!/bin/bash
DIR=$1
for tlp in `ls -1 ${DIR}`; do 
  for list in `ls -1 ${DIR}/${tlp}/ | sort -g`; do
    if [ "${tlp}" -ne "DONE" ]; then
      printf "\n*** Importing ${tlp}/${list} ***\n"
      python ./import-mbox.py --source {DIR}/${tlp}/${list} --ext "" --lid "<${list}.${tlp}.apache.org>" ;
    fi
  done
done




