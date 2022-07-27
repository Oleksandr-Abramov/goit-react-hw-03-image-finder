import { Component } from 'react';
import s from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseByEsc);
  }
  handleCloseByEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.close();
    }
  };

  handleCloseByDrope = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.close();
    }
  };
  render() {
    const { largeImg } = this.props;
    return (
      <div className={s.overlay} onClick={this.handleCloseByDrope}>
        <div className={s.modal}>
          <img src={largeImg} alt={'Picrute'} width="640" />
        </div>
      </div>
    );
  }
}
