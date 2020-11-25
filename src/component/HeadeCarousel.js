import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class HeadCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        (prev) => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: deviceWidth * this.state.selectedIndex,
            y: 0,
          });
        }
      );
    }, 3000);
  };

  setSelectedIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={{ height: deviceHeight / 4, width: deviceWidth }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {images.map((image) => (
            <TouchableOpacity
              onPress={() =>
                navigation.push("Detail", {
                  id: data.item.id,
                  title: data.item.restName,
                  rate: data.item.rating,
                  price: data.item.data.price,
                  detail: data.item.data.proDes,
                  image: data.item.data.proPic,
                })
              }
            >
              <Image
                style={styles.backgroundImage}
                source={{ uri: image }}
                key={image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 0.5 : 1 },
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: deviceHeight / 4,
    width: deviceWidth,
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export { HeadCarousel };
