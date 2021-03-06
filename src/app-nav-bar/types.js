/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

// eslint-disable-next-line flowtype/no-weak-types
type ItemT = any;

export type MainNavItemT = {|
  active?: boolean,
  // eslint-disable-next-line flowtype/no-weak-types
  icon?: React.AbstractComponent<any>,
  item: ItemT,
  mapItemToNode?: ItemT => React.Node,
  mapItemToString: ItemT => string,
  nav?: MainNavItemT[],
  // eslint-disable-next-line flowtype/no-weak-types
  navExitIcon?: React.AbstractComponent<any>,
|};

export type UserNavItemT = {|
  active?: boolean,
  // eslint-disable-next-line flowtype/no-weak-types
  icon?: React.AbstractComponent<any>,
  item: ItemT,
  mapItemToNode?: ItemT => React.Node,
  mapItemToString: ItemT => string,
|};

export type UserMenuPropsT = {|
  userNav?: UserNavItemT[],
  username?: string,
  usernameSubtitle?: React.Node,
  userImgUrl?: string,
|};

export type AppNavBarPropsT = {|
  appDisplayName?: React.Node,
  appDisplayNameLink?: string,
  // eslint-disable-next-line flowtype/no-weak-types
  mainNav?: MainNavItemT[],
  onNavItemSelect: (params: {item: MainNavItemT | UserNavItemT}) => mixed,
  userNav?: UserNavItemT[],
  username?: string,
  usernameSubtitle?: React.Node,
  userImgUrl?: string,
|};
