import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SinginBox } from "../../components/SinginBox";
import { SendMessageForm } from "../../components/SendMessageForm";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      <SendMessageForm />
    </View>
  );
}
