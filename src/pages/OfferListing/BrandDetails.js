import React, { useState } from 'react';
import "./index.css";
import Heading from '../../components/Heading/Heading';
import { CreditCardOutlined } from "@ant-design/icons";
import Breadcurms from '../../components/Breadcrums/Breadcurms';
import { Row, Col, Card, Tabs } from 'antd';
import Badge from '../../components/Badge/Badge';
import { Link } from 'react-router-dom';
import Coupon from './Coupon/Coupon';
import PrizeDraw from './PrizeDraws/PrizeDraw';
import Cashback from './CashBack/Cashback';
// import Coupon from './PrizeDraws/PrizeDraw';

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
export default function BrandDetails() {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  const [dataArr,] = useState(allTredingOffers)
  console.log(dataArr)
  return (
    <div className="home_container">
      <Row align="middle" className="list_view mb-0 pb-0">
        <Breadcurms
          data={[{
            pageName: 'Home',
            pageLink: '/'
          }, {
            pageName: 'All Brands',
            pageLink: '/all-brands'
          }, {
            pageName: 'Myntra',
            pageLink: '/myntra'
          }]} />
      </Row>
      <div className='position-relative'>
        <Row align="middle" className="mb-0 pb-0 brandWall" style={{
          background: "url('/Images/offerBanner.jpg')"
        }}>
        </Row>
        <Row className='list_view brandProfile'>
          <Col span={6}>
            <div className='brandImage'>
              <img src='/Images/myntra.png' alt='img' />
            </div>
            <div className='whiteFrame'>
              <h5>About Myntra</h5>
              <p>{"While myntra was founded Germany, it has influence and roots all over the world. You'll find employees from over 100 nations working at its company headquarters in Her..."}</p>
              <Link to="">Show more</Link>
            </div>

          </Col>
          <Col className='brandInfo pl-4' span={18}>
            <h4 className='fw-bold text-white'>Myntra</h4>
            <p className='text-white d-flex align-items-center'>upto 11% cashback <span className='deviderWhite'></span> 24 coupons <span className='deviderWhite'></span> 2 prize draws</p>

            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab={<div className='d-flex align-items-center py-2'><img src='/Images/cashback.svg' height={40} /> &nbsp; <h6 className='mb-0'>Cashbacks</h6></div>} key="2">

                <div className='onCardOfferBanner mb-4'>
                  <h4 className='mb-2'>On Card Offers</h4>
                  <p className='mb-4'>Upfront cost must be £50+</p>
                  <h3 className='d-inline-block'>10% OFF </h3> <small>Terms and Conditions*</small>

                </div>

                <Cashback />
              </TabPane>

              <TabPane tab={<div className='d-flex align-items-center py-2'><img src='/Images/coupon.svg' height={40} /> &nbsp; <h6 className='mb-0'>Coupon</h6></div>} key="3">
                <Coupon />
              </TabPane>

              <TabPane tab={<div className='d-flex align-items-center py-2'><img src='/Images/prizeDraw.svg' height={40} /> &nbsp; <h6 className='mb-0'>PrizeDraw</h6></div>} key="1">

                <PrizeDraw />

              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
      <div className="list_view">
        <Heading
          HeadingText="Similar Brands"
          actionText="View All"
          actionLink="/Similar-offers"
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

    </div>
  )
}
