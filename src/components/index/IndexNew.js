import React from 'react';
import './../../pages/index/index.css'
import { Link } from 'react-router-dom'
// import LinesEllipsis from 'react-lines-ellipsis';
// import { FaStar,FaStarHalfAlt } from "react-icons/fa";


class IndexNew extends React.Component {
    constructor() {
        super();
        this.state = {
            // eventListDate: []
        };
    }
    
    // componentDidMount() {
    //     fetch('http://localhost:5000/indexFood', {
    //         method: 'GET',
    //         headers: new Headers({
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         }),
    //     })
    //     .then(response => {
    //         if (!response.ok) throw new Error(response.statusText)
    //         return response.json()
    //     })
    //     .then(jsonObject => {
    //         // console.log(typeof jsonObject)
    //         // console.log(jsonObject)
    //         this.setState({ eventListDate: jsonObject })
    //     })
    //     .catch(function (err) {
    //         // Error :(
    //     })
    // }

    render() {
        let data = this.state.eventListDate;
        return (
        <>
        <div className="index_content pt-md-5">
         {/* START CAMP */}
            <div className="row marTop_200">
                <div className="col-md-6">
                    <div className="row justify-content-between">
                        <h1 className="my-3 position-relative index_line fw-bold">吉他商城</h1>
                    </div>
                    <div className="row py-2">
                        <h6 className="card-title col-md-10 lineHeight_25" >我們是一間吉他服務專門店相關吉他體驗的優質好店！值得你來一窺究竟！</h6>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="py-3">
                        <Link to="/" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="index_imgBox indexCamp_box">
                        <img className="index_img" src="/indexImg/adrury_20180702140954029.zip.0.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        {/* START EVENT */}
        <div className="row marTop_100">
            <div className="col-md-5">
                <div className="index_imgBox indexEvent_imgHeight">
                    <img className="index_img" src="/indexImg/camping-bend-oregon-1600x900.jpg" alt=""/>
                </div>
            </div>
            <div className="col-md-5">
                <div className="position-absolute p-1 indexEvent_textBox">
                    <h2 className="my-3 position-relative index_line fw-bold">課程資訊</h2><br/> 
                    <div className="">
                        <h6 className="card-title col-md-10 lineHeight_25">我們的老師有豐富的教學經驗，在等待對吉他充滿熱忱的你!課程讓你可隨時安排，今日選課明日教學。</h6>
                    </div>
                    <div className="row justify-content-center">
                        <Link to="/" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* START SHAREFUN */}
        <div className="row">
            <div className="col-md-7  position-relative">
                <div className="position-absolute p-1 indexShare_textBox">
                    <div className="row justify-content-end">
                        <h1 className="my-3 position-relative index_line fw-bold">場地租借</h1>
                    </div>
                    <div className="row py-2  justify-content-end">
                        <h6 className="card-title col-md-6 lineHeight_25">還在煩惱沒有一個安心的空間讓你盡情發揮嗎?每間教室光源充足、環境乾淨還有齊全的音響設備。</h6>
                    </div>
                    <div className="py-3 row py-2  justify-content-end">
                        <Link to="/" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="index_imgBox indexShare_imgHeight">
                    <img className="index_img" src="/indexImg/photo-1529385101576-4e03aae38ffc.jpg" alt=""/>
                </div>
            </div>
        </div>
        {/* START FOOD */}
        {/* <div className="index_camp py-md-5 margin_50">
            <div className="row justify-content-between mb-2">
                <h2 className="my-3 position-relative index_line fw-bold">食材直送</h2><br/>
                <div className="py-3">
                    <Link to="/Food" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                </div> 
            </div>
            <div className="card-deck">
                {data.map(item => (
                <div className="card"  key={item.salepage_id}>
                    <Link to={'/Food/FoodDetails/' + item.salepage_id}>
                    <div className="index_imgBox index_imgBoxFood">
                        <img className="card-img-top index_img" src={"/" + item.salepage_image} alt="Second slide"/>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title color_gray fw-bold">{item.salepage_name}</h6>
                        <p className="indexFoodText watermelon mr-2">NT$ {item.salepage_price}</p>
                    </div>
                    </Link>
                </div>
                ))}   
            </div>
        </div> */}
        </>
        )
    }
}

export default IndexNew;