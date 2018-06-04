import React, { Component, PropTypes } from 'react';
import DimensionBorder from './DimensionBorder.js';

class DimensionBox extends Component {

    constructor(props) {
        super(props);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
    }

    handleDecrease(border) {
        const {onDecrease, type} = this.props;
        if(onDecrease){
            onDecrease(type, border);
        }
    }

    handleIncrease(border) {
        const {onIncrease, type} = this.props;
        if(onIncrease){
            onIncrease(type, border);
        }
    }

    render() {
        const {type} = this.props;
        let buttonDistance = 20;
        let className = 'dimension-box';
        if(type === 'padding'){
            className += ' dimension-padding';
            buttonDistance = 20;
        } else if(type === 'border'){
            className += ' dimension-border';
            buttonDistance = 30;
        } else if(type === 'margin') {
            className += ' dimension-margin';
            buttonDistance = 30;
        } else if(type === 'position'){
            className += ' dimension-position';
            buttonDistance = 30;
        }
        return (
            <div className={className}>
                <DimensionBorder
                    type="left"
                    buttonDistance={buttonDistance}
                    onDecrease={this.handleDecrease}
                    onIncrease={this.handleIncrease} />
                <DimensionBorder
                    type="top"
                    buttonDistance={buttonDistance}
                    onDecrease={this.handleDecrease}
                    onIncrease={this.handleIncrease} />
                <DimensionBorder
                    type="right"
                    buttonDistance={buttonDistance}
                    onDecrease={this.handleDecrease}
                    onIncrease={this.handleIncrease} />
                <DimensionBorder
                    type="bottom"
                    buttonDistance={buttonDistance}
                    onDecrease={this.handleDecrease}
                    onIncrease={this.handleIncrease} />
                {type === 'padding' ?
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', border: '1px solid #dcdcdc' }}
                         className="dimension-center" />
                    :
                    this.props.children
                }
            </div>
            );
    }
}

DimensionBox.propTypes = {
    type: PropTypes.string.isRequired,
    onDecrease: PropTypes.func,
    onIncrease: PropTypes.func,
};

DimensionBox.defaultProps = {
    type: 'padding',
    onDecrease: (dimension, border) => console.log(`Decrease ${dimension} on ${border}`),
    onIncrease: (dimension, border) => console.log(`Increase ${dimension} on ${border}`),
};

export default DimensionBox;
