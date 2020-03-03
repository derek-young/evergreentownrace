# Evergreen Town Race

## Non-Developers

    1. Locate the appropriate file under src/
    2. Click on the file (the URL will read something like: `/evergreentownrace/blob/master/src/GeneralInfo.js`)
    3. Click the "Edit this file" button (pencil icon)
    4. Make your updates to the text/links
    5. Scroll to the bottom and click "Commit changes", ensure "Commit directly to the `master` branch." is selected

After clicking "Commit changes", a build process is triggered which redeploys the appropriate files to the cloud. Wait a few minutes and refresh the Evergreen Town Race website, you should see your changes reflected. 

If you would like to make more advanced changes -- more than updating text or links -- please know the file is written in JSX which is similar to HTML but has a few small differences. Please use https://reactjs.org/docs/introducing-jsx.html as a resource.


## Developers

    1. Clone the repo
    2. `npm install`
    3. `npm run start`

Once your changes are complete, commit and push. New commits on `master` trigger a Circle-CI build process that rebuilds the React files and pushes them to S3: `s3://www.evergreentownrace.org` (review the /.circleci/config.yml file).

The React dependencies and custom React files are pulled into the Wordpress site via script tags in Appearance > Customize > Theme Settings > Header/Footer Scripts. E.g.:
```
<script src="https://s3-us-west-2.amazonaws.com/www.evergreentownrace.org/GeneralInfo.js"></script>
```
Each file looks for its associated ID to inject the React code. These IDs are added in the Appearance > Widgets section of Wordpress as custom HTML: `<div id="section_general_info"></div>`.
