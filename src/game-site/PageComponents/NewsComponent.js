import {Component} from 'react'
import EntryComponent from '../EntryComponent'
import GameSiteDataService from '../../api/game-site/GameSiteDataService';

class NewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries:[],
            shouldRender:false 
        };
        this.refreshEntries = this.refreshEntries.bind(this)
    }

    componentDidMount(){
        this.refreshEntries()
    }

    refreshEntries(){
        GameSiteDataService.retrieveAllEntries()
        .then(response => {
            this.setState({
                entries: response.data
            })
            if(this.state.entries === response.data){
                this.setState({
                    shouldRender:true
                })
            }
        })
        .catch()
    }

    render() {
        if(!this.state.shouldRender){
            return <div/>
        }else{
            return (
                <div>
                    {
                        this.state.entries.map(
                            entry=>{
                                if(entry.type === "new") return <EntryComponent key={entry.id} theKey={entry.id} image={entry.thumbnail} title={entry.title} subTitle={entry.subTitle}/>
                                return <div/>
                            }
                        )
                    }
                </div>
            );
        }
    }
    
}

export default NewsComponent;