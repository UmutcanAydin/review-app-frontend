import {Component} from 'react'
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component{

    constructor(props){
      super(props)
      this.state = {
        username: 'umut',
        password: '',
        hasLoginFailed:false
      }
      this.handleChange = this.handleChange.bind(this)
      this.loginClicked = this.loginClicked.bind(this)
    }
  
    handleChange(event){
      this.setState({
        [event.target.name]:event.target.value
      })
    }
  
    loginClicked(){
      if(this.state.username==='umut' && this.state.password==='dummy'){
        AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        this.props.history.push("/home") //History Api
        this.setState({hasLoginFailed:false})
      }else{
        this.setState({hasLoginFailed:true})
      }
     
    }
  
    render(){
      return(
        <div>
          <h1>Giriş</h1>
          <div className="container">
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>*/}
            {this.state.hasLoginFailed && <div className="alert alert-warning">Kullanıcı Adı veya Parolanızı Yanlış Girdiniz.</div>}
            Kullanıcı:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            Parola:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
          </div>
        </div>
      )
    }
  
  }

  export default LoginComponent