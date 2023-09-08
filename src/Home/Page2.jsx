import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Icon } from 'antd';

import Tetris from './technology-comp/Tetris';
import Column from './technology-comp/Column';
import Coordinate from './technology-comp/Coordinate';
import Building from './technology-comp/Building';

const pageData = [
  {
    title: 'Ant Design',
    content: 'Un lenguaje de diseño de UI y su implementación tecnológica orientado a aplicaciones empresariales',
    links: [
      <a key="0" href="https://ant.design" target="_blank">Web&nbsp;&nbsp;<Icon type="right" /></a>,
      <a key="1" href="https://mobile.ant.design" target="_blank">Móvil&nbsp;&nbsp;<Icon type="right" /></a>,
      <a key="2" href="https://pro.ant.design" target="_blank">Pro&nbsp;&nbsp;<Icon type="right" /></a>,
    ],
    Bg: Tetris,
  },
  {
    title: 'AntV',
    content: 'Una solución de visualización de datos simple, profesional y con posibilidades infinitas',
    links: (<a href="https://antv.alipay.com" target="_blank">Ver detalles&nbsp;&nbsp;<Icon type="right" /></a>),
    Bg: Column,
  },
  {
    title: 'AntG',
    content: 'Una experiencia interactiva en Internet inteligente, natural y sorprendente',
    links: (<a>Próximamente</a>),
    Bg: Coordinate,
  },
  {
    title: 'Egg',
    content: 'Node.js y Koa, diseñados para frameworks y aplicaciones empresariales',
    links: (<a href="https://eggjs.org" target="_blank">Ver detalles&nbsp;&nbsp;<Icon type="right" /></a>),
    full: true,
    Bg: Building,
  },
];

export default class Design extends React.PureComponent {
  state = {
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  }
  render() {
    const { isMobile } = this.props;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8, xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => { this.onMouseEnter(item.title); }}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="page2-item-bg">
              {item.Bg && React.createElement(item.Bg, {
                hover: !isMobile && this.state.hover === item.title,
                isMobile,
              })}
            </div>
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">
                {item.links}
              </p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <div className="page-wrapper page2">
        <div className="page">
          <h1>Tecnología simple y confiable</h1>
          <i />
          <OverPack className="page2-content">
            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}