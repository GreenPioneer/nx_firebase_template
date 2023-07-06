# NxTemplate

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve frontend` for a dev server and `nx serve server` to run the API. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files. Note: if `nx` is not installed then running `npx nx serve frontend` and `npx nx serve server` should work.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

# Set Up Your Repo

1. Fork this repository, then clone it down locally, and run `npm i`.

2. Connecting your code to firebase
    1. Create/Sign in to your firebase account.
    2. Click on 'Go to Console' and then 'Create a Project'.
    3. Name and create your project, all default settings are fine.
    4. Go to 'Project Settings' in your firebase app. Scroll down to your apps and select web app. You should see a create web app screen. Name your app and also set up firebase hosting. The next part is confusing, do not follow firebase instructions, follow OUR instructions carefully.
    5. Copy the `projectId` and paste it in `firebase.ts` in the `libs` folder inside the 'settings' constant (we already have most things set up for you). Also copy and paste `authDomain`, `databaseURL`, `projectId`, and `storageBucket` in `firebase.ts` in `apps/frontend/src/app/firebase` (these are also in 'Project Settings' after the app is created if not provided).
    6. Next navigate in firebase to 'Project Settings -> Service Accounts' and generate a new private key. Create a `.env` file in the root directory and add this key (make the entire object is in a string, on one line, and has no spaces).
    7. Delete `.firebaserc` and `firebase.json` files in the root of this directory if you have them.
    8. Run `firebase login` and then `firebase init`. While initting your project, select use an existing project and select your project, use the default files and do not overwrite them, when asked to install dependencies select yes, when asked if you want to use your public directory type in `dist/apps/frontend`, type yes for a single-page app, and finally type no for automatic builds and deploys.
    9. In firebase navigate from 'Build -> Storage', then click on the 'Rules' tab. Change the `write: if false` to `write: if true` (you may have to click 'Get Started' on this and also on Firestore Database, Realtime Database, Hosting, and Functions).
    10. In your `firebase.json` file inside the `hosting` key, add `{"source": "/api/**","function": "apiv1"}` to the `rewrites` section.
    11. In order to host your backend in firebase functions, you must upgrade your firebase project to the 'Blaze' plan. This will include adding a debit/credit card but you will only pay if your app reaches a certain number of API requests.
    12. After your app is upgraded, we must edit `firebase.json` again. In the 'functions' key, change the 'source' key to `dist/apps/server-firebase`, this is just changing it from the default to our build folder. Also add `"runtime": "nodejs18"` to that 'functions' object. Finally switch out `ignore` key for `"predeploy": []`.
    13. Once your app is initialized, run `npm run build` and then `firebase deploy`. If all was done correctly then you should be able to navigate to the URL provided and see our default app.

3. Google Login
   1. Use this article to help with your apps Google login, https://blog.logrocket.com/guide-adding-google-login-react-app/.
   2. Make sure when adding trusted sites to use your google app, that you include localhost and your hosted site urls.
   3. We already included the code in this template, you only have to change the clientId of the GoogleOAuthProvider in 'main.tsx' of the frontend folder.

4. Sengrid for dynamic emails
   1. We have set up a template for you if you would like to be able to send emails through your app.
   2. First you must set up a sendgrid account and create your default email account and create all the email templates you need.
   3. After that you must add to your `.env` file, `SENDGRID_API_KEY=${your-api-key}`.
   4. Once completed, you can use the different functions we have already built out in the 'integrations' folder of the backend, specifically `sendDynamicEmail` function.

5. Redeploying
   1. You can always redeploy your site by using `firebase deploy`. This will simultaneously deploy front and back ends.
   2. In order to redeploy our frontend and backend seperately, we must edit one of the 'scripts' in `package.json`. Inside the script, `deploy:firebase:api:dev`, change 'nxfirebasetemplate' to your project ID and then run `npm run build` and then `npm run deploy:firebase:api:dev`. This will deploy your backend to firebase functions.
   3. Anytime you make changes and want to redeploy for your hosted site use `npm run build` and then `firebase deploy --only hosting` for the frontend.