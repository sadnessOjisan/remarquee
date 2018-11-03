import * as React from "react";
import { storiesOf } from '@storybook/react';
import Marquee from '../src/main.tsx'

storiesOf('Button', module)
  .add('normal marquee', () => 
    <Marquee>aaaaaaaa</Marquee>
  );
