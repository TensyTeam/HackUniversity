import React from "react";
import { animated, interpolate } from "react-spring/hooks";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, objs } = this.props;
    const { photo, name, type } = objs[i];

    return (
        <animated.div
            key={i}
            style={{ transform: interpolate( [x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)}}
        >
            <animated.div
              {...bind(i)}
              className="card"
              style={{ transform: interpolate([rot, scale], trans) }}
            >
                <div className="card_content">
                    <img src={photo} />
                    <div className="card_text" >{name + ' ' + type}</div>
                </div>
            </animated.div>
        </animated.div>
    );
  }
}

export default Card;
