import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import logo from './react.svg';
import './Home.css';

import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(1232);
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>{t('message.welcome')}</h2>
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('en')}>en</button>
          <button onClick={() => changeLanguage('vi')}>vi</button>
          <button onClick={() => changeLanguage('enn')}>enn</button>
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

export default withNamespaces('translations')(Home)
