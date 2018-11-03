import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Marquee from '../src/main.tsx';

storiesOf('Button', module)
  .add('normal marquee', () => <Marquee>aaaaaaaa</Marquee>)
  .add('upside', () => <Marquee direction="up">aaaaaaaa</Marquee>)
  .add('red', () => (
    <Marquee direction="up" bgcolor="red" height="30px">
      aaaaaaaa
    </Marquee>
  ))
  .add('ireko', () => (
    <Marquee direction="up" height="400px">
      <Marquee direction="left" width="800px">
        aaaaaaaa
      </Marquee>
    </Marquee>
  ));
