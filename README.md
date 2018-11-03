# remarquee

high compatibility react based Maruee tag

## env

```
$ node -v
v10.11.0

$ yarn -v
1.10.1
```

## setup

```
$ yarn install

$ yarn run start:local

$ yarn run storybook
```

## how to use

```{index.tsx}
import Marquee from '../src/main.tsx';

<Marquee>HELLOWORLD</Marquee>

<Marquee height='300px' direction='down'>
  <Marquee direction='right'>NESTED</Marquee>
</Marquee>
```
