import * as React from "react";
import classNames from "classnames";


class NesContainer extends React.Component {
    render() {
        return <section
                className={classNames(this.props.className, "nes-container", {
                    "with-title": this.props.title,
                    "is-dark": this.props.dark
                })}
            >
                {this.props.title && <h2 className="title">{this.props.title}</h2>}
                {this.props.children}
            </section>;
    }
}

export default NesContainer;