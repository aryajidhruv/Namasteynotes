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
 - it is used to create local state variable inside your funciton component
 - dont useState inside if else or conditon or function
 - useEffect() 
 - syntax useEffect(()=>{},[]
 one is callback function 
 []-this is dependeci array - if no dependecy array useEffect call after every render 
 - if there is empty dependency array then useEffect call only one time at initial 
 
 )
 - it will call after every time when component render 

 whenever a state variable is update react will   render its  component 

- learn about react fiber -acdite github 

why React is fast - because it has virtual DOM ,
it have a diff algorithm which can do efficient DOM manipulation 


# shimmer ui 

# useState
- if u want to make your component dynamic u have to use local state variable like after this react will re render or refresh tha page 

- when u change  local state variable react re-render

- whenever state variable update ,recat targe reconciliation

# Learn about this  
-  onChange={(e)=>{setsearchText(e.target.value) }}/>


# react-router-dom
-  import {createBrowserRouter, RouterProvider} from "react-router-dom"
-  const appRouter = createBrowserRouter([{
  path:'/',
  element:<AppLayout/>
},
{
  path:'/about',
  element:<About/>,
}]) 
- root.render(<RouterProvider router={appRouter}/>)

-   path:'/',
  element:<AppLayout/>,
  errorElement:<Error/>  This is to show error on the page 
- <h3>{err.status}:{err.statusText}</h3> for showing particular error


# children routes
childer:[
  {},
  {},
  {}
] 
- and use outlet react-router-dom 

# never use anchor tag for linking page - it will refersh the whole page
- use link react-router-dom - it did not reload the page - just the body will be replaced

# 2 types of routing in web apss
- 1 client side routing - it did not makes any network call   
- 2 server side routing - html page it makes the network call and refreshing the page and renders it in UI
  
