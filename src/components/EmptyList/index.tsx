import { View, Text, Image } from "react-native";

import IconEmpty from "../../assets/icon-empty.png";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={IconEmpty} />
      <View>
        <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={[styles.featuredText]}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
