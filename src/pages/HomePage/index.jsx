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

// const { Meta } = Card;

const index = () => {

  const offerCard = item => {
    return (
      <Card className="offer_card">
        <Row align="middle" justify="space-around" sx={{ height: "100%" }}>
          <Col className="offer_box">
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
      <Card className="promoted_card">
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
        <Col xs={{ span: 9 }}>
          <Carousel list={HomeConstant.offerList} cardUI={item => offerCard(item)} />
        </Col>
        <Col xs={{ span: 8 }} className="middle_carousel">
          {/* {giftCard(giftList[0])} */}
          <Carousel list={HomeConstant.giftList} cardUI={item => giftCard(item)} />
        </Col>
        <Col xs={{ span: 5 }}>
          <Card className="promoted_card">
            <h3>Promoted brands</h3>
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
      <Row align="middle" justify="space-around" gutter={8}>
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
                <img className="promo_icon" src={item.image} />
                <p className="deals_title">{item.title}</p>
                </>
                <Divider/>
                <Row align="middle" key="time" className="deals_action">
                  <ClockCircleOutlined  className="deals_offer_title"/>
                  <span>{item.time}</span>
                </Row>
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
