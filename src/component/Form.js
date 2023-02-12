import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: ""
        }
    }
    handleChange=(ev)=>{
        this.setState({value: ev.target.value})
    }
    render() {
        const {value} = this.state;

        return (
            <div className={'Form'}>
               <form onSubmit={(ev)=>this.props.onSubmit(ev, value)}>
                   <input type={"text"}
                          placeholder={"Search weather..."}
                             value={value}
                          onChange={this.handleChange}
                   />
                   <button>Search</button>
               </form>
            </div>
        );
    }
}

export default Form;