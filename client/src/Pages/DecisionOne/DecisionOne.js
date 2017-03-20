import React, { Component } from 'react';
import Page from '../../Components/Page';
import OpeningBlock from '../../Components/OpeningBlock';
import Footer from '../../Components/Footer';

class DecisionOne extends Component {
  componentDidMount() {
    console.log('hell');
  }

  navigateNext = evt => {
    evt.preventDefault();
    this.props.push('/insurance');
  };

  render() {
    return (
      <Page>
        <section className="content-block">
          <h1>Review</h1>
          <p className="review">
            In 2002 Mahindra Finance remained a captive finance arm  of parent M&M. Ramesh had to set the company on its next growth trajectory. What should he do?
          </p>

          <form className="review-form" id="review-one">
            <div className="input-group">
              <div className="radio-group">
                <input
                  id="review-status"
                  className="radio"
                  type="radio"
                  value="Status Quo"
                  name="review-one"
                />
                <label htmlFor="review-status" className="radio__label">
                  <span className="radio__appearance" />
                  <div className="radio__label-group">
                    <strong>Status Quo</strong>
                    <p>Continue as a support function for M&M vehicle sales</p>
                  </div>
                </label>
              </div>

              <div className="radio-group">
                <input
                  id="review-urban"
                  className="radio"
                  type="radio"
                  value="Move to Urban"
                  name="review-one"
                />
                <label htmlFor="review-urban" className="radio__label">
                  <span className="radio__appearance" />
                  <div className="radio__label-group">
                    <strong>Move to Urban</strong>
                    <p>Similar to competing non-banking finance companies</p>
                  </div>
                </label>
              </div>

              <div className="radio-group">
                <input
                  id="review-rural"
                  className="radio"
                  type="radio"
                  value="Go deeper into the rural market"
                  name="review-one"
                />
                <label htmlFor="review-rural" className="radio__label">
                  <span className="radio__appearance" />
                  <div className="radio__label-group">
                    <strong>Go deeper into the rural market</strong>
                    <p>Finance competitor vehicles</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="input-group">
              <label><strong>Explain</strong></label>
              <textarea />
            </div>

            <div className="input-group align-right">
              <button onClick={this.navigateNext} className="btn btn--primary">
                Submit
              </button>
            </div>
          </form>
        </section>
      </Page>
    );
  }
}

export default DecisionOne;
