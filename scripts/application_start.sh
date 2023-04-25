#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/projects/my-portfolio

#navigate into our working directory where we have all our github files
cd /home/ec2-user/projects/my-portfolio

#install node modules
/usr/local/bin/yarn install

#build app
npm run build

#start our node app
/usr/local/bin/pm2 restart portfolio