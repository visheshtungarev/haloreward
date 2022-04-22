import React from "react";
import "./index.css";
import { Row } from "antd";

import { HomeConstant } from '../../Constants'
import TrendingBlock from "./TrendingBlock";


export default function TrendingBrands(props: any) {

    return (
        <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
            {HomeConstant?.trendingBrands?.map((item, i) =>
                <TrendingBlock key={i}
                    span={props.span}
                    brandImage={item.image}
                    brandTitle={item.title}
                    brandOfferText="upto 11% cashback"
                />
            )}
        </Row>

    )
}
