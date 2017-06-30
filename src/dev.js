import './dev.scss';

import ReactSwiper2 from './main';
import ReactLazyimg from 'react-lazyimg'
import loadingImg from './assets/loading.gif';

/*===example start===*/

// install: npm install afeiship/react-swiper2 --save
// import : import ReactSwiper2 from 'react-swiper2'

class App extends React.Component{
  state = {
    activeIndex:0,
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
        <ReactSwiper2 refs='rc' onChange={this._change}>
          {
            this.state.items1.map((item,index)=>{
              return (
                <div className="bg-loading" key={index}><ReactLazyimg effect="fade" lazy={this.state.activeIndex!==index} url={item} /></div>
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
