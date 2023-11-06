import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { ProjectCard } from "../../components/organism";
import { ButtonMain } from "../../components/atomics";

export default function Home({ navigation }) {
  const data = [
    {
      id: 1,
      text: "UI/UX Design",
      desc: "Mitask - Dashboard",
      img: require("../../assets/images/porto1.png"),
    },
    {
      id: 2,
      text: "UI/UX Design",
      desc: "Splice - NFT Marketplace",
      img: require("../../assets/images/porto2.png"),
    },
    {
      id: 3,
      text: "UI/UX Design",
      desc: "Vicut - Smart AI Editor",
      img: require("../../assets/images/porto3.png"),
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require("..//..//assets/images/hans.png")}
        />
        <Text style={styles.heading1}>Hans Christian Hananto</Text>
        <Text style={styles.paragraph}>
          {" "}
          Hi, my name is Hans Christian Hananto. I am a Junior UI Designer
          currently pursuing my education at Telkom Purwokerto Vocational High
          School, majoring in Software Engineering. I am passionate about things
          that involve aesthetics and creativity. You can check out my portfolio
          below.
        </Text>
        <ButtonMain title="See More" />
        <Text style={styles.heading2}>My Recents Project</Text>
        {data.map((item) => {
          return (
            <ProjectCard img={item.img} title={item.text} desc={item.desc} />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    paddingTop: 50,
    padding: 30,
  },
  heading1: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 10,
    fontSize: 32,
  },
  heading2: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 26,
    paddingTop: 30,
  },
  subHeading1: {
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 20,
    paddingTop: 10,
  },
  subHeading2: {
    color: "black",
    textAlign: "left",
    fontWeight: "semibold",
    justifyContent: "center",
    fontSize: 16,
  },
  paragraph: {
    color: "black",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
    color: "grey",
    justifyContent: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
  },
  projectImg: {
    width: 300,
    height: 160,
    alignSelf: "center",
    borderRadius: 10,
  },
  icon: {
    alignSelf: "center",
  },
});
