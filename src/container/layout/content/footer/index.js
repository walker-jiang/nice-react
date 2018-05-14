import React, {Component} from 'react';

import Photographers from './footerItems/photographers';
import Brand from './footerItems/brand';

export default class Footer extends Component {

  render() {
    return (
      <div>
        <Photographers />
        <Brand />
      </div>
    );
  }
}
