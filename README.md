The quest - test for codefresh
---------------------------------
implement a web service on Nodejs that calculate pi digit based on
https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula

https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula#BBP_digit-extraction_algorithm_for_.CF.80

ipmlement api that getting n digitis and calculates this in parallel
the number of parallelization can be controlled so if exectued in k8s you can do it in parallel.

wrap this with Docker and deploy to Kubernetes using codefresh.



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

#test the service
wget http://127.0.0.1:3000/1

#check listening ports
sudo lsof -i -P -n | grep LISTEN

#Reading material:
NodeJS in Docker tutorial - https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
Bailey–Borwein–Plouffe formula - https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula


