import React from "react";
import "./index.css";
import { Card, Col, Row, Button } from "antd";
import { HomeConstant } from '../../Constants'


export default function PopularOffers() {
    return (
        <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
            {HomeConstant?.popularOffers?.map((item, key) =>
                <Col key={key} className="deals_box featuredOffers mb-4" span={12}>
                    <Card
                        className="deals_container popularOffers"
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
                                    <div>
                                        <img className="dealicon_img_frame_lg_mobile" src={item.image} />
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
    )
}
