const parent = React.createElement('div',{id:"parent"},
    React.createElement('div',{id:"child"},
       [ React.createElement('h1',{id:"heading"},"Hi This is dhruv"),React.createElement('h2',{id:"heading"},"HI HI HI")]
    )

)
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)