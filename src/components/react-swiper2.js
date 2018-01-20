import './style.scss';

import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import Swiper from 'swiper';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className : PropTypes.string,
    startSlide : PropTypes.number,
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
    startSlide : 0,
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

  get dots(){
    const { children, value } = this.props;
    let arr = new Array(children.length).join().split(',');
    arr = Object.keys(arr);
    return arr.map(i=>{
      return <span key={i} data-active={value == i} />
    });
  }

  componentDidMount() {
    const { root } = this.refs;
    const { className, onTransitionEnd, ...options } = this.props;
    const swiperOptions = objectAssign( options, {
      callback: this._onChange,
      transitionEnd: onTransitionEnd
    });
    this.swiper = Swiper(root,swiperOptions);
  }

  componentWillUnmount() {
    this.swiper.kill();
    this.swiper = null;
  }

  _onChange = (inIndex) =>{
    const { onChange } = this.props;
    onChange({ target:{ value: inIndex } });
  };

  render(){
    const { className, children, dot, ...props } = this.props;
    return (
      <section ref="root" className={classNames('react-swiper2',className)}>
        <div className="react-swiper2-wrapper">{children}</div>
        {dot && <div className="react-swiper2-dots">{this.dots}</div>}
      </section>
    );
  }
}
