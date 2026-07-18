npm init install 
it will create a package.json which have range of version installed

npm install -D parcel
-D for development 
create a package-lock.json - this json have exact version of dependencies

# node modules 
-are like data base of all dependencies which have all code of all dependencies

Put /node_modules in .gitignore


# parcel
-Dev build
-Local server
-Refreshing 
-HMR = Hot module replacement
-file watching algorithm - writing in c++
-caching -faster buld
-image optimization
-Minification
-Bundling
-compressing
-consistent hashing
-code spliting
-diffrential bundilng->to you app opne in any older browser
-HTTPS
-tree shaking
-different dev andbund bundles

# "browserlist":[
    "last 10 version of chrome "
  ]
  The proejct will can be access in any browser of last 10 version


# food
/**
 * Header
 * -logo
 * -nav Items
 * 
 * body
 * -search
 * -restaurant container
 *    -restaurantCard
 *      -img
 *      -Name of restaurant ,star rating, cusines ,delivery time 
 * 
 * footer
 * -copyright
 * -links
 * -address
 * -contact
 *  
 # there are two types of export
 1. export default component
 2. import Component from "path "


 -- named export /import
 1. export const component;
 2.import {component} from "path" 


 # React Hooks
 (normal js function or utility funciton)
 - useState() - superpowerfull satate variable in react
 - useEffect() - 

 whenever a state variable is update react will   render its  component 

- learn about react fiber -acdite github 

why React is fast - because it has virtual DOM ,
it have a diff algorithm which can do efficient DOM manipulation 