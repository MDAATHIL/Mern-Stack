import React,{Component} from 'react';
class ClassComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            message:'Here is a sample Class component'

    }
}

    changeMessage=() => {
        this.setState({message:'Message have changed from the class'})
    };
    render()
    {
        return(
            <div> 
                <h2>class Component</h2>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage}>change Message</button>
            </div>
        )
    }

}

export default ClassComponent