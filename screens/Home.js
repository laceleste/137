import  axios  from "axios";
import React from "react";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StatusBar } from "react-native";
import { FlatList } from "react-native";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import { Text, View, StyleSheet } from "react-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      imagePath: "",
      url: "https://e4d8-2804-14d-688d-4581-df9d-15b2-4211-4280.ngrok.io",
    };
  }
  componentDidMount() {
   //chame a função getPlanets aqui para que os dados sejam buscados assim que a tela for montada


  }

  getPlanets = () => {
   //escreva o código para buscar os dados do planeta da API


  };

  setDetails = (planetDetails) => {
    const planetType = planetDetails['planet_type'];
    //console.log(planetDetails['planet_type'])
    //console.log(planetType)
    let imagePath = "";
    switch (planetType) {
      case 'Gas Giant':
        imagePath = require("../assets/Gas_Giant.png");
        break;
      case "Terrestrial":
        imagePath = require("../assets/Terrestrial.png");
        break;
      case "Super Earth":
        imagePath = require("../assets/Super_Earth.png");
        break;
      case "Neptune-like":
        imagePath = require("../assets/Neptune-like.png");
        break;
      default:
        imagePath = require("../assets/Gas_Giant.png");
    }

    this.setState({
      details: planetDetails,
      imagePath: imagePath,
    });
  };

  renderItem = ({ item, index }) => {
    this.setDetails(item);
    return (
      <TouchableOpacity
        style={[
          styles.listItem,
          { backgroundColor: this.selectColor(index), opacity: 0.7 },
        ]}
      // onPress



      >
        <Image source={this.state.imagePath} style={styles.cardImage}></Image>

        <View style={styles.nameCardPlanet}>
          <Text style={styles.title}>
            {/* adicionar o nome do planeta */}
            
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  keyExtractor = (item, index) => index.toString();

  /*esta função seleciona uma cor para os cartões na flatlist*/
  selectColor = (index) => {
    var color = ["#fbffd5", "#ffefff", "#ede5ff", "#eafff4"];
    var num = index % 4;
    return color[num];
  };

  render() {
    const { listData } = this.state;

    if (listData.length != 0) {
      return (
        <View style={styles.container}>
          <SafeAreaView
            style={{
              marginTop:
                Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
          />
          <ImageBackground
            source={require('../assets/bg.png')}
            style={{ flex: 1, paddingTop: 20 }}
          >
            <View style={styles.upperContainer}>
              <Text style={styles.headerText}>Planets Catalog</Text>
            </View>
            <View style={styles.lowerContainer}>
              {/* FlatList */}


            </View>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ flex: 1, paddingTop: 20 }}
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text style={styles.headerText}>Loading...</Text>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "monospace",
  },
  lowerContainer: {
    flex: 0.9,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainerText: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "monospace",
    textAlign: "center",
  },
  listContainer: {
    backgroundColor: "#eeecda",
  },
  listItem: {
    padding: 15,
    margin: "2.5%",
    width: "45%",
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
  },
  cardImage: {
    width: 100,
    height: 100,
    paddingTop: 5,
    alignSelf: "center",
    alignItems: "center",
  },
  nameCardPlanet: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
  },
});
