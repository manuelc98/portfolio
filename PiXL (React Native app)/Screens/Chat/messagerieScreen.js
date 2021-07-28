import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import Strip from "../../Components/Profile/Strip";
import BandeAnnonceOffre from "../../Components/Chat/BandeAnnonceOffre";
import BandeAnnonceDemande from "../../Components/Chat/BandeAnnonceDemande";
import Title from "../../Components/common/Title";
import Subtitle from "../../Components/common/Subtitle";
import color from "../../style/color";
import { AppContext } from "../../App";
import getAllConversations from "../../models/GetAllConversations";
import getInfoOnConv from "../../models/GetInfoOnConv";
import ViewPager from "@react-native-community/viewpager";

const MessagerieScreen = ({ navigation }) => {
  const context = React.useContext(AppContext);
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const allConversations = async () => {
      const data = await getAllConversations(context.jwt);
      var i = 0;
      var res = {};
      while (data.data[i] !== undefined) {
        res = await getInfoOnConv(data.data[i].convid);
        data.data[i]["info"] = res;
        i++;
      }
      console.log(data);
      setData(data);
    };
    allConversations();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  //Top Buttons
  const viewPager = useRef(null);
  const handleLeftButton = () => {
    if (currentPage === 1) {
      viewPager.current.setPage(0);
    }
  };
  const handleRightButton = () => {
    if (currentPage === 0) {
      viewPager.current.setPage(1);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Title
        text="Messagerie"
        color={color.secondary}
        containerStyle={{ paddingHorizontal: 20 }}
      />
      <View style={styles.subtitlesContainer}>
        <Subtitle
          text="J'achète"
          color={currentPage === 0 ? color.secondary : color.darkGrey}
          containerStyle={{
            borderBottomColor:
              currentPage === 0 ? color.secondary : color.darkGrey,
            borderBottomWidth: currentPage === 0 ? 6 : 1,
            width: "50%",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={handleLeftButton}
        />
        <Subtitle
          text="Je vends"
          color={currentPage === 1 ? color.secondary : color.darkGrey}
          containerStyle={{
            borderBottomColor:
              currentPage === 1 ? color.secondary : color.darkGrey,
            borderBottomWidth: currentPage === 1 ? 6 : 1,
            width: "50%",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={handleRightButton}
        />
      </View>
      <ViewPager
        style={styles.screenContainer}
        initialPage={0}
        showPageIndicator={true}
        onPageSelected={(event) => {
          setCurrentPage(event.nativeEvent.position);
        }}
        ref={viewPager}
      >
        <View key="1">
          <View style={styles.screenContainer}>
            <View style={styles.offersContainer}>
              <TouchableWithoutFeedback>
                <FlatList
                  data={data.data}
                  keyExtractor={(item, id) => item.convid.toString()}
                  renderItem={(itemData) => {
                    return (
                      <View>
                        <BandeAnnonceOffre
                          url={itemData.item.info[0].annonceinfo.image_url}
                          pseudo="Raymond"
                          phone={itemData.item.info[0].annonceinfo.title}
                          time="Il y a 15h"
                          price={itemData.item.info[0].annonceinfo.price}
                          status="En attente"
                          onTouched={() =>
                            navigation.navigate("Message", {
                              convid: itemData.item.convid,
                            })
                          }
                        />
                      </View>
                    );
                  }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View key="2" style={styles.screenContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.offersContainer}>
              {/* <Text style={styles.title}>Mes demandes </Text> */}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ViewPager>
    </View>
  );
};

export default MessagerieScreen;

const styles = StyleSheet.create({
  screenContainer: { flex: 1, paddingTop: 20, backgroundColor: "white" },
  subtitlesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    width: "80%",
  },
  offersContainer: {
    flex: 1,
    padding: 20,
  },
  demandsContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
});
