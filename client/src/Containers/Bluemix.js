import React, { Component } from 'react';
import { Icon } from '@console/bluemix-components-react';

import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import Content from '../Components/Content';

export default class Bluemix extends Component {
  state = {
    appMenuOpen: false,
    globalMenuOpen: false,
    globalMenuPane: 'app',
  };

  toggleAppMenu = () => {
    this.setState({
      appMenuOpen: !this.state.appMenuOpen,
      globalMenuOpen: false,
    });
  };

  toggleGlobalMenu = () => {
    this.setState({
      globalMenuOpen: !this.state.globalMenuOpen,
      appMenuOpen: false,
    });
  };

  render() {
    const appSwitcher = [
      {
        name: 'APIs',
        link: 'api',
      },
      {
        name: 'Application Services',
        link: 'app-services',
      },
      {
        name: 'Block Chain',
        link: 'block-chain',
      },
      {
        name: 'Cloud Foundry',
        link: 'cloud-foundry',
      },
      {
        name: 'Containers',
        link: 'containers',
      },
      {
        name: 'Data & Analytics',
        link: 'data',
      },
      {
        name: 'DevOps',
        link: 'devops',
      },
      {
        name: 'Integrate',
        link: 'integration',
      },
      {
        name: 'Internet of Things',
        link: 'iot',
      },
      {
        name: 'Mobile and Web',
        link: 'mobile',
      },
      {
        name: 'OpenWhisk',
        link: 'open-whisk',
      },
      {
        name: 'Security',
        link: 'security',
      },
      {
        name: 'Watson',
        link: 'watson',
      },
      {
        name: 'Infrastructure',
        link: 'infrastructure',
      },
    ];

    const createApps = appSwitcher.map(app => {
      return (
        <li key={app.name}>
          <Icon name={app.link} description={app.name} />
          <p>{app.name}</p>
        </li>
      );
    });

    const cloudantLogo =
      'https://camo.githubusercontent.com/00b31cb8c58e5b404ec9d83da6cec7089e17b606/68747470733a2f2f636c6f7564616e742e636f6d2f77702d636f6e74656e742f75706c6f6164732f636c6f7564616e745f6c6f676f5f69636f6e5f6576656e74732e706e67';

    const bluemixLogo =
      '//ace-common-production-red.cdn.us-south.s-bluemix.net/cache/784-1688551103/api/v4/img/bluemix-logo-2016-feb.svg';
    const bluemixTitle = 'IBM Bluemix';
    const bluemixProductNav = (
      <ul className="product-nav-list">
        <li>Docs</li>
        <li>Catalog</li>
        <li>Support</li>
        <li>Manage</li>
      </ul>
    );

    const { appNav, grid } = this.props;
    const { appMenuOpen, globalMenuOpen } = this.state;

    return (
      <div className="container">
        <Header
          bgColor="#152935"
          productLogo={bluemixLogo}
          productTitle={bluemixTitle}
          productNav={bluemixProductNav}
          className="bluemix"
          grid={grid}
          appNav={appNav}
          toggleAppMenu={this.toggleAppMenu}
          toggleGlobalMenu={this.toggleGlobalMenu}
        />

        {grid
          ? <div>
              <SideNav
                toggleMenu={this.toggleAppMenu}
                open={appMenuOpen}
                position="left"
              >
                <div className="side-nav__content">
                  <ul className="list-view">
                    <li>Docs</li>
                    <li>Catalog</li>
                    <li>Support</li>
                    <li>Manage</li>
                  </ul>
                </div>
              </SideNav>

              <SideNav
                toggleMenu={this.toggleGlobalMenu}
                open={globalMenuOpen}
                position="right"
              >
                <div className="side-nav__content">
                  <ul className="list-view">{createApps}</ul>
                </div>
              </SideNav>
            </div>
          : <SideNav
              toggleMenu={this.toggleGlobalMenu}
              open={globalMenuOpen}
              position="left"
            >
              <div className="side-nav__content">
                <ul className="list-view">{createApps}</ul>
              </div>
            </SideNav>}

        <Content />
      </div>
    );
  }
}
