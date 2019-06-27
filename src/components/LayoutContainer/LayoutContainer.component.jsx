import React from 'react';
import classNames from 'classnames';

const LayoutContainer = ({ children, main }) => <div className={classNames('container', { main })}>{children}</div>;

export default LayoutContainer;
