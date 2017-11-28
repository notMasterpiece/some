import React from 'react';
import uniqid from 'uniqid';


class Items extends React.Component {
  render() {




    const {pac, onRemove, onToggle, searchValue} = this.props;

    const value = searchValue || '';

    console.log(value);


    return (
      <div className="pac_wrap">
        {
          pac.filter((el => el.name.toLowerCase().includes(value.toLowerCase()))).map(el => {
            return (
              <div className="item" key={uniqid()}>
                <label htmlFor={el.id}>
                  <input
                    type="checkbox"
                    checked={el.pakage}
                    onChange={ () => onToggle(el) }
                  />
                </label>
                <h5 className="name">{el.name}</h5>
                <div className="name">{el.id}</div>
                <button onClick={onRemove(el)}>X</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Items;