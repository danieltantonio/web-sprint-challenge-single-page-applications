import React from 'react';
import styled from 'styled-components';

const Order = (props) => {
    const { order } = props;
    if(!order) {
        return (
            <div>
                How the hell did you get here bruh? You didn't even order yet my man...
            </div>
        )
    } else {
        return (
            <div>
                {order.instructions}
            </div>
        )
    }
}

export default Order;