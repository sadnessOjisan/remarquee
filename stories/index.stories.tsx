import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Marquee from '../src/main.tsx';

storiesOf('marquee', module)
  .add('<Marquee>normal marquee</Marquee>', () => (
    <Marquee>normal marquee</Marquee>
  ))
  .add('<Marquee direction="up">upside</Marquee>', () => (
    <Marquee direction="up">upside</Marquee>
  ))
  .add('red', () => (
    <Marquee direction="up" bgcolor="red" height="30px">
      aaaaaaaa
    </Marquee>
  ))
  .add('hspace left', () => (
    <Marquee hspace={55}>hspacehspacehspacehspace</Marquee>
  ))
  .add('hspace right', () => (
    <Marquee hspace={55} direction="right">
      hspacehspacehspacehspace
    </Marquee>
  ))
  .add('vspace up', () => (
    <Marquee vspace={55} direction="up" height="300px">
      vspacevspacevspacevspace
    </Marquee>
  ))
  .add('vspace down', () => (
    <Marquee vspace={55} direction="down">
      vspacevspacevspacevspace
    </Marquee>
  ))
  .add('ireko', () => (
    <Marquee direction="up" height="400px">
      <Marquee direction="left" width="800px">
        aaaaaaaa
      </Marquee>
    </Marquee>
  ));
