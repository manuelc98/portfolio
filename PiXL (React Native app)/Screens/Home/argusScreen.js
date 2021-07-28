import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HorizontalScrollTel from "../../Components/Profile/Mon annonce/HorizontalScrollTel";
import HideShow from "../../Components/Profile/Mon annonce/HideShow";

const argusScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View style={styles.telContainer}>
        <HorizontalScrollTel
          styleFlex={{ flex: 2 }}
          img1="https://tiendasigloxxi.es/92782-large_default/apple-iphone-xs-4g-64gb-gold-eu.jpg"
          img2="https://media.ldlc.com/r1600/ld/products/00/05/02/16/LD0005021679_2_0005021741.jpg"
          img3="https://img.phonandroid.com/2018/09/iphone-xs-2.jpg"
        />
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Text>iPhone XS</Text>
          <Text>128 GO - Gold</Text>
          <Text>Prix : -10% en 1 mois</Text>
          <Text>Prix moyen actuel : 570€</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={styles.boxContainer}>
          <Text style={styles.boxText}>Prix au lancement</Text>
          <Text style={styles.boxText}>1089€</Text>
        </View>

        <View style={styles.boxContainer}>
          <Text style={styles.boxText}>Note moyenne</Text>
          <Text style={styles.boxText}>4/5</Text>
        </View>
      </View>

      <View style={{ flex: 3 }}>
        <View style={styles.hideShowComponent}>
          <HideShow
            intitule="Top facts"
            caracteristiques={
              <Text>{` Durée de vie moyenne de 6 ans\n Moins de 5% ont nécessité une réparation\n 60% sont encore sous garantie`}</Text>
            }
          />
        </View>

        <View style={styles.hideShowComponent}>
          <HideShow intitule="Forces/Faiblesses" caracteristiques={"Graph"} />
        </View>
        <View style={styles.hideShowComponent}>
          <HideShow intitule="Prévision de prix" caracteristiques="Graph" />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Button title="Comparer avec mon téléphone" />
      </View>
    </ScrollView>
  );
};

export default argusScreen;

const styles = StyleSheet.create({
  telContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 10,
  },
  boxContainer: {
    borderColor: "#071442",
    borderWidth: 1,
    borderRadius: 2,
    margin: 20,
    flex: 1,
  },
  boxText: {
    textAlign: "center",
  },
  hideShowComponent: {
    alignItems: "center",
    marginVertical: 10,
  },
});
