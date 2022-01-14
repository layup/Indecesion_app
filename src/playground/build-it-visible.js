console.log('Visibily toggle')



class Test extends React.Component {
    constructor(props){
        super(props), 
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

        this.state = {
            visibility:false 
        }
    }


    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }; 
        })
    }

    render(){
        return (
            <div>
                <h1>Visibily Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details': 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p> Hey. these are some details you can see</p>
                    </div>
                )}
            </div>
        )
    }
}




ReactDOM.render(<Test/>, document.getElementById('app'))