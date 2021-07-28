import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import GuideFact from "../../Components/Home/GuideFact";

const guideScreen = (props) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#071442",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 0.05 * height,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "space-evenly",
            backgroundColor: "#071442",
            paddingBottom: 20,
            height: 300,
          }}
        >
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
            }}
            onPress={() => props.navigation.goBack()}
          >
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require("../../assets/common/return_gold_picto.png")}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "MontserratLight",
              fontSize: 21,
              color: "#e7bd4f",
              textAlign: "center",
            }}
          >
            PiXL
          </Text>
          <Text
            style={{
              fontFamily: "HammersmithOne",
              fontSize: 60,
              textTransform: "uppercase",
              color: "#e7bd4f",
              textAlign: "center",
              lineHeight: 60,
            }}
          >
            guide d'entretien
          </Text>
          <Text
            style={{
              fontFamily: "MontserratLight",
              fontSize: 21,
              color: "#e7bd4f",
              textAlign: "center",
            }}
          >
            Gestes simples pour prolonger la vie de votre téléphone
          </Text>
        </View>
        <GuideFact
          backgroundColor="#e7bd4f"
          source={require("../../assets/guidePicto/shield_picto.png")}
          title="Protégez votre téléphone."
          subtitle="Objectif zéro chute"
          text="Protégez l'écran avec une protection en verre trempé: réparer une vitre ou un écran peut coûter jusqu'à 200€.
Protégez les contours avec une coque ou bumper afin de limiter les dégâts externes et internes."
          color="#071442"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#071442"
          source={require("../../assets/guidePicto/battery_picto.png")}
          title="Ménagez la batterie."
          subtitle="Optimisez la charge et la consommation d'énergie"
          text="Préférez plusieurs petites recharges le long de la journée à une grosse recharge. Pour limiter la consommation, utilisez le mode économie d'énergie qui optimise la gestion des ressources. Mettez le mode avion lorsque vous n'utilisez pas votre téléphone."
          color="#e7bd4f"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#e7bd4f"
          source={require("../../assets/guidePicto/cellular_picto.png")}
          title="Limitez l'utilisation du réseau cellulaire."
          subtitle="Gourmand en batterie et une empreinte carbone élevée"
          text="Préférez le Wifi et limitez la consommation en arrière-plan des réseaux sociaux dans vos réglages. Évitez le streaming et préférez  le téléchargement en amont via des applications comme VLC."
          color="#071442"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#071442"
          source={require("../../assets/guidePicto/sun_picto.png")}
          title="Évitez les températures extrêmes."
          subtitle="Ne le laissez pas seul au soleil ou au ski"
          text="Les températures très froides ou très chaudes peuvent abîmer la batterie et laisser son smartphone sous le soleil n’est pas bon pour l’écran. La plupart des constructeurs préconisent une utilisation entre 0°C et 35°C."
          color="#e7bd4f"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#e7bd4f"
          source={require("../../assets/guidePicto/software_picto.png")}
          title="Minimisez l'obsolescence programmée"
          subtitle="Prenez de bonnes habitudes d'utilisation"
          text="Votre téléphone peut ralentir lorsque son espace de stockage est saturé. Transférez vos photos/vidéos sur votre pc ou dans un disque dur (plus écologique que le cloud) et videz le cache de certaines applications."
          color="#071442"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#071442"
          source={require("../../assets/guidePicto/heart_picto.png")}
          title="Donnez lui de l'amour."
          subtitle="On ne sait jamais"
          text="Votre téléphone est peut-être une intelligence artificielle dôtée d'une conscience..."
          color="#e7bd4f"
          height={300}
          imgDim={50}
        />
      </ScrollView>
    </View>
  );
};

export default guideScreen;
