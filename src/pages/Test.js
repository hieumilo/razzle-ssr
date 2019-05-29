import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import logo from './../react.svg';
import { incrementCount, decrementCount } from './../store/actions/count'

import { connect } from 'react-redux'

class Test extends Component {
  clickIncrease = () => {
    this.props.incrementCount()
  }
  clickDecrease = () => {
    this.props.decrementCount()
  }
  render() {
    const { t, i18n } = this.props;
    console.log(1232);
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    console.log(this.props);
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>TEST {t('message.welcome')}</h2>
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('en')}>en</button>
          <button onClick={() => changeLanguage('vi')}>vi</button>
          <button onClick={() => changeLanguage('enn')}>enn</button>
        </div>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/test'}>test</Link>
          <Link to={'/private'}>private</Link>
        </div>
        <div>
          count: {this.props.count.count}
          <button type="button" className="btn btn-primary" onClick={this.clickIncrease}>+</button>
          <button type="button" className="btn btn-primary" onClick={this.clickDecrease}>-</button>
        </div>
        <div className="Home-intro">
          <Trans i18nKey="guideline">
            To get started, edit <code>src/App.js</code> or <code>src/Home.js</code> and save to
            reload.
          </Trans>
        </div>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { count } = state

  return {count}
}

export default connect(mapStateToProps, {incrementCount, decrementCount})(withNamespaces('translations')(Test))
