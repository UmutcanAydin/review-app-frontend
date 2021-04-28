import {Component} from 'react'
import {withRouter} from 'react-router'

class EntryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
        this.getEntryClicked = this.getEntryClicked.bind(this)
    }

    getEntryClicked(id){
        this.props.history.push('/entries/'+id)
    }

    render() {
        return (
            <div className="card mb-3" style={{maxWidth: '75%', margin: '0 auto'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.image} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8 p-3">
                        <button className="btn btn-primary stretched-link small" style={{float:'right'}} onClick={() => this.getEntryClicked(this.props.theKey)}>Oku</button>
                        <div className="card-body">
                                <div> 
                                    <h5 className="card-title">{this.props.title}</h5>
                                    <p className="card-text text-left">{this.props.subTitle}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );                    
    }
}

export default withRouter(EntryComponent);