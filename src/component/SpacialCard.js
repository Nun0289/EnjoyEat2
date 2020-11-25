import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";

import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "./utils/animations";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3);

export default class SpacialCard extends Component {
  state = {
    index: 0,
  };
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem(data) {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={{ width: "90%", height: "90%" }}
          source={{
            uri: data.item.data.proPic,
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
  },
  itemContainer: {
    width: ITEM_WIDTH - 10,
    height: ITEM_HEIGHT + 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
