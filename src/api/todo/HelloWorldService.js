import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world-bean') //this is a promise
    }
    executeHelloWorldBeanPathVariable(name){
        //let username = 'umut'
        //let password = 'dummy'
        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get('http://localhost:8080/hello-world-bean/path-variable/'+name //this is a promise
        //{
        //    headers:{
        //        authorization: basicAuthHeader
        //    }
        //}
        )
    }
}

export default new HelloWorldService()