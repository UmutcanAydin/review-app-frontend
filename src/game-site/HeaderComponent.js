import {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import AuthenticationService from './AuthenticationService'

class HeaderComponent extends Component {
    
    constructor(props){
        super(props)
        this.state={}
        this.addEntryClicked = this.addEntryClicked.bind(this)
    }

    addEntryClicked(){
        this.props.history.push('/write/'+(-1))
    }

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        return (
            <header>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-3">
                    <Link to="/home" className="navbar-brand">Game</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav navbar-collapse">
                        <li><Link className="nav-link" to="/home">Ana Sayfa</Link></li>
                        <li><Link className="nav-link" to="/reviews">İncelemeler</Link></li>
                        <li><Link className="nav-link" to="/essays">Yazılar</Link></li>
                        <li><Link className="nav-link" to="/news">Haberler</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse">
                        <li>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Ara" aria-label="Search" style={{width:'460px'}}/>
                            <button className="btn btn-primary my-2 my-sm-0" type="submit">Ara</button>
                        </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLoggedIn && <div className="dropdown">
                            <button className="btn btn-primary" onClick={this.addEntryClicked}>Bir Şeyler Yaz!</button>
                        </div>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Giriş</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link ml-5" to="/home" onClick={AuthenticationService.logout}>Çıkış</Link></li>}
                    </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);