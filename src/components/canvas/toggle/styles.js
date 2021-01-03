import styled from 'styled-components'

const Colors = {
  WHITE: '#ffffff',
  DARK_MODE: '#363537',
  TOGGLE_SHADOW: '#d9d9d9',
}

export const ToggleContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;

  margin: 10px 10px;

  #toggle-btn {
    position: relative;
    width: 55px;
    height: 34px;
    margin: 0 auto;
    border-radius: 40px;
  }

  input[type='checkbox'] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: 0px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #toggle-btn span {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    opacity: 1;
    background-color: ${Colors.WHITE};
    box-shadow: 0px 2px 25px ${Colors.TOGGLE_SHADOW};
    border-radius: 40px;
    transition: 0.2s ease background-color, 0.2s ease opacity;
  }

  #toggle-btn span:before,
  #toggle-btn span:after {
    content: '';
    position: absolute;
    top: 5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  #toggle-btn span:before {
    background-color: ${Colors.WHITE};
    transform: translate(-58px, 0px);
    z-index: 1;
  }

  #toggle-btn span:after {
    background-color: ${Colors.DARK_MODE};
    transform: translate(8px, 0px);
    z-index: 0;
  }

  #toggle-btn input[type='checkbox']:checked + span {
    background-color: ${Colors.DARK_MODE};
  }

  #toggle-btn input[type='checkbox']:active + span {
    opacity: 0.5;
  }

  #toggle-btn input[type='checkbox']:checked + span:before {
    background-color: ${Colors.DARK_MODE};
    transform: translate(13px, -6px);
  }

  #toggle-btn input[type='checkbox']:checked + span:after {
    background-color: ${Colors.WHITE};
    transform: translate(24px, 0px);
  }
`
