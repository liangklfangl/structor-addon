
import React, { Component, PropTypes } from 'react';

class InputTextStateful extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {
            value: this.props.value || this.props.defaultValue || ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }
    handleOnChange() {
        this.setState({
            value: this.inputElement.value
        });
    }
    getValue(){
        return this.state.value;
    }
    focus(){
        this.inputElement.focus();
    }
    validate(value){
        const {validateFunc} = this.props;
        if(validateFunc){
            return validateFunc(value) ? 'has-success' : 'has-error';
        }
    }
    render() {
        const {value} = this.state;
        return (
            <div className={'form-group ' + this.validate(value)}>
                <input
                    style={this.props.style}
                    type={this.props.type}
                    ref={me => this.inputElement = me}
                    className="form-control"
                    value={ value }
                    disabled={this.props.disabled}
                    list={this.props.list}
                    autoComplete={this.props.autoComplete}
                    placeholder={this.props.placeholder}
                    onChange={ this.handleOnChange }
                />
            </div>
        );
    }
}
InputTextStateful.defaultProps = {
    defaultValue: undefined,
    value: undefined,
    validateFunc: undefined,
    type: 'text',
    disabled: false,
};
InputTextStateful.propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    validateFunc: PropTypes.func,
    type: PropTypes.string,
    list: PropTypes.string,
    autoComplete: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

export default InputTextStateful;
