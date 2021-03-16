import React, { FC } from 'react';
import withObservables from '@nozbe/with-observables';
import { LineChart } from 'react-native-chart-kit';

import { observeWeights, Weight } from '../data/helpers';
import { chartConfig, chartStyles, windowWidth } from './styles';

const Chart: FC<{ weights: Weight[] }> = ({ weights }) => {
  if (weights.length < 1) {
    return null;
  }

  const labels: string[] = [];
  const data: number[] = [];

  weights.forEach((w) => {
    labels.push(`${w?.createdAt.getDate()}/${w.createdAt.getMonth() + 1}`);
  })