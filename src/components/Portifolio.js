import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";

export class Portifolio extends Component {
  portItems = () => {
    const portArr = [];

    const portData = [
        {
            name: "Clicky Game",
            bg: "clicky.png",
            pageLink: "https://emersonscheffer.github.io/clickygame/",
            githubLink: "https://github.com/emersonscheffer/clickygame.git"
        },
        {
            name: "OTG - On The Game",
            bg: "otg.png",
            pageLink: "https://onthegame.herokuapp.com/",
            githubLink: "https://github.com/emersonscheffer/otg.git"
        },
        {
            name: "Google Book Search",
            bg: "book.png",
            pageLink: "https://books-search-google.herokuapp.com",
            githubLink: "https://github.com/emersonscheffer/BookSearch.git"
        },
        {
            name: "Square Kitchen",
            bg: "kitchen.png",
            pageLink: "https://nameless-everglades-26953.herokuapp.com/",
            githubLink: "https://github.com/emersonscheffer/Square-Kitchen-Project2.git"
        },
        {
            name: "Eat Da Burger",
            bg: "burger.png",
            pageLink: "https://sheltered-bastion-55816.herokuapp.com",
            githubLink: "https://github.com/emersonscheffer/BurgersToEat.git"
        },
    ]

    for (let index = 0; index < portData.length; index++) {
        portArr.push(<PortfolioItem key={index + 1} pageLink={portData[index].pageLink} gitLink={portData[index].githubLink} bg={portData[index].bg} name={portData[index].name}/>)
    }

    return portArr;
  };

  render() {
    return (
      <div id="portfolio-place">
        {this.portItems()}
      </div>
    );
  }
}

export default Portifolio;
