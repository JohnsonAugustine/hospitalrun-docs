import React from 'react';

import { storiesOf } from '@storybook/react';
import ReadmePage from '../pages/ReadmePage'

storiesOf('@hospitalrun-org/docs', module)
    .add('ReadmePage', () => <ReadmePage markdown={require("../templates/Home.md")}/>)
