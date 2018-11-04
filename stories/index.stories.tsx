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
  .add('<Marquee direction="right">right</Marquee>', () => (
    <Marquee direction="right">right</Marquee>
  ))
  .add('<Marquee direction="down">down</Marquee>', () => (
    <Marquee direction="down">down</Marquee>
  ))
  .add('<Marquee behavior=slide>slideslideslideslide</Marquee>', () => (
    <Marquee behavior="slide">slideslideslideslide</Marquee>
  ))
  .add(
    '<Marquee behavior=alternate>alternatealternatealternatealternate</Marquee>',
    () => (
      <Marquee behavior="alternate" scrollamount={50}>
        alternatealternatealternatealternate
      </Marquee>
    )
  )
  .add(
    '<Marquee behavior="alternate" scrollamount={50} direction=up>up alternate</Marquee>',
    () => (
      <Marquee
        behavior="alternate"
        scrollamount={20}
        direction="up"
        height="300px"
      >
        alternatealternatealternatealternate
      </Marquee>
    )
  )
  .add('<Marquee bgcolor="red">red</Marquee>', () => (
    <Marquee bgcolor="red">red</Marquee>
  ))
  .add('<Marquee bgcolor="blue">blue</Marquee>', () => (
    <Marquee bgcolor="blue">blue</Marquee>
  ))
  .add('<Marquee height="100%" direction="up">height="100%"</Marquee>', () => (
    <Marquee height="100%" direction="up">
      height="100%" direction="up"
    </Marquee>
  ))
  .add(
    '<Marquee height="100%" direction="down">height="100%"</Marquee>',
    () => (
      <Marquee height="100%" direction="down">
        height="100%" direction="down"
      </Marquee>
    )
  )
  .add('<Marquee height="70px" direction="up">height="70px"</Marquee>', () => (
    <Marquee height="70px" direction="up">
      height="70px" direction="up"
    </Marquee>
  ))
  .add('<Marquee hspace={55}>Marquee hspace={55}</Marquee>', () => (
    <Marquee hspace={55} width="400px">
      hspace=
      {55} width="400px" left
    </Marquee>
  ))
  .add(
    '<Marquee vspace={55} direction="up">Marquee vspace={55}</Marquee>',
    () => (
      <Marquee vspace={55} height="400px" direction="up">
        vspace=
        {55} height="400px" direction="up"
      </Marquee>
    )
  )
  .add(
    '<Marquee scrollamount={3}>scrollamount={3}ちょっと遅いよ</Marquee>',
    () => (
      <Marquee scrollamount={3}>
        scrollamount=
        {3} ちょっと遅いよ
      </Marquee>
    )
  )
  .add(
    '<Marquee scrollamount={10}>scrollamount={10}ちょっと早いよ</Marquee>',
    () => (
      <Marquee scrollamount={10}>
        scrollamount=
        {10} ちょっと早いよ
      </Marquee>
    )
  )
  .add(
    '<Marquee scrollamount={300}>scrollamount={300} めっちゃ早いよ</Marquee>',
    () => (
      <Marquee scrollamount={300}>
        scrollamount=
        {300} めっちゃ早いよ
      </Marquee>
    )
  )
  .add('<Marquee scrolldelay={3}>scrolldelay={3}3delay</Marquee>', () => (
    <Marquee scrolldelay={3}>
      scrolldelay=
      {3} delay
    </Marquee>
  ))
  .add('<Marquee scrolldelay={100}>scrolldelay={100}100delay</Marquee>', () => (
    <Marquee scrolldelay={100}>
      scrolldelay=
      {100} delay
    </Marquee>
  ))
  .add(
    '<Marquee scrolldelay={1000}>scrolldelay={1000}1000delay</Marquee>',
    () => (
      <Marquee scrolldelay={1000}>
        scrolldelay=
        {1000} delay
      </Marquee>
    )
  )
  .add(
    '<Marquee scrolldelay={3} truespeed="true">scrolldelay={3} truespeed="true"3delay</Marquee>',
    () => (
      <Marquee scrolldelay={3} truespeed="true">
        scrolldelay=
        {3} truespeed="true" delay
      </Marquee>
    )
  )
  .add('marquee in marquee', () => (
    <Marquee direction="up" height="400px">
      <Marquee direction="left" width="800px">
        marquee in marquee
      </Marquee>
    </Marquee>
  ))
  .add('marquee in marquee in marquee', () => (
    <Marquee direction="up" height="400px">
      <Marquee direction="left" width="800px">
        <Marquee direction="right" width="300px">
          marquee in marquee in marquee
        </Marquee>
      </Marquee>
    </Marquee>
  ));
