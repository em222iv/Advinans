import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getTweets } from '../actions/tweets';
import { SpringGrid,CSSGrid, measureItems, makeResponsive , layout } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  }
  componentDidMount() {
    this.props.getTweets();
  }
  componentWillReceiveProps = (props) => {
    const { tweets } = props;
    this.setState({tweets})
    setTimeout(()=>{ props.getTweets() }, 30000)
  }
  render() {
    const { tweets } = this.state;
    return (
      <div className="tweets">
      <div style={styles.title}>
        <h1>#HAIKU Getter</h1>
      </div>
      <Grid
        component="ul"
        columns={5}
        columnWidth={200}
        gutterWidth={5}
        gutterHeight={5}
        layout={layout.pinterest}
        duration={800}
        easing="ease-out"
        style={{margin:'auto'}}
      >
        {tweets.map((tweet,i) => (
          <li key={i} style={{margin:20,listStyle: 'none'}}>
            <div style={{backgroundColor:'white',border:'1px solid black',maxWidth:200}}>


            <div style={styles.divider}></div>

            <div style={styles.row}>
              <div style={{margin:'auto',height:40,width:40,backgroundImage: 'url(' + tweet.user.profile_image_url_https + ')'}}></div>
            </div>

            <div style={styles.row}>
              <div style={styles.title}>{tweet.user.name}</div>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.row}>
              <div style={styles.text}>{tweet.text}</div>
            </div>

            </div>
          </li>
        ))}
      </Grid>
      </div>
    );
  }
}
let styles = {
  divider: {
    borderBottom:'1px solid grey',
    margin:10
  },
  row: {
    display:'inline-block',
    width:200
  },
  title: {
    textAlign:'center'
  },
  text: {
    margin:10
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  };
};

export default connect(mapStateToProps, {
    getTweets,
  })(Tweets);
