import React, {Component} from "react";
import QuestItem from "../../helpers/questItem/QuestItem";

const list = ['Action games', 'Active', 'With actors', 'Historical', 'Terrible', 'Exit the room', 'By movies', 'By video games', 'By books', 'Family', 'For children', 'For a large company', 'For adults', 'For school children', 'For beginners'];

class Genre extends Component {
    render() {
        return <div className='genre-wrapper'>
            <div className='title'>Подбор квеста</div>
            <div className='description'>
                Вы можете выбрать квест в Минске, используя фильтры ниже. Количество человек,тип игры , удобное время —
                что для вас важнее всего?
            </div>
            <div className='results'>
                <div className='quest-list'>
                {list.map((value, index) => {
                    return <span className='list-item' key={index}>{value}</span>
                })}
                </div>
                <div className='quest-gallery'>
                    <div className='quest-item-wrapper'>
                        <QuestItem />
                    </div>
                    <div className='quest-item-wrapper'>
                        <QuestItem />
                    </div>
                    <div className='quest-item-wrapper'>
                        <QuestItem />
                    </div>
                    <div className='quest-item-wrapper'>
                        <QuestItem />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Genre;