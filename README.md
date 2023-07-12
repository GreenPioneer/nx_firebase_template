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
    12. After your app is upgraded, we must edit `firebase.json` again. In the 'functions' key, change the 'source' key to `dist/apps/server-firebase`, this is just changing it from the default to our build folder. Also add `"runtime": "nodejs18"` to that 'functions' object. Finally switch out `ignore` key for `"predeploy": []`. Also in your `storage.rules` change the `if false` to `if true`.
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
   1. You can always redeploy your site by using `firebase deploy`. This will simultaneously deploy front and back ends. NOTE: if you havent changed `storage.rules` to `if true` then it will be overwritten and cause firebase storage problems.
   2. In order to redeploy our frontend and backend seperately, we must edit one of the 'scripts' in `package.json`. Inside the script, `deploy:firebase:api:dev`, change 'nxfirebasetemplate' to your project ID and then run `npm run build` and then `npm run deploy:firebase:api:dev`. This will deploy your backend to firebase functions.
   3. Anytime you make changes and want to redeploy for your hosted site use `npm run build` and then `firebase deploy --only hosting` for the frontend.


6. Setting up Auto-deployments
   1. Go to your Github repository and click on 'Actions', and enable actions in this repository.
   2. In the terminal use `firebase init hosting:github`, choose your project and select your repository. Select 'yes' when asked to set up a workflow. Overwrite the files and use the basic scripts. You can choose another branch to be your hosting branch but 'main' is just fine.
   3. NOTE: Auto deployments sometimes only deploy to one of the two domains that firebase hosting provides.


# Coding in this Repo

## Backend
1. Structure
   1. `apps/server` folder is where everyting is stored for the backend server.
   2. Inside the `src` folder there are two main folders that you will be using, `app` and `integrations`. The app folder holds all of the routes that you will be creating, while the integrations folder holds any third party applications, like sendgrid, that you need to create functions for.

2. Creating a Module
   1. We have provided an example of a 'Blogs' module in the blogs folder.
   2. Whenever you need to create a new collection of a instance, you should create another folder inside the `app` folder and inside the new folder you need three files: module, controller, and service. You also have to create a collection in your firebase database to correspond to this module. NOTE: it is a good practice to name your folder the same as your collection in firebase.
   3. For example, if I need to create a new collection of 'dogs', then I would create a new folder called `dogs` and then inside I would create `dogs.controller.ts`, `dogs.module.ts`, and `dogs.service.ts`. All CRUD functionality for 'dogs' should primarily go through this module.
   4. The `dogs.module.ts` file is the connector between the routes and the functions that need to be called. In here you will declare the new 'dogs' module, import other necessary modules, controllers, and services.
   5. The `dogs.controller.ts` file is where your routes will be stored. For our 'dogs' example, I would make the base route, `'dogs'`, but then I could add other pieces to the url, like `':dogId'`, to certain routes to help specify which function I am trying to reach and pass data. NOTE: any route with a `':'` in it represents a variable/parameter that helps pass data.
   6. The `dogs.service.ts` file is where the functions that your routes call are stored. This is the file that should call our prebuilt firebase functions. These functions are stored in `libs/firebase/src/lib/firebase.ts`, and they do the editting of your firebase database.
   7. Once all these files are built, the last step is to import your module to `app.module.ts` and then add it to the imports section of the `AppModule`. NOTE: if your server is running make sure to restart it before testing if your routes are working.


## Frontend
   1. In the `frontend/src/app` folder, you can use every subfolder available and your `app.tsx` file is your base for the frontend. We will run through what each subfolder is used for.
   2. The `api-client` folder is where you will keep your functions that communicate with your backend. In the `index.ts` file you will see that it is already set up to send requests. Anytime you create a new collection of an instance, you should create a new file in the `apiModules` subfolder that holds any functions associated with that collection and create a new 'apiEndpoint' in `index.ts`. NOTE: when creating new collection functions, follow the blogs functions layout.
   3. The `components` folder is where you will store highly reuseable and dynamic components. These components are usually stuff you would copy from places like 'tailwind'. The point of keeping them here is to be able to easily import them all over your app. NOTE: nothing in these components should be hard coded, this is to ensure reuseability.
   4. The `firebase` folder is specific to only one purpose, accessing the firebase storage. Firebase storage is frontend oriented and is made for storing documents, images, or other files.
   5. The `images` folder is self-explanatory, store you images here for easy access and importing.
   6. The `shared` folder is for functions that are used everywhere. Storing validation functions or string parsers here is useful as long as they are dynamic and able to be used around the app.
   7. The `views` folder is where most of your work will go. This folder holds all of the different components that build your frontend. Each different component is seperated into its own folder for readability and organization. These folders will hold all 'views' of each component as well as css files and utility files. This folder also contains the router folder, which is the folder that indicates what component corresponds to what url. NOTE: anytime any of these views change, the server will auto update so no need to restart to see the changes.


# Best Practices

   1. Use Prettier to format your code. To get Prettier go to the 'Extensions' sidebar in Visual studio Code and search and install Prettier.
   2. Use ESLint to check your code for bugs. Get ESLint in the 'Extensions' sidebar.
   3. Testing your code. Two folders are provided for you to create tests for your code, `server-e2e` and `frontend-e2e`. Building tests are a great way to make sure any edits in your code do not accidentally break something elsewhere.
   4. We use TypeScript instead of JavaScript in order to help keep functions in order and organized. Since we use TypeScript, creating interfaces or using correct types can save a lot of headache from moving data around incorrectly.