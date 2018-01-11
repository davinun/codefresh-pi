The quest - test for codefresh
---------------------------------
implement a web service on Nodejs that calculate pi digit based on
https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula

https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula#BBP_digit-extraction_algorithm_for_.CF.80

ipmlement api that getting n digitis and calculates this in parallel
the number of parallelization can be controlled so if exectued in k8s you can do it in parallel.

wrap this with Docker and deploy to Kubernetes using codefresh.


#test the service
#------------------
PI in hexa is: 3.243F6A8885 A308D31319 8A2E037073 44A4093822 299F31D00 (http://www.super-computing.org/pi-hexa_current.html)

Check it out:
http://host:port/?n=[1,2,4,79]

Expected response:
[[1,2],[2,4],[4,15],[79,7]]

Explanation:
1st digit is 2
2nd digit is 4
4th digit is 15 (F)
79th digit is 7


#project home dir
cd /home/dror/WebstormProjects/codefresh-pi

#build the docker image
docker build -t dror/drorweb_codefresh_pi .

#run the docker image
docker run -p 3000:3000 -d dror/drorweb_codefresh_pi

#bash into the docker
docker exec -it <docker-id> /bin/bash

#view the console / logs
docker logs <docker-id>

#check listening ports
sudo lsof -i -P -n | grep LISTEN

#Reading material:
NodeJS in Docker tutorial - https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
Bailey–Borwein–Plouffe formula - https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula


