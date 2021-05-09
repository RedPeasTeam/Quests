import React, {Component} from "react";
const faker = require('faker');

const list = [
    {
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: faker.image.avatar(),
        review: faker.lorem.paragraph(),
        date: "12-01-2021"
    },
    {
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: faker.image.avatar(),
        review: faker.lorem.paragraph(),
        date: "11-01-2021"
    }
];

class Reviews extends Component{
    render() {
        return <div className='reviews-wrapper'>
            <div className='reviews-title'>Отзывы</div>
            <div className='reviews'>
                {list.map((value, i) => {
                    return <div className='reviews-item'>
                        <div className='review-image'>
                            <img src={value.image}></img>
                        </div>
                        <div className='review-desc'>
                            <div className='review-name'>{value.name} {value.lastName}</div>
                            <div className='review-text'>{value.review}</div>
                            <div className='review-date'>{value.date}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default Reviews;