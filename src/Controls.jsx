import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
  render() {
    const {
      plusBtnContents,
      minusBtnContents,
      gisBtnContents,
      toggleSpotBtnContents,
      btnClass,
      plusBtnClass,
      minusBtnClass,
      gisBtnClass,
      toggleSpotBtnClass,
      controlsClass,
      scale,
      minScale,
      maxScale,
      onClickPlus,
      onClickMinus,
      onClickGIS,
      onClickToggleSpot,
      disableZoom
    } = this.props;

    const btnStyle = { width: 30, paddingTop: 5, marginBottom: 5 };
    const controlsStyle = controlsClass ? undefined : { position: 'absolute', right: 10, top: 10 };

    function plusHandler(e) {
      e.preventDefault();
      e.target.blur();
      if (disableZoom) return;
      onClickPlus();
    }

    function minusHandler(e) {
      e.preventDefault();
      e.target.blur();
      if (disableZoom) return;
      onClickMinus();
    }

    // console.log('react-map-interaction Controls', gisBtnContents, onClickGIS)
    return (
      <div style={controlsStyle} className={controlsClass}>
        <div>
          <button
            ref={(node) => { this.plusNode = node; }}
            onClick={plusHandler}
            onTouchEnd={plusHandler}
            className={[
              btnClass ? btnClass : '',
              plusBtnClass ? plusBtnClass : '',
            ].join(' ')}
            type="button"
            style={(btnClass || plusBtnClass) ? undefined : btnStyle}
            disabled={disableZoom || scale >= maxScale}
          >
            {plusBtnContents}
          </button>
        </div>
        <div>
          <button
            ref={(node) => { this.minusNode = node; }}
            onClick={minusHandler}
            onTouchEnd={minusHandler}
            className={[
              btnClass ? btnClass : '',
              minusBtnClass ? minusBtnClass : '',
            ].join(' ')}
            type="button"
            style={(btnClass || minusBtnClass) ? undefined : btnStyle}
            disabled={disableZoom || scale <= minScale}
          >
            {minusBtnContents}
          </button>
        </div>
        {onClickGIS && (
          <div>
            <button
                ref={(node) => { this.gisNode = node; }}
                onClick={onClickGIS}
                onTouchEnd={onClickGIS}
                className={[
                  btnClass ? btnClass : '',
                  gisBtnClass ? gisBtnClass : '',
                ].join(' ')}
                type="button"
                style={(btnClass || gisBtnClass) ? undefined : btnStyle}
            >
              {gisBtnContents}
            </button>
          </div>
        )}
        {onClickToggleSpot && (
            <div>
              <button
                  ref={(node) => { this.gisNode = node; }}
                  onClick={onClickToggleSpot}
                  onTouchEnd={onClickToggleSpot}
                  className={[
                    btnClass ? btnClass : '',
                    toggleSpotBtnClass ? toggleSpotBtnClass : '',
                  ].join(' ')}
                  type="button"
                  style={(btnClass || toggleSpotBtnClass) ? undefined : btnStyle}
              >
                {toggleSpotBtnContents}
              </button>
            </div>
        )}
      </div>
    );
  }
}

Controls.propTypes = {
  onClickPlus: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired,
  onClickGIS: PropTypes.func,
  onClickToggleSpot: PropTypes.func,
  plusBtnContents: PropTypes.node,
  minusBtnContents: PropTypes.node,
  gisBtnContents: PropTypes.node,
  toggleSpotBtnContents: PropTypes.node,
  btnClass: PropTypes.string,
  plusBtnClass: PropTypes.string,
  minusBtnClass: PropTypes.string,
  gisBtnClass: PropTypes.string,
  toggleSpotBtnClass: PropTypes.string,
  controlsClass: PropTypes.string,
  scale: PropTypes.number,
  minScale: PropTypes.number,
  maxScale: PropTypes.number,
  disableZoom: PropTypes.bool
};

Controls.defaultProps = {
  plusBtnContents: '+',
  minusBtnContents: '-',
  gisBtnContents: 'G',
  toggleSpotBtnContents: '*',
  disableZoom: false
};

export default Controls;
