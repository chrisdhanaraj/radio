import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  OverflowMenu,
  OverflowMenuItem,
  Button,
  Search,
} from '@console/bluemix-components-react';

export default class Dashboard extends Component {
  state = {
    search: '',
  };

  handleChange = evt => {
    this.setState({
      search: evt.target.value,
    });
  };

  render() {
    const data = [
      {
        cardTitle: 'My Cloudant Instance',
        cardInfo: ['Cloudant NoSQL DB', 'Shared'],
        buttonText: 'View Credentials',
        docsText: 'Docs',
        cardLink: '/cloudant',
      },
      {
        cardTitle: 'Something else',
        cardInfo: ['Cloudant NoSQL DB', 'Shared'],
        buttonText: 'View Credentials',
        docsText: 'Docs',
        cardLink: '/cloudant',
      },
      {
        cardTitle: 'My Cloudant Instance 3',
        cardInfo: ['Cloudant NoSQL DB', 'Shared'],
        buttonText: 'View Credentials',
        docsText: 'Docs',
        cardLink: '/cloudant',
      },
    ];

    const cards = data.map(item => (
      <Card
        key={item.cardTitle}
        onClick={() => {
          window.location = item.cardLink;
        }}
      >
        <CardContent cardTitle={item.cardTitle} cardInfo={item.cardInfo} />
        <CardFooter>
          <Button className="bx--card-footer__credentials-button">
            {item.buttonText}
          </Button>
          <a href="#" className="bx--card-footer__docs-link">
            {item.docsText}
          </a>
        </CardFooter>
      </Card>
    ));

    return (
      <div className="dashboard">
        <Search
          onChange={this.handleChange}
          className="some-class"
          id="search-1"
          labelText="Search"
          placeHolderText="Search Bluemix Offerings"
        />
        <div className="dashboard-content">
          {cards}
        </div>
      </div>
    );
  }
}
