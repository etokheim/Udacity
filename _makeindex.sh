#!/bin/sh

# TEST="find . -name \*.html -print"
TEST="$(find . -name \*.html -print)"

# echo $TEST

# echo $TEST > index.html
# echo "" > index.html

# array=()
# while IFS=  read -r -d $'\0'; do
#     array+=("$REPLY")
#  	echo ("$REPLY") >> index.html
# done < <(find . -name \*.html -print)

# array=()
# while IFS="/"  read -r -d $'\0'; do
#     array+=("$REPLY")
# done < <(find . -name ${input} -print0)


# Working but separates by "/"
array=()
number=0
while IFS='/' read -ra ADDR; do
     for i in "${ADDR[@]}"; do
         # process "$i"
         number+=1
         echo $number
         array[number]+="$i"
     done
done <<< "$TEST"

echo ${array[1]}


# ls | egrep '(html)' | \
# perl -e 'print " $TEST <html>
# 	<body>
# 		<ul>"; while(<>) { chop $_; print "
# 			<li>
# 				<a href=\"./$_\">
# 					$_
# 				</a>
# 			</li>";} print "
# 		</ul>
# 	</body>
# </html>"' > index.html

