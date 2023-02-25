import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkbox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  circle: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 34 / 2,
    marginRight: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  circleChcked: {
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
  },
  labelCheckBox: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 22,
  },
  labelChecked: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
