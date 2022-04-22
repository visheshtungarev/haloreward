import React from "react";
import "./index.css";
import { Card, Col, Row } from "antd";

export default function TrendingBlock(props: any) {
    return (
        <Col className="deals_box trending_brands mb-3 px-2" span={props.span}>
            <Card
                className="deals_container"
                actions={[

                ]}
            >
                <>
                    <img className="dealicon " src={props.brandImage} />
                    <p className="deals_title text-center">{props.brandTitle}</p>
                </>

                <Row key="cashback" className="cashback_info">
                    {props.brandOfferText}
                </Row>
            </Card>
        </Col>
    )
}
