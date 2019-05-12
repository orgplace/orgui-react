import React from 'react';
import classNames from 'classnames';

const OuiAssistItem: React.FC<{selected?: boolean}> = (props) => (
  <div className={classNames('ouiAssistItem', {'isSelected': props.selected})}>
    {props.children}
  </div>
);

interface AssistAttributes<S> {
  suggests: Array<S>
  renderSuggest: (su: S, idx: number) => JSX.Element
}

class OuiAssist<S = string> extends React.Component<AssistAttributes<S>, {focus: boolean}> {
  constructor(props: Readonly<AssistAttributes<S>>) {
    super(props);

    this.state = {
      focus: false,
    };
  }

  private showSuggests() {
    return this.state.focus && !!this.props.suggests.length;
  }

  render() {
    const child = this.props.children as React.ReactElement;
    return (
      <div className="ouiAssist">
        {React.cloneElement(child, {
          className: classNames(child.props.className, 'ouiAssist__target'),
          onFocus: () => this.setState({focus: true}),
          onBlur: () => this.setState({focus: false}),
        })}
        {this.showSuggests() && <div className="ouiAssist__suggest">
          {this.props.suggests.map(this.props.renderSuggest)}
        </div>}
      </div>
    );
  }

  static nextSelected(current: number | null, length: number, up: boolean, down: boolean) {
    if ((up || down) && length) {
      if (current === null) {
        return up ? length - 1 : 0;
      } else {
        return clip(0, current + (up ? - 1 : 1), length - 1);
      }
    }
    return null;
  }
}

function clip(min: number, x: number, max: number) {
  return Math.max(min, Math.min(x, max));
}

export {OuiAssist, OuiAssistItem};
