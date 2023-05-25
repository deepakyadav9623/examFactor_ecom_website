#!/bin/bash
cd /home/ec2-user/eCommerce-ui/
pkill node
nohup serve -s build > /dev/null 2>&1 &
