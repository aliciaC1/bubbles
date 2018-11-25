import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ImageCard from '../ImageCard';

const src = 'https://www.sonomamag.com/wp-content/uploads/2018/05/shutterstock_352176329.jpg';
const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <ImageCard/>
      </Grid.Column>
      <Grid.Column>
        <ImageCard/>  
      </Grid.Column>
      <Grid.Column>
        <ImageCard/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <ImageCard/>
      </Grid.Column>
      <Grid.Column>
        <ImageCard/>  
      </Grid.Column>
      <Grid.Column>
        <ImageCard/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleDividedNumber