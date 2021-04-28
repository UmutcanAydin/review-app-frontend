import {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import GameSiteDataService from '../api/game-site/GameSiteDataService'

class EntryPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.match.params.id, 
            writer:"",
            type:"",
            title:"",
            subTitle:"",
            mainBody: ""
        };
        this.deleteEntry = this.deleteEntry.bind(this)
    }

    deleteEntry(){
        GameSiteDataService.deleteEntry(this.state.id)
        .then(response => {
            this.props.history.push('/home')
        })
    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUserName()
        GameSiteDataService.retrieveEntry(this.state.id)
        .then(
            response => this.setState({
                writer:username,
                type:response.data.type,
                title:response.data.title,
                subTitle:response.data.subTitle,
                mainBody:response.data.mainBody
            })
        )
    }

    render() {
        return (
            <div>
                <div className="row justify-content-end mr-3">
                    <button className="btn btn-danger" data-toggle="modal" data-target="#confirmationModel">Bu yazıyı sil.</button>
                </div>
                <div>
                    <h1>{this.state.title}</h1>
                    <br/>
                    <h2>{this.state.subTitle}</h2>
                    <br/>
                    <p className="ml-5" style={{float:'left'}}>{this.state.mainBody}</p>
                    <footer className="footer">
                        <span className="text-muted">{this.state.writer}</span>
                    </footer>
                </div>

                <div class="modal fade" id="confirmationModel" tabindex="-1" role="dialog" aria-labelledby="confirmationModelLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="confirmationModelLabel">Uyarı!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Bu yazıyı silmek istediğine emin misin? 
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
                                <button type="button" class="btn btn-danger" onClick={this.deleteEntry} data-dismiss="modal">Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EntryPageComponent;