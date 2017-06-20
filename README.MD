# react-swiper2
> Another highPerformance swiper.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    startSlide:PropTypes.number,
    speed:PropTypes.number,
    auto:PropTypes.number,
    continuous:PropTypes.bool,
    disableScroll:PropTypes.bool,
    stopPropagation:PropTypes.bool,
    onChange:PropTypes.func,
    transitionEnd:PropTypes.func,
  };

  static defaultProps = {
    startSlide: 0,
    speed: 400,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    onChange: noop,
    transitionEnd: noop
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-swiper2 --save
// import : import ReactSwiper2 from 'react-swiper2'

class App extends React.Component{
  state = {
    items1:[
      require('./assets/1_s.jpg'),
      require('./assets/2_s.jpg'),
      require('./assets/3_s.jpg'),
      require('./assets/4_s.jpg'),
    ]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-swiper2">
        <ReactSwiper2 refs='rc'>
          {
            this.state.items1.map((item,index)=>{
              return (
                <div key={index} ><img src={item} alt=""/></div>
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

