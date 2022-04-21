import React from "react";
import Header from "../../components/Layout/Header";
// import Footer from "../../components/Layout/Footer";
import Carousel from "../../components/Carousel";
import "./index.css";
import { Card, Col, Divider, Row, Button } from "antd";
import {
  ClockCircleOutlined,
  RightOutlined
} from "@ant-design/icons";
import { HomeConstant } from '../../Constants'

// const { Meta } = Card;

const index = () => {

  const offerCard = item => {
    return (
      <Card className="offer_card promoted_card ">
        <Row align="middle" justify="space-between" sx={{ height: "100%" }}>
          <Col className="offer_box" >
            <img className="promo_icon" src={item.logo} />
            <h3 className="offer_text">
              {item.offer}
            </h3>
            <p className="offer_type">
              {item.type}
            </p>
          </Col>
          <Col>
            <img className="offer_image" src={item.image} />
          </Col>
        </Row>
      </Card>
    );
  };

  const giftCard = item => {
    return (
      <Card className="promoted_card giftCard">
        <div key={item.title}>
          <img className="gift_icon" src={item.image} />
          <h3 className="gift_title">
            {item.title}
          </h3>
          <p className="gift_des">
            {item.description}
          </p>
        </div>
      </Card>
    );
  };
  return (
    <div className="home_container">
      <Header />
      <Row align="middle" className="carousel_container">
        <Col xs={{ span: 10 }}>
          <Carousel className="leftSlider" list={HomeConstant.offerList} cardUI={item => offerCard(item)} />
        </Col>
        <Col xs={{
          span: 8
        }} className="middle_carousel">
          <Carousel className="centerSlider" list={HomeConstant.giftList} cardUI={item => giftCard(item)} />
        </Col>
        <Col xs={{ span: 5 }}>
          <Card className="promoted_card">
            <h4 className="">Promoted brands</h4>
            {HomeConstant.promoList.map(item =>
              <div className="promo_bar" key={item.title}>
                <img className="promo_icon" src={item.icon} />
              </div>
            )}
          </Card>
        </Col>
      </Row>
      <div className="list_view">
        <Row className="list_bar" align="middle" justify="space-between">
          <Col className="list_title">
            Expiring Deals
          </Col>
          <Col className="list_action">
            <p>
              View All
            </p>
            <RightOutlined />
          </Col>
        </Row>
        <Row align="middle" justify="space-around" gutter={30}>
          {HomeConstant?.expiringDeals?.map((item, key) =>
            <Col key={key} className="deals_box" span={4}>
              <Card
                className="deals_container"
                actions={[

                ]}
              >
                <>
                  <Row className="deals_offer">
                    <Col className="deals_offer_title">
                      {item.offer}
                    </Col>
                    {item.offerIcon}
                  </Row>
                  <Row className="deals_mode">
                    <Col className="deals_offer_title">
                      {item.mode}
                    </Col>
                    {item.modeIcon}
                  </Row>
                  <img className="dealicon" src={item.image} />
                  <p className="deals_title">{item.title}</p>
                </>
                <Divider />
                <Row align="middle" key="time" className="deals_action">
                  <ClockCircleOutlined className="deals_offer_title" />
                  <span>{item.time}</span>
                </Row>
              </Card>
            </Col>
          )}
        </Row>

      </div>
      <div className="list_view">
        <Row className="list_bar" align="middle" justify="space-between">
          <Col className="list_title">
            Trending Brands
          </Col>
          <Col className="list_action">
            <p>
              View All
            </p>
            <RightOutlined />
          </Col>
        </Row>
        <Row align="middle" justify="space-around" gutter={30}>
          {HomeConstant?.trendingBrands?.map((item, key) =>
            <Col key={key} className="deals_box trending_brands" span={4}>
              <Card
                className="deals_container"
                actions={[

                ]}
              >
                <>
                  <img className="dealicon " src={item.image} />
                  <p className="deals_title text-center">{item.title}</p>
                </>

                <Row key="cashback" className="cashback_info">
                  upto 11% cashback
                </Row>
              </Card>
            </Col>
          )}
        </Row>

      </div>
      <div className="list_view themeBg">
        <Row className="list_bar" align="middle" justify="space-between">
          <Col className="list_title text-white">
            Featured Offers
          </Col>
          <Col className="list_action text-white">
            <p>
              View All
            </p>
            <RightOutlined />
          </Col>
        </Row>
        <Row align="middle" justify="space-around" gutter={30}>
          {HomeConstant?.featureOffers?.map((item, key) =>
            <Col key={key} className="deals_box featuredOffers" span={8}>
              <Card
                className="deals_container"
                actions={[

                ]}
              >
                <>
                  <div className="badges">
                    <Row className="deals_offer">
                      <Col className="deals_offer_title">
                        {item.offer}
                      </Col>
                      {item.offerIcon}
                    </Row> &nbsp;&nbsp;
                    <Row className="deals_mode">
                      <Col className="deals_offer_title">
                        {item.mode}
                      </Col>
                      {item.modeIcon}
                    </Row>
                  </div>
                  <Row className="w-100 d-flex align-items-center" justify="">
                    <img className="dealicon_img_frame" src={item.image} />

                    <h5 className=" pl-3 my-0 ">{item.brand}</h5>
                  </Row>
                  <p className="deals_title">{item.title}</p>
                </>
                <Row key="time" className="featured_offer_action mb-3">
                  <span>{item.time}</span>
                </Row>
                <Button type="primary" block>Go to site</Button>

              </Card>
            </Col>
          )}
        </Row>

      </div>

      <div className="list_view">
        <Row className="list_bar" align="middle" justify="space-between">
          <Col className="list_title ">
            Popular Offers
          </Col>
          <Col className="list_action">
            <p>
              View All
            </p>
            <RightOutlined />
          </Col>
        </Row>
        <Row align="middle" justify="space-around" gutter={30}>
          {HomeConstant?.popularOffers?.map((item, key) =>
            <Col key={key} className="deals_box featuredOffers mb-4" span={12}>
              <Card
                className="deals_container"
                actions={[

                ]}
              >
                <div className="d-flex">
                  <div>
                    <img className="dealicon_img_frame_lg" src={item.image} />
                  </div>
                  <div>
                    <div>
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                          <Row className="deals_offer">
                            <Col className="deals_offer_title">
                              {item.offer}
                            </Col>
                            {item.offerIcon}
                          </Row> &nbsp;&nbsp;
                          <Row className="deals_mode">
                            <Col className="deals_offer_title">
                              {item.mode}
                            </Col>
                            {item.modeIcon}
                          </Row>
                        </div>
                        <p className="mb-0 viewAllOffer">{item.viewAll}</p>
                      </div>
                      <p className="deals_title">{item.title}</p>
                    </div>
                    <Row key="time" className="featured_offer_action ">
                      <span>{item.time}</span>
                    </Row>
                    <Button type="primary" className="px-5">Reveal Code</Button>
                  </div>
                </div>
              </Card>
            </Col>
          )}
        </Row>

      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default index;
