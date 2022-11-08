echo "Switching"
git checkout main

echo "Building"
npm run build

echo "Deploying"
scp -r * 0.0.0.0:/var/www/

echo "Done"