import React, { Component, PropTypes } from 'react';

class ContentEditable extends Component {

    constructor(props) {
        super(props);
        this.emitChange = this.emitChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }

    emitChange(){

        const html = this.refs.editableElement.innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;

    }

    handleOnBlur(){

        if(this.props.onBlur){
            this.props.onBlur({
                target: {
                    value: this.lastHtml
                }
            })
        }

    }

    handleOnKeyDown(e){

        if(e.keyCode == 13 || e.keyCode == 27){
            this.handleOnBlur();
        }

    }

    shouldComponentUpdate(nextProps){
        return nextProps.html !== this.refs.editableElement.innerHTML;
    }

    componentDidUpdate() {
        var node = this.refs.editableElement;
        if ( this.props.html !== node.innerHTML ) {
            node.innerHTML = this.props.html;
            this.lastHtml = this.props.html;
        }
    }

    componentDidMount(){
        $(this.refs.editableElement).focus();
        this.lastHtml = this.props.html;
    }

    render(){
        return (
            <span
                ref="editableElement"
                className='umy-grid-text-editable'
                onInput={this.emitChange}
                onBlur={this.handleOnBlur}
                onKeyDown={this.handleOnKeyDown}
                contentEditable
                dangerouslySetInnerHTML={{__html: this.props.html}}>
            </span>
        );
    }

}

ContentEditable.defaultProps = {
    onBlur: undefined,
    onChange: undefined,
    html: ''
};
ContentEditable.propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    html: PropTypes.string
};

export default ContentEditable;

