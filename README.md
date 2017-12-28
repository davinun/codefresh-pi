# codefresh-pi
test for codefresh

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


