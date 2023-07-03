# mayPractice
mohit mmmmmmmmmm 
..

npm install -g @angular/cli   => angular download

ng version  => version check for angular


to install angular version wise  => npm install -g  @angular/cli@12.0.1

to update angullar version  => ng update @angular/cli

nod version check:  node -v

https://docs.google.com/spreadsheets/d/1QceRQuWSUYzakyx8y4g5H1lmOSLF67S2E3edXaziO5w/edit?usp=sharing    ==>mam


powershell:
1)Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser  ==>powershell ng comand work nhi krega tab

2)Get-ExecutionPolicy

Get-ExecutionPolicy -listGet

to create angular project:
1) to check node , angular invirment.

2) to create new project: ng new project_abc

3) if u are facing  error between  project creation :
node module file is their : simply delete it and run command:- npm i    or for forcefully  npm i -f

incase not craete after this command then create new folder..

4) if project is suuceesfully create then asking for routing package- yes

5) asking for css, scss= choose anyone

6)to run angular project: ng serve -open  /  ng s -o    !!  ns s  / ng serve

7) many times we make a common mistake means we oprn the terminal other folder thats why "this comand is not available
....angular cli outside" then change the terminal...


8) to  create component: open the termial on project:- ng generate component user (user- component name) // ng g c user

9) to create module: ng g m home --routing

10)module k under component:  ng g c home  (note:open terminal on that modeule )

11)compo generate and bind file and link in lazy loading:  ng g m admin --route admin --module app.module 

12) servises => ng g s data

13)pipe => ng g p searchtext  

## in organization

1) url: clone the url
stpes: craate folder >> right click then select git bash here >> git clone "url" >> if ask credentials the enter >> enter

2) after  cloning open that folder in vs code and check node_module file: it should not presenet 1000%..(because it ignor by git)

3) theen in terminal : npm i 
if facing any erreo then : npm i -f
still facing then delete this node_module file  and again npm i or npm i -f

4)if did successfull instalation of npm packages >> ng s / command will given to u ur team member to serve application.



----------------------------------------------------------------------------------------------

https://github.com/typicode/json-server...

npm install -g json-server
json-server --watch db.json


---------------------------------------------------------------------------------
angular material..

 ng add @angular/material