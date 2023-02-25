import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  containerTasks: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
  },
  form: {
    flexDirection: "row",
    marginBottom: 32,
    marginTop: -27,
  },
  inputTask: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    height: 54,
    padding: 16,
    color: "#F2F2F2",
    fontSize: 16,
    marginRight: 4,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  countTaks: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  count: {
    flexDirection: "row",
  },
  createText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "700",
    marginRight: 8,
  },
  createComplete: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "700",
    marginRight: 8,
  },
  numberContainer: {
    backgroundColor: "#333333",
    borderRadius: 999,
    width: 25,
    height: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "700",
  },
});
