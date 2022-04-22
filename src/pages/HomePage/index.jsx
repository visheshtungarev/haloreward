import React from "react";
import Header from "../../components/Layout/Header";
// import Footer from "../../components/Layout/Footer";
import Carousel from "../../components/Carousel";
import "./index.css";
import { Card, Col, Divider, Row } from "antd";
import {
  ClockCircleOutlined,
  RightOutlined
} from "@ant-design/icons";
import { HomeConstant } from '../../Constants'
import FeaturedOffers from "../../components/FeaturedOffers/FeaturedOffers";
import TrendingBrands from "../../components/TrendingBrands/TrendingBrands";
import PopularOffers from "../../components/PopularOffers/PopularOffers";

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
        <Col lg={{ span: 10 }} xs={{ span: 24 }} className="mb-4">
          <Carousel className="leftSlider" list={HomeConstant.offerList} cardUI={item => offerCard(item)} />
        </Col>
        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
          <div className="middle_carousel px-lg-3 mb-4">
            <Carousel className="centerSlider" list={HomeConstant.giftList} cardUI={item => giftCard(item)} />
          </div>
        </Col>
        <Col lg={{ span: 6 }} xs={{ span: 24 }}>
          <Card className="promoted_card promoted_brands mb-4">
            <h4 className="promotedBrandHeading">Promoted brands</h4>
            <div>
              {HomeConstant.promoList.map(item =>
                <div className="promo_bar" key={item.title}>
                  <img className="promo_icon" src={item.icon} />
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Row>
      <div className="list_view">
        <Row className="list_bar " align="middle" justify="space-between">
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
        <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
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
        <TrendingBrands span={4} />

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
        <FeaturedOffers />

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
        <PopularOffers />

      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default index;
