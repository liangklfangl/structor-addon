import React, { Component, PropTypes } from 'react';
import DimensionBox from './DimensionBox.js';

class DimensionBoxContainer extends Component {

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    <DimensionBox type="position">
                        <DimensionBox type="margin">
                            <DimensionBox type="border">
                                <DimensionBox type="padding" />
                            </DimensionBox>
                        </DimensionBox>
                    </DimensionBox>
                </div>
                <div style={{marginTop: '1em', width: '100%'}}>

                </div>
            </div>
        );
    }
}

export default DimensionBoxContainer;
