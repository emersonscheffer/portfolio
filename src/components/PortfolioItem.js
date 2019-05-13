import React, { Component } from "react";

export class PortfolioItem extends Component {
  render() {
    return (
      <div className="mn port-item">
        <div className="item-header">
          <h3>{this.props.name}</h3>
        </div>
        <div
          className="frame-port"
          style={{ backgroundImage: 'url("' + this.props.bg + '")' }}
        />
        <div className="item-footer">
          <a target="_blank" rel="noopener noreferrer" href={this.props.gitLink}>Github repo</a>
          <a target="_blank" rel="noopener noreferrer" href={this.props.pageLink}>Link</a>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
