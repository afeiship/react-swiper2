import './dev.scss';

import ReactSwiper2 from './main';
import ReactLazyimg from 'react-lazyimg'
import loadingImg from './assets/loading.gif';

/*===example start===*/

// install: npm install afeiship/react-swiper2 --save
// import : import ReactSwiper2 from 'react-swiper2'

class App extends React.Component{
  state = {
    activeIndex1:0,
    activeIndex2:0,
    activeIndex3:0,
    items1:[
      require('./assets/1_s.jpg'),
      require('./assets/2_s.jpg'),
    ],
    items2:[
      require('./assets/4_s.jpg'),
      require('./assets/5_s.jpg'),
      require('./assets/6_s.jpg')
    ]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }


  _change = e => {
    const {value} = e.target;
    this.setState({activeIndex1:value});
  };


  _change2 = e => {
    const {value} = e.target;
    this.setState({activeIndex2:value});
  };


  _change3 = e => {
    const {value} = e.target;
    this.setState({activeIndex3:value});
  };

  _onload = e => {
    console.log('onload..');
  };

  render(){
    return (
      <div className="hello-react-swiper2">
        <h2>DEMO with regular 4G</h2>
        <h4>Normal without lazyimg</h4>
        <ReactSwiper2 auto={2000} touchAngle={5} refs='rc' value={this.state.activeIndex1} onChange={this._change}>
          {
            this.state.items1.map((item,index)=>{
              return (
                <div className="bg-loading" key={index}><img src={item} /></div>
              );
            })
          }
        </ReactSwiper2>
        <div className="blank-50" />

        <h4>Lazy with fade mode</h4>
        <ReactSwiper2 refs='rc' onChange={this._change2} value={this.state.activeIndex2}>
          {
            this.state.items1.map((item,index)=>{
              return (
                <div className="bg-loading" key={index}><ReactLazyimg effect="fade" lazy={this.state.activeIndex2!==index} url={item} /></div>
              );
            })
          }
        </ReactSwiper2>

        <div className="blank-50" />
        <h4>Lazy with placeholder</h4>
        <ReactSwiper2 refs='rc' onChange={this._change3} value={this.state.activeIndex3}>
          {
            this.state.items1.map((item,index)=>{
              return (
                <div className="bg-loading" key={index}>
                  <ReactLazyimg effect="replace"
                  lazy={this.state.activeIndex3!==index}
                  placeholder={loadingImg}
                  url={item} /></div>
              );
            })
          }
        </ReactSwiper2>
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
