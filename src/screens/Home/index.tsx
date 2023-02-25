import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

import IconAdd from "../../assets/icon-add.png";
import { CountTasks } from "../../components/CountTasks";
import { Task } from "../../components/Task";
import { EmptyList } from "../../components/EmptyList";

interface TaskProps {
  id: number;
  name: string;
  resolve: boolean;
}

export default function Home() {
  const [taskName, setTaskName] = useState("");

  const [isFocus, setIsFocus] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleAddTask = () => {
    if (taskName !== "") {
      if (tasks.some((task) => task.name === taskName)) {
        return Alert.alert(
          "Tarefa existente",
          "Já existe uma tarefa \ncom este nome"
        );
      }

      setTasks((prevState) => [
        ...prevState,
        { id: tasks.length + 1, name: taskName, resolve: false },
      ]);
      setTaskName("");
    } else {
      return Alert.alert(
        "Campo obrigatório",
        "Preencha uma tarefa, por favor!"
      );
    }
  };

  const handleRemoveTask = (id: number) => {
    Alert.alert("Remover", `Deseja remover esta tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((task) => task.id !== id));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerTasks}>
        <View style={styles.form}>
          <TextInput
            style={[
              styles.inputTask,
              { borderColor: isFocus ? "#5E60CE" : "#262626" },
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskName}
            value={taskName}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={IconAdd} />
          </TouchableOpacity>
        </View>
        <CountTasks
          countCreate={tasks.length}
          countComplete={tasks.filter((task) => task.resolve === true).length}
        />

        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Task
              name={item.name}
              onRemove={() => handleRemoveTask(item.id)}
              onChecked={() => {
                if (tasks[tasks.indexOf(item, 0)].resolve) {
                  tasks[tasks.indexOf(item, 0)].resolve = false;
                } else {
                  tasks[tasks.indexOf(item, 0)].resolve = true;
                }
                setTasks([...tasks]);
              }}
              resolve={item.resolve}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}
