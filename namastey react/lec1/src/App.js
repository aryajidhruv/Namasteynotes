import React from "react";
import ReactDOM from "react-dom/client"
import Header from './components/Header'
import Body   from './components/Body'

 




//restuarant card

//? props are property which used as argunment in the component 



  


//Applayout
const AppLayout =()=>{
    return (
        <div className="app ">
            <Header />
            <Body/>
            

        </div>
    )
}

const root =  ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
