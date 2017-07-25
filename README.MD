# react-swiper2
> Another highPerformance swiper.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    startSlide:PropTypes.number,
    speed:PropTypes.number,
    touchAngle:PropTypes.number,
    auto:PropTypes.number,
    dot:PropTypes.bool,
    continuous:PropTypes.bool,
    disableScroll:PropTypes.bool,
    stopPropagation:PropTypes.bool,
    onChange:PropTypes.func,
    onTransitionEnd:PropTypes.func,
  };

  static defaultProps = {
    startSlide: 0,
    speed: 400,
    touchAngle: 45,
    auto: 0,
    dot: true,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    onChange: noop,
    onTransitionEnd: noop
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-swiper2 --save
// import : import ReactSwiper2 from 'react-swiper2'

class App extends React.Component{
  state = {
    activeIndex:0,
    items1:[
      require('./assets/1_s.jpg'),
      require('./assets/2_s.jpg'),
      require('./assets/3_s.jpg'),
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
    this.setState({activeIndex:value});
  };

  _onload = e => {
    console.log('onload..');
  };

  render(){
    return (
      <div className="hello-react-swiper2">
        <h2>DEMO with regular 4G</h2>
        <h4>Normal without lazyimg</h4>
        <ReactSwiper2 refs='rc' onChange={this._change}>
          {
            this.state.items2.map((item,index)=>{
              return (
                <div className="bg-loading" key={index}><ReactLazyimg effect="fade" url={item} /></div>
              );
            })
          }
        </ReactSwiper2>
        <div className="blank-50" />

        <h4>Lazy with fade mode</h4>
        <ReactSwiper2 refs='rc' onChange={this._change}>
          {
            this.state.items1.map((item,index)=>{
              return (
                <div className="bg-loading" key={index}><ReactLazyimg effect="fade" lazy={this.state.activeIndex!==index} url={item} /></div>
              );
            })
          }
        </ReactSwiper2>

        <div className="blank-50" />
        <h4>Lazy with placeholder</h4>
        <ReactSwiper2 refs='rc' onChange={this._change}>
          {
            this.state.items1.map((item,index)=>{
              return (
                <div className="bg-loading" key={index}>
                  <ReactLazyimg effect="replace"
                  lazy={this.state.activeIndex!==index}
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

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

