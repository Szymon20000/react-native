/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import type {HostComponent} from '../../Renderer/shims/ReactNativeTypes';

import type {
  DirectEventHandler,
  Float,
  WithDefault,
} from '../../Types/CodegenTypes';
import type {ColorValue} from '../../StyleSheet/StyleSheet';
import type {ViewProps} from '../View/ViewPropTypes';

type NativeProps = $ReadOnly<{|
  ...ViewProps,

  /**
   * Whether the pull to refresh functionality is enabled.
   */
  enabled?: WithDefault<boolean, true>,
  /**
   * The colors (at least one) that will be used to draw the refresh indicator.
   */
  colors?: ?$ReadOnlyArray<ColorValue>,
  /**
   * The background color of the refresh indicator.
   */
  progressBackgroundColor?: ?ColorValue,
  /**
   * Size of the refresh indicator.
   */
  size?: WithDefault<'default' | 'large', 'default'>,
  /**
   * Progress view top offset
   */
  progressViewOffset?: WithDefault<Float, 0>,

  /**
   * Called when the view starts refreshing.
   */
  onRefresh?: ?DirectEventHandler<null>,

  /**
   * Whether the view should be indicating an active refresh.
   */
  refreshing: boolean,
|}>;

type NativeType = HostComponent<NativeProps>;

interface NativeCommands {
  +setNativeRefreshing: (
    viewRef: React.ElementRef<NativeType>,
    value: boolean,
  ) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeRefreshing'],
});

export default (codegenNativeComponent<NativeProps>(
  'AndroidSwipeRefreshLayout',
): NativeType);
