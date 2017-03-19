import React, { Component } from 'react';
import Page from '../../Components/Page';
import MainHeading from '../../Components/MainHeading';
import ContentSection from '../../Components/ContentSection';
import Footer from '../../Components/Footer';

class Introduction extends Component {
  componentDidMount() {
    window.addEventListener('mouseup', evt => {
      const selected = window.getSelection();
      const text = selected.toString();
    });
  }

  render() {
    return (
      <Page className="introduction">
        <div className="content">
          <div className="introduction-header">
            <h1 className="glegoo mega">Mahindra Finance</h1>
            <h2 className="glegoo alpha">Creating New Markets</h2>
            <p>90 min read / 2 decisions</p>
          </div>
          <div>
            <p>
              This case traces the journey of Mahindra Finance, a leading finance company in India, over two decades.
              {' '}
              During this period, the company had found itself at several crucial decision-making junctures. The strategic
              {' '}
              choices made by the top management team led the company to achieve exponential growth rates, but not without challenges!
            </p>

            <p>
              Your learning objectives as you begin this journey are understanding how to create new markets and how to capture growth
              {' '}
              in a highly competitive environment.
            </p>
          </div>

          <Footer forwardText="Start Reading" forwardLink="/history" />
        </div>
      </Page>
    );
  }
}

export default Introduction;
