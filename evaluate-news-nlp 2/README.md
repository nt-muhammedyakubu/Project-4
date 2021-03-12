# Project Instructions

The starter code for the project is from Udacity GitHub. It is the same as the starter used in lesson 2. Start by installing and configuring Webpack just as it was done in the course. You can refer to the course repo as you proceed, and remember to make frequent commits and to create and merge branches as necessary.

The goal of this project is to practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

Natural language processing (NLP) is a branch of computer science,information engineering, and artificial intelligence that deals with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data. The computer gives the results of the contents of the document after analysing it as well as accurately categorize and organize the documents and the variations of languages between them. 

MeaningCloud Sentiment Analysis API-2.1 is used for this project for performing a detailed multilingual sentiment analysis of input texts/sentences.  Sentiment Analysis uses advanced natural language processing techniques to detect the polarity of input texts/sentences. 

# Step 1: Getting started

Then, Then, get started by following the steps from the course up to Lesson 4 but don't add Service Workers just yet to avoid having extra caches floating around and creating avenue for confusion. 

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

And, 

// Choose the necessary installation for the development mode

.npm i -D @babel/core @babel/preset-env babel-loader<br>
.npm i -D style-loader node-sass css-loader sass-loader<br>
.npm i -D clean-webpack-plugin<br>
.npm i -D html-webpack-plugin<br>
.npm i -D mini-css-extract-plugin<br>
.npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin<br>


## Step 2: Setting up the API

The MeaningCloud API is used. You do not need an application_id for it. You can find the API here<br> https://www.meaningcloud.com/developer/account/subscriptions```.<br> Once you create an account with MeaningCloud, you will be given a license key to start using the API. 
### Step 3: Require the meaningcloudAPI

Set up your server/index.js file.
Refer to: ```https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/examples)``` to setup the API in the server/index.js file.

#### Step 4: Environment Variables

Next, requiring the API keys will look something like this:<br>

.var https = require('follow-redirects').https;<br>
.var fs = require('fs');<br>

.var options = {<br>
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',<br>
    'path': '/sentiment-2.1?key=<Your_Key>&lang=<lang>&txt=<text>&model=<model>',<br>
    'headers': {},<br>
    'maxRedirects': 20<br>
};<br>
  
...but there's a problem with this. The personal API keys in the file is going to be available PUBLICLY on Github when we push, which is not advicable. So to prevent this, we will use environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and would not be visible when you push to a different environment like Github.

- Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- Create a new ```.env``` file in the root of the project
- Go to the .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work to protect the API keys will be pointless.
- Then, add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- If you want to refer the environment variables, try putting a prefix process.env. in the server/index.js file, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```

##### Step 5: Using the API

You can check out the documentation of the MeaningCloud API here```(https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/examples)``` to use for the different programming languages. 

## After the MeaningCloud API

After this, be sure you are following all the requirements in the project rubric in the classroom to make sure you're in the direction.### 

### Deploying

A great step to take with the finished project could be to deploy it! But that would not be discussed here. Check ```Netlify-(https://www.netlify.com/)``` or ```Heroku-(https://www.heroku.com/) ```for some really intuitive free hosting options.

#### References

Natural Language Processing Note, [Retrieved from https://en.wikipedia.org/wiki/Natural_language_processing on 18 February 2021]<br> 
Webpack Docs ```https://webpack.js.org/loaders/```<br>
Sass basics ```https://sass-lang.com/guide```<br>
MeaningCloud API Endpoint Docs ```https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools/2.1```<br>
Fetch APIS docs ```https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API```<br>
Jest Docs```https://jestjs.io/docs/en/getting-started```<br>
Jest Tutorial ```https://jestjs.io/docs/en/configuration#snapshotserializers-arraystring```<br>
