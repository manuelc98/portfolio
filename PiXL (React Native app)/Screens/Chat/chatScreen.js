import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Modal, Image } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import SocketIo from "socket.io-client";
import { AppContext } from "../../App";
import Axios from "axios";
import MainButton from "../../Components/common/MainButton";
import Subtitle from "../../Components/common/Subtitle";
import color from "../../style/color";
import getAllConversations from "../../models/GetAllConversations";
import getInfoOnConv from "../../models/GetInfoOnConv";
import GreyButton from "../../Components/common/GreyButton";

const messageScreen = (props) => {
  const context = useContext(AppContext);

  const [convId, setConvId] = useState(props.route.params.convid);
  const [data, setData] = useState([]);
  const ini = {
    messages: [],
  };
  const [messages, setMessages] = useState(ini);

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
      setData(data);
    };
    allConversations();
    context.socket.on("InstantMessage", (data) => {
      console.log("Received");
      setMessages((previousMessages) => ({
        messages: GiftedChat.append(previousMessages.messages, data),
      }));
    });
    context.socket.emit("chatonline", context.jwt);
    Axios.get(
      "http:/51.178.86.48:3000/conversation/get-messages/" +
        convId +
        "/" +
        context.jwt
    ).then((res) => {
      res.data.data.forEach((element) => {
        setMessages((previousMessages) => ({
          messages: GiftedChat.append(
            previousMessages.messages,
            JSON.parse(element)
          ),
        }));
      });
    });
  }, []);

  const onSend = (msg = []) => {
    msg[0].user._id = context.uuid;
    context.socket.emit("NewMessage", msg, context.jwt, convId);
    setMessages((previousMessages) => ({
      messages: GiftedChat.append(previousMessages.messages, msg),
    }));
  };

  const { screenContainer } = styles;

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#071442",
            borderRadius: 15,
            height: 50,
          },
          left: {
            backgroundColor: "#FFFFFF",
            borderRadius: 15,
            height: 50,
          },
        }}
        textStyle={{
          right: { color: "#FFFFFF", fontSize: 15, fontWeight: "300" },
          left: { color: "000000", fontSize: 15, fontWeight: "300" },
        }}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View
          style={{
            alignItems: "center",
            padding: 10,
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../assets/chatPicto/send_picto.png")}
          />
        </View>
      </Send>
    );
  }

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={screenContainer}>
      <Modal //Pop up de fin du test
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Subtitle
              style={{ marginBottom: 10 }}
              text={
                <Text style={{ textAlign: "justify" }}>
                  Vous allez être redirigé vers notre système de paiement
                  sécurisé.{"\n"}
                  {"\n"}Vous bénéficiez de la protection de PiXL, l'argent est
                  sécurisé par nos soins avant d'être débloqué lorsque vous
                  confirmez la bonne réception et la conformité de votre nouveau
                  téléphone.
                </Text>
              }
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <GreyButton
                onPress={() => setModalVisible(false)}
                title="Retour"
                style={{
                  width: 100,
                  height: 50,
                  borderRadius: 10,
                  marginTop: 30,
                }}
              />
              <MainButton
                onPress={() => {
                  props.navigation.navigate("Paiement");
                  setModalVisible(false);
                }}
                title={"Compris"}
                style={{
                  width: 100,
                  height: 50,
                  borderRadius: 10,
                  marginTop: 30,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <GiftedChat
        alignTop={true}
        messages={messages.messages}
        onSend={(msg) => onSend(msg)}
        user={{
          _id: context.uuid,
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        alwaysShowSend
        placeholder="Envoyer un message"
      />
      <View
        style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
      >
        <MainButton
          style={{
            height: 50,
            width: 200,
          }}
          title={"Payer" + " €"}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1 },
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
    fontFamily: "InriaSans",
    color: "#071442",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 350,
    height: 400,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.secondary,
  },
});

export default messageScreen;
