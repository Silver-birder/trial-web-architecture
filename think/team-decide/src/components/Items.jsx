import React from 'react';
import Item from "./item.jsx";

class Items extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item) => {
                    return <Item name={item}></Item>
                })}
            </ul>
        )
    }
}

export default Items;