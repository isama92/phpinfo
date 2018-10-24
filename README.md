## Server PHP Info
You can use this project as substitute of phpinfo().

#### Configuration
1. Edit the ```appConfig.js``` file
2. Change the path of ```Homepage``` in ```package.json``` (it has to contain the subdir where the entire project is stored, eg. http://www.google.com/info)
3. ```public/server.php``` will be the server that will provide php information to this app
4. ```public/.htaccess``` will make the router works (apache2). If you change the ```subdir``` variable in appConfig.js you have to change the last line in .htaccess (```RewriteRule ^ /info/index.html [L]```)
5. Run the command ```yarn build``` to build the project
6. Create a directory on your ```public_html/``` called **info** (this is the **subdir** variable) and copy all the files you will find in the ```build/``` directory into it
