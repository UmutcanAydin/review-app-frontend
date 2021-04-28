import { ErrorMessage, Field, Form, Formik } from 'formik';
import {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import GameSiteDataService from '../api/game-site/GameSiteDataService'
import WYSIWYG from './WYSIWYG'

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id, 
            writer:"",
            type:"İnceleme",
            thumbnail:"",
            title:"",
            subTitle:"",
            mainBody: ""
        };
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values){
        let username = AuthenticationService.getLoggedInUserName()
        let piece ={
            id: this.state.id,
            writer: username,
            type: values.type,
            thumbnail: values.thumbnail,
            title: values.title,
            subTitle: values.subTitle,
            mainBody: values.mainBody
        }

        if(piece.type === "İnceleme"){
            piece.type = "review"
        }else if(piece.type === "Yazı"){
            piece.type = "essay"
        }else{
            piece.type = "new"
        }
        console.log(piece)
        if(this.state.id === "-1"){
            GameSiteDataService.createEntry(piece).then(() => {
                    this.props.history.push('/home')
                }
            )
        }
    }

    validate(values){
        let errors = {}
        if(!values.title){
            errors.title = 'Lütfen Bir Başlık Giriniz'
        }else if(values.title.length<3){
            errors.title = 'Başlık İçin En Az 3 Karakter Giriniz.'
        }

        if(!values.subTitle){
            errors.subTitle = 'Lütfen Bir Alt Başlık Giriniz'
        }else if(values.subTitle.length<3){
            errors.subTitle = 'Alt Başlık İçin En Az 3 Karakter Giriniz.'
        }

        if(!values.mainBody){
            errors.mainBody = 'Lütfen Yazı Gövdenizi Giriniz.'
        }else if(values.mainBody.length<10){
            errors.mainBody = 'Gövdeye En Az 10 Karakter Giriniz.'
        }
        return errors
    }

    componentDidMount(){
        
    }

    render() {
        //let description = this.state.description
        //let targetDate = this.state.targetDate
        let {type, title, subTitle,mainBody} = this.state 
        return (
            <div>
                <div className="container">
                    <Formik initialValues={{type, title, subTitle,mainBody}} onSubmit={this.onSubmit} validate={this.validate} validateOnChange={false} validateOnBlur={false} enableReinitialize={true}> 
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="type" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="title" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="subTitle" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="mainBody" component="div" className="alert alert-warning"></ErrorMessage>

                                    <fieldset className="form-group mb-5">
                                        <label>Tür</label>
                                        <Field className="form-control" type="text" as="select" name="type">
                                            <option name="review">İnceleme</option>
                                            <option name="essay">Yazı</option>
                                            <option name="new">Haber</option>
                                        </Field>
                                    </fieldset>
                                    <fieldset className="form-group mb-5">
                                        <label>Thumbnail</label>
                                        <Field className="form-control" type="text" name="thumbnail"/>
                                    </fieldset>
                                    <fieldset className="form-group mb-5">
                                        <label>Başlık</label>
                                        <Field className="form-control" type="text" name="title"/>
                                    </fieldset>
                                    <fieldset className="form-group mb-5">
                                        <label>Alt Başlık</label>
                                        <Field className="form-control" type="text" as="textarea" name="subTitle"/>
                                    </fieldset>
                                    <fieldset className="form-group mb-5">
                                        <label>Gövde</label>
                                        <Field component={WYSIWYG} name="mainBody"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Paylaş</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default TodoComponent;