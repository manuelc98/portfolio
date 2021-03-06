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
            Gestes simples pour prolonger la vie de votre t??l??phone
          </Text>
        </View>
        <GuideFact
          backgroundColor="#e7bd4f"
          source={require("../../assets/guidePicto/shield_picto.png")}
          title="Prot??gez votre t??l??phone."
          subtitle="Objectif z??ro chute"
          text="Prot??gez l'??cran avec une protection en verre tremp??: r??parer une vitre ou un ??cran peut co??ter jusqu'?? 200???.
Prot??gez les contours avec une coque ou bumper afin de limiter les d??g??ts externes et internes."
          color="#071442"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#071442"
          source={require("../../assets/guidePicto/battery_picto.png")}
          title="M??nagez la batterie."
          subtitle="Optimisez la charge et la consommation d'??nergie"
          text="Pr??f??rez plusieurs petites recharges le long de la journ??e ?? une grosse recharge. Pour limiter la consommation, utilisez le mode ??conomie d'??nergie qui optimise la gestion des ressources. Mettez le mode avion lorsque vous n'utilisez pas votre t??l??phone."
          color="#e7bd4f"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#e7bd4f"
          source={require("../../assets/guidePicto/cellular_picto.png")}
          title="Limitez l'utilisation du r??seau cellulaire."
          subtitle="Gourmand en batterie et une empreinte carbone ??lev??e"
          text="Pr??f??rez le Wifi et limitez la consommation en arri??re-plan des r??seaux sociaux dans vos r??glages. ??vitez le streaming et pr??f??rez?? le t??l??chargement en amont via des applications comme VLC."
          color="#071442"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#071442"
          source={require("../../assets/guidePicto/sun_picto.png")}
          title="??vitez les temp??ratures extr??mes."
          subtitle="Ne le laissez pas seul au soleil ou au ski"
          text="Les??temp??ratures tr??s froides ou tr??s chaudes??peuvent ab??mer la batterie et laisser son smartphone sous le soleil n???est pas bon pour l?????cran. La plupart des constructeurs pr??conisent une utilisation entre 0??C et 35??C."
          color="#e7bd4f"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#e7bd4f"
          source={require("../../assets/guidePicto/software_picto.png")}
          title="Minimisez l'obsolescence programm??e"
          subtitle="Prenez de bonnes habitudes d'utilisation"
          text="Votre t??l??phone peut ralentir lorsque son espace de stockage est satur??. Transf??rez vos photos/vid??os sur votre pc ou dans un disque dur (plus ??cologique que le cloud) et videz le cache de certaines applications."
          color="#071442"
          height={300}
          imgDim={50}
        />
        <GuideFact
          backgroundColor="#071442"
          source={require("../../assets/guidePicto/heart_picto.png")}
          title="Donnez lui de l'amour."
          subtitle="On ne sait jamais"
          text="Votre t??l??phone est peut-??tre une intelligence artificielle d??t??e d'une conscience..."
          color="#e7bd4f"
          height={300}
          imgDim={50}
        />
      </ScrollView>
    </View>
  );
};

export default guideScreen;
