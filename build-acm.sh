sudo yarn run build
cd ./out 
sudo zip -r ./acm-build$(date +%Y%m%d%H%M%S).zip ./
cd ..