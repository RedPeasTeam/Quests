import React, {Component} from "react";
import QuestItem from "../../helpers/questItem/QuestItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const genreList = ['Эскейп рум.', 'Экшн игра.', 'Квест-перформанс.', 'Хоррор квест.', 'Морфеус.'];
const difficulty = ['Легкий', 'Средней сложности', 'Сложные'];

class Genre extends Component {
    state = {
        date: null,
    };

    handleDateChange = (date) => {
        this.setState({date})
    };

    render() {
        const {date} = this.state;
        return <div className='genre-wrapper'>
            <div className='title'>Подбор квеста</div>
            <div className='description'>
                Вы можете выбрать квест в Минске, используя фильтры ниже. Количество человек,тип игры , удобное время —
                что для вас важнее всего?
            </div>
            <div className='results'>
                <div className='quest-block'>
                    <div className='quest-list genre'>
                        <div className='quest-title'>Жанры</div>
                        {genreList.map((value, index) => {
                            return <span className='list-item' key={index}>{value}</span>
                        })}
                    </div>
                    <div className='quest-list difficulty'>
                        <div className='quest-title'>Сложность</div>
                        {difficulty.map((value, index) => {
                            return <span className='list-item' key={index}>{value}</span>
                        })}
                    </div>
                    <div className='date-block'>
                        <span>Дата:</span>
                        <DatePicker
                            selected={date}
                            onChange={this.handleDateChange}
                        />
                    </div>
                </div>
                <div className='quest-gallery'>
                    <div className='quest-item-wrapper'>
                        <QuestItem/>
                    </div>
                    <div className='quest-item-wrapper'>
                        <QuestItem/>
                    </div>
                    <div className='quest-item-wrapper'>
                        <QuestItem/>
                    </div>
                    <div className='quest-item-wrapper'>
                        <QuestItem/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Genre;