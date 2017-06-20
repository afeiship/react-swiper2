import './dev.scss';

import ReactSwiper2 from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
