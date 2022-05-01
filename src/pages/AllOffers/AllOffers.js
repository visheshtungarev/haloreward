import React, { useState } from 'react'
import Heading from '../../components/Heading/Heading'
import PopularOffers from '../../components/PopularOffers/PopularOffers'
import {
    CreditCardOutlined
} from "@ant-design/icons";
import Breadcurms from '../../components/Breadcrums/Breadcurms';
import { Row, Col, Card } from 'antd';
import Badge from '../../components/Badge/Badge';
const allTredingOffers = [
    {
        image: "/Images/flipkart.png",
        title: "Flipkart",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
        ,
    },
    {
        image: "/Images/nykaa.png",
        title: "Nykaa",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    },
    {
        image: "/Images/flipkart.png",
        title: "Flipkart",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    },
    {
        image: "/Images/nykaa.png",
        title: "Nykaa",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    },
    {

        image: "/Images/flipkart.png",
        title: "Flipkart",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    }
]
export default function AllOffers() {
    const [dataArr,] = useState(allTredingOffers)
    console.log(dataArr)
    return (
        <div className="home_container">
            <Row align="middle" className="list_view mb-0 pb-0">
                <Breadcurms
                    data={[{
                        pageName: 'Categories',
                        pageLink: '/categories'
                    }, {
                        pageName: 'All Offers',
                        pageLink: '/all-offers'
                    }]} />
            </Row>


            <div className="list_view">
                <Heading
                    HeadingText="Trending"
                    actionText="View All"
                    actionLink="/Trending-offers"
                />
                <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
                    {dataArr && dataArr.map((item, i) =>
                        <Col key={i} className="deals_box trending_brands mb-3 text-left" span={4}>
                            <Card
                                className="deals_container">
                                <Badge
                                    badgeType={item?.modeType}
                                    badgeText={item?.modeText}
                                    badgeIcon={item.modeIcon}
                                />
                                <>
                                    <img className="dealicon " src={item.image} />
                                    <p className="deals_title" style={{ minHeight: 'auto' }}>{item.title}</p>
                                    <p>{item.content}</p>

                                </>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
            <div className="list_view">

                <Heading
                    HeadingText="Trending Brands"
                    actionText="View All"
                    actionLink="/all-brands"
                />


                <PopularOffers />
            </div>
        </div>
    )
}
