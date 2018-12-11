import React, { Component } from 'react';
import videos from './videos-scrubbed'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Subheader from '@material-ui/core/List';
import styled from 'styled-components';


const PageRoot = styled.div`
    display: 'flex';
    flex-wrap: 'wrap';
    justify-content: 'space-around';
`

const StyledGridList = styled(GridList)`
    overflow-y: 'auto';
`

const StyledGridListTileBar = styled(GridListTileBar)`
    text-align: 'left';
    padding: '1px';
    margin: '1px';
    height: '20px';
`

const LightBox = styled.div`
  display: ${props => props.on?'block':'none'};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`

const LightBoxContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 600px;
  max-width: 1200px;
`

const CloseButton = styled.span`
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;

  :hover, :focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }
`

const VideoIframe = (props) => {
      const autoplay = props.autoplay || true;
      function url(id) {
        return `https://www.youtube.com/embed/${id}${autoplay?'?autoplay=1':''}?rel=0`;
      }

      return (
            <iframe title={props.id}
                width="560"
                height="315"
                src={url(props.id)}
            />
        );
};


const StyledVideoIframe = styled(VideoIframe)`
    display: ${props => props.id?'block':'none'};
    max-width: '100%';
    position: 'absolute';
    left: 0;
    right: 0;
    margin: 'auto';
    top: '50%';
    transform: 'translateY(-50%)';
`


const Modal = (props) => 
  <LightBox on={props && props.video} onClick={() => props.openBox()}>
    <CloseButton onClick={() => props.openBox()}>&times;</CloseButton>
    <LightBoxContent>
      <StyledVideoIframe id={props.video && props.video.id} autoplay={false} />
    </LightBoxContent>
  </LightBox>


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.openBox = this.openBox.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  openBox = (x) => {
    this.setState({...this.state, video: x?x:null,})
  }

  handleKeyPress(e) {
    this.setState({currentKey: e.keyCode});
    if(e.keyCode === 27) {
      this.openBox();
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    this.setState({...this.state, loading:false})
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }


  render() {

    const byMonth = videos.reduce( (acc, cur, idx) => {
      const name = `${cur.date.monthName} ${cur.date.year}`;
      if (!acc[name]) {
        acc[name] = [];
      }
      acc[name].unshift({...cur, idx: idx});

      return acc;

    }, {}
  );



  const content = <PageRoot>
      {Object.keys(byMonth).map((a) => (

        <StyledGridList
          key={"calendar " + a}
          cellHeight={90}
          cols={7}
        >

        <GridListTile key={"subheader " + a} cols={7} style={{ height: 'auto' }}>
          <Subheader component="div"><h2>{a}</h2></Subheader>
        </GridListTile>
          {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",].map(dayOfWeek => 
              <GridListTile key={a+dayOfWeek} style={{ height: 'auto' }}><h5>{dayOfWeek}</h5></GridListTile>              
          )}

          {Array.apply('', {length: byMonth[a][0].date.dayOfWeek}).map((x,i) => <GridListTile key={"empty" + i + a}>{x}</GridListTile> )}
          {byMonth[a].map((x) => (
            <GridListTile key={x.id} onClick={() => this.openBox(x)}>
              <img src={x.thumb} alt="thumbnail" />
              <StyledGridListTileBar title={x.date.day} />
            </GridListTile>
          ))}
        </StyledGridList>

      ))}
        <Modal openBox={this.openBox} video={this.state.video} />

    </PageRoot>

  

    return (

      <React.Fragment>
        <h1>Nice Day for a Run</h1>
        <h3>I recorded a short video about my run every day in 2017.</h3>
        {this.state.loading?"loading....":content}
      </React.Fragment>

    );
  }
}

export default App;
