import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import IconTrashed from "../../assets/icon-trashed.png";
import IconChecked from "../../assets/checked.png";

import { styles } from "./styles";

interface TaskProps {
  name: string;
  onRemove: () => void;
  onChecked: () => void;
  resolve: boolean;
}

export function Task({ name, onRemove, resolve, onChecked }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} onPress={onChecked}>
        <View style={[styles.circle, resolve && styles.circleChcked]}>
          {resolve && <Image source={IconChecked} />}
        </View>
        <Text style={[styles.labelCheckBox, resolve && styles.labelChecked]}>
          {name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={IconTrashed} />
      </TouchableOpacity>
    </View>
  );
}
