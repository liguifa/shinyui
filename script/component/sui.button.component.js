 export class SuiButtonComponent extends React.Component{
    constructor(){
        super();
        this._text = "button";
    }

    get text(){
        return this._text;
    }

    Click(scope){
        if(scope.disabled == "true"){
            return;
        }
        if(scope.href){
            window.location = scope.href;
        } else {
            alert(1);
        }
    }

    render(){
        let self = this;
        let type = this.props.disabled && this.props.disabled == 'true' ? 'disabled' : this.props.disabled;
        let className = `sui-button sui-button-${type} sui-button-${this.props.size}`
        return (<button className={className} onClick={()=>this.Click(self.props)}>{this.props.text}</button>);
    }
}