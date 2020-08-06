import React,{Component} from 'react';
import { Route, Link,Switch, Redirect } from 'react-router-dom';
import Result from './ResultComponent';
import { Input } from 'reactstrap';
import App from '../App'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            answer:'',
        };
        this.handleChange=this.handleChange.bind(this);
        this.reset=this.reset.bind(this);
    }
    handleChange(event){
        const target=event.target;
        const value= target.value;
        const name= target.name;
        this.setState({
            [name]:value
        })
    }
    reset(){
        
        this.setState({
            answer:''
        })
    }
    render(){
        return(
            <div className='container'>
                <div className='row justify-content-center'>
                    
                    <div className='col-12 col-md-6'>
                        <h3>Can you guess the number ?</h3>
                        
                        <Input type='number' name='answer' id='answer' value={this.state.answer} placeholder='Guess the number...'
                            onChange={this.handleChange}/>
                

                    </div>
                </div>

                <div className='row row-content'>
                    <div className='col-12'>
                        <Link className='btn btn-primary'  to='/result'>Check </Link>
                        <Link  to='/' onClick={this.reset}><img  height='35' src="https://img.icons8.com/cute-clipart/64/000000/synchronize.png"/></Link>
                    </div>

                </div>
                <Switch>
                    <Route path='/result' component={()=><Result answer={this.state.answer} />} />
                
                    <Redirect to='/' />
                </Switch>
                
            </div>
        )

    }


}
export default Main