# WEB DEV MIDTERM

My creative addon:
```
switches columns positions
increase image size on hover
```

bugs
```
the onChange event handler is 1 step behind.
```

How to install:

```
git clone https://github.com/josefelq/parcial1webdev.git
cd parcial1webdev
echo "my_flickr_api_key" > server/api_key.txt
echo "my_flickr_api_secret" > server/api_secret.txt
npm install
```
You can [get your Flickr api key and secrets here](https://www.flickr.com/services/apps/create/)


Then compile the front-end into the build folder using

```
npm run build
```

And finally run the server

```
node server
```
And open [http://localhost:9000](http://localhost:9000)

[http://localhost:9000/flickr/query](http://localhost:9000/flickr/query) points to an endpoint that will return a JSON object with the Flickr results. For more information on the Flickr API check:
* The [Flickr API documentation](https://www.flickr.com/services/api/)
* The [flickrapi node module documentation](https://www.npmjs.com/package/flickrapi)
* And this [page that explains how to build the urls for the images](https://www.flickr.com/services/api/misc.urls.html)


This project was created following the instructions on [this great tutorial](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d#.34je0jd4l)


### Original [Create React App](https://github.com/facebookincubator/create-react-app) documentation:


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
