import axios from "axios"

class GameSiteDataService{
    retrieveAllEntries(){
        return axios.get('http://localhost:8080/entries') //this is a promise
    }
    retrieveEntry(id){
        return axios.get('http://localhost:8080/entries/'+id) //this is a promise
    }
    createEntry(piece){
        return axios.post('http://localhost:8080/entries', piece) //this is a promise
    }
    deleteEntry(id){
        return axios.delete('http://localhost:8080/entries/'+id) //this is a promise
    }
}

export default new GameSiteDataService()