#!/bin/bash

jsfile=$1
pyfile=$1
dir=$1
for arg in $*
do
	if [ $arg != $1 ]
	then
		jsfile+="-"
		jsfile+=$arg
		pyfile+="_"
		pyfile+=$arg
		dir+="-"
		dir+=$arg
	fi
done
jsfile+=".js"
pyfile+=".py"
mkdir $dir
touch $dir"/"$jsfile
touch $dir"/"$pyfile