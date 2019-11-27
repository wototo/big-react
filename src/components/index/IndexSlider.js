import React from 'react';
import './../../pages/index/index.css'
import Carousel from 'react-bootstrap/Carousel'


class IndexSlider extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
        index: 0,
        direction: null,
        };
    }
    
    handleSelect(selectedIndex, e) {
        this.setState({
        index: selectedIndex,
        direction: e.direction,
        });
    }
    
    render() {
        const { index, direction } = this.state;
    
        return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}  
            style={{boxShadow:'5px 5px 10px #140a08'}}       
        >
            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/pexels-photo-3051084.jpeg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h2 className="t-shadow">讓吉他更簡單</h2>
                <p className="fs-18 t-shadow">重視吉他教學品質，讓我們幫你把關。</p>
            </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/bruskers_web-800x500.jpg"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h2 className="t-shadow">豐富的場地選擇</h2>
                <p className="fs-18 t-shadow">期待你踏入這精心佈置教室，即可放鬆學習。</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/guitar-3957586_1920.jpg"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h2 className="t-shadow">分享最棒的體驗</h2>
                <p className="fs-18 t-shadow">不怕沒時間，不怕沒天分，只要你有興趣，我幫你一切搞定。</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/pexels-photo-60783.jpeg"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h2 className="t-shadow">吉他的好朋友</h2>
                <p className="fs-18 t-shadow">來場豐富的吉他之旅吧~~</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block index_img"
                src="/indexImg/cordoba_dudes-post-header_2000x485-2000x485.jpg"
                alt="Third slide"
            />
    
            <Carousel.Caption>
                <h2 className="t-shadow">快樂學吉他</h2>
                <p className="fs-18 t-shadow">不分男女老少，吉他生活人人愛。</p>
            </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        );
    }
    }

export default IndexSlider;