import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import Swiper from 'swiper';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxRange from 'next-range';


export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className : PropTypes.string,
    value : PropTypes.number,
    speed : PropTypes.number,
    touchAngle : PropTypes.number,
    auto : PropTypes.number,
    dot : PropTypes.bool,
    continuous : PropTypes.bool,
    disableScroll : PropTypes.bool,
    stopPropagation : PropTypes.bool,
    onChange : PropTypes.func,
    onTransitionEnd : PropTypes.func,
  };

  static defaultProps = {
    value : 0,
    speed : 400,
    touchAngle : 45,
    auto : 0,
    dot : true,
    continuous : true,
    disableScroll : false,
    stopPropagation : false,
    onChange : noop,
    onTransitionEnd : noop
  };
  /*===properties end===*/

  constructor(inProps){
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  get dots(){
    const { children } = this.props;
    const { value } = this.state;
    const items = NxRange.integer( 0, children.length );
    return items.map(i=>{
      return <span key={i} data-active={value == i} />
    });
  }

  componentDidMount() {
    const { root } = this.refs;
    const { className, onTransitionEnd, ...options } = this.props;
    const { value } = this.state;
    const swiperOptions = objectAssign( options, {
      callback: this._onChange,
      transitionEnd: onTransitionEnd,
      startSlide: value
    });
    this.swiper = Swiper(root,swiperOptions);
  }

  componentWillReceiveProps(inProps){
    const { value } = inProps;
    if( value !== this.state.value ){
      this.setState({ value });
    }
  }

  componentWillUnmount() {
    this.swiper.kill();
    this.swiper = null;
  }

  _onChange = (value) =>{
    const { onChange } = this.props;
    const target = { value };
    this.setState(target,()=>{
      onChange({ target });
    });
  };

  render(){
    const { className, children, dot, ...props } = this.props;
    return (
      <section ref="root" className={ classNames('react-swiper2',className) }>
        <div className="react-swiper2-wrapper">{children}</div>
        { dot && <div className="react-swiper2-dots">{ this.dots }</div> }
      </section>
    );
  }
}
