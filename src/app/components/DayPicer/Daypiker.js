import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './daypicer.scss';



//redux
import {connect} from 'react-redux';
import {date_range} from '../ActionCreators/AC';


class Daypiker extends React.Component {


  handleDayClick = (day) => {
    const {date_range, filter} = this.props;
    date_range(DateUtils.addDayToRange(day, filter));

    console.log('store', store.getState());
  };

  render() {


    const {from, to} = this.props.filter;
    const modifiers = {start: from, end: to};
    return (
      <div className="RangeExample">
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <div>
          {!from && !to && 'Будь ласка виберіть перший день'}
          {from && !to && 'Будь ласка виберіть останній день'}
          {
            from && to &&
            <div>
              {'Вибрано з '}
              <strong>{from.toLocaleDateString()}</strong>
              {' по '}
              <strong>{to.toLocaleDateString()}</strong>
            </div>
          }
        </div>
        <Helmet>
          <style>{`
            .RangeExample {text-align:center;}
            .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
              background-color: #fbf5ff !important;
              color: #4a90e2;
            }
            .Selectable .DayPicker-Day {
              border-radius: 0 !important;
            }
            .Selectable .DayPicker-Day--start {
              border-top-left-radius: 50% !important;
              border-bottom-left-radius: 50% !important;
            }
            .Selectable .DayPicker-Day--end {
              border-top-right-radius: 50% !important;
              border-bottom-right-radius: 50% !important;
            }
          `}</style>
        </Helmet>
      </div>
    );
  }
}


export default connect(state => ({
  filter: state.filter.dateRange
}), {date_range})(Daypiker);