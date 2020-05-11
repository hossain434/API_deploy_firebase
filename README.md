# API_deploy_firebase

Steps:

1. Create account on firebaseapp for API hosting
2. create new folder and npm install -g firebase-tools
3. In the console type: firebase login
4. firebase init and choose 'function' option for API deploy and click next next..
5. Once is done steps #4, This will create necessary NPM package within functions folder which is created by firebaseapp.
5. npm install express cors --save
6. Write Express and Core function inside of 'function folder'.
7. In the console type: "firebase serve" to get API URL.
8. In the console type: firebase deploy.
9. once deploy is done, localhost URL will pop-ups. For actual URL: Goto firebaseapp account, navigate to function folder and get the actual URL.

Reference: https://medium.com/@sandun.isuru/how-to-deploy-nodejs-express-app-to-firebase-as-function-31515c304e70
