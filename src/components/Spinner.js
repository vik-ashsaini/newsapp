import  logo  from '../logo.svg';
const { Component } = require("react")


export class Spinner extends Component{
    render(){
        return(
            <div className="text-center">
                <img src={logo} alt="loading"/>
            </div>
        )
    }
}
export default Spinner;
