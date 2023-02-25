import { Text, View } from "react-native";
import { styles } from "../screens/Home/styles";

interface CountTasksProps {
  countCreate: number;
  countComplete: number;
}

export function CountTasks({ countCreate, countComplete }: CountTasksProps) {
  return (
    <View style={styles.countTaks}>
      <View style={styles.count}>
        <Text style={styles.createText}>Criadas</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{countCreate}</Text>
        </View>
      </View>
      <View style={styles.count}>
        <Text style={styles.createComplete}>Concluídas</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{countComplete}</Text>
        </View>
      </View>
    </View>
  );
}
