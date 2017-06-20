import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import Swipe from './swipe';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
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
  /*===properties end===*/

  constructor(props){
    super(props);
    this.state = {
      activeIndex: props.startSlide
    };
  }

  componentDidMount() {
    const {root} = this.refs;
    const {className,...options} = this.props;
    this.swiper = Swipe(root,objectAssign(options,{
      callback: this._onChange
    }) );
  }

  get dots(){
    const {children} = this.props;
    const {activeIndex} = this.state;
    let arr = new Array(children.length).join().split(',');
    arr = Object.keys(arr);
    return arr.map(i=>{
      return <span key={i} data-active={this.state.activeIndex == i} />
    });
  }

  _onChange = (inIndex,inElement) =>{
    const {onChange} = this.props;
    this.setState({ activeIndex: inIndex },()=>{
      onChange({
        target:{
          value: inIndex
        }
      });
    });
  };

  render(){
    const {className,children,...props} = this.props;
    return (
      <section ref="root" className={classNames('react-swiper2',className)}>
        <div className="react-swiper2-wrapper">{children}</div>
        <div className="react-swiper2-dots">{this.dots}</div>
      </section>
    );
  }
}
