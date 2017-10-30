export class SuiCheckComponent extends React.Component{
    constructor(){
        super();
        this._fields =  [
            {isSelect:false,name:"name1"},
            {isSelect:false,name:"name1"},
            {isSelect:false,name:"name1"},
            {isSelect:false,name:"name1"},
            {isSelect:false,name:"name1"},
            {isSelect:false,name:"name1"}
        ];
        this.state = {fields:this.fields}
    }

    get fields(){
        return this._fields;
    }

    select(field){
        field.isSelect = true;
        this.state = {fields:this.fields}
    }

    render(){
        let self = this;
        return (
        <div class='sui-check'>
            <ul>
                {
                    this.state.fields.map(function(field) {
                        return <li key={field.name} onClick={()=>self.select(field)}><div class={field.isSelect?"sui-check-select sui-check-select-active":"sui-check-select"}><div class='sui-check-select-span'>√</div></div><span>{field.name}</span></li>
                    })
                  }
                }
            </ul>
        </div>)
    }
}