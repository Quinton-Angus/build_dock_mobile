import { StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const FIGMA_ASSET_BASE =
  "https://www.figma.com/api/mcp/asset/f73e7d80-f258-4ae4-88a5-d1a511d0ca3e";

export default function DockConnectionScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.headerTitle}>Connect dock</Text>
        </View>

        <View style={styles.hero}>
          <Image
            source={{ uri: `${FIGMA_ASSET_BASE}/f2c34.svg` }}
            style={styles.dockMark}
            resizeMode="contain"
          />

          <Text style={styles.title}>Welcome to Build Dock</Text>
          <Text style={styles.subtitle}>Connect to your Dock to continue.</Text>

          <View style={styles.field}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="url"
              accessibilityLabel="Dock URL"
            />
            <View style={styles.labelBackground}>
              <Text style={styles.fieldLabel}>Dock Url</Text>
            </View>
          </View>

          <Text style={styles.helpText}>
            <Text style={styles.helpRegular}>Don’t have a Dock yet? </Text>
            <Text>Learn more!</Text>
          </Text>
        </View>

        <Text style={styles.footer}>Build Dock © Quinton Dev 2026</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#02101c",
  },
  content: {
    flex: 1,
    position: "relative",
    backgroundColor: "#02101c",
    borderRadius: 25,
    overflow: "hidden",
  },
  header: {
    position: "absolute",
    top: 25,
    left: 25,
    height: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    width: 13,
    marginRight: 10,
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 12,
    fontWeight: "300",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 8,
    lineHeight: 10,
    fontWeight: "400",
  },
  hero: {
    position: "absolute",
    top: 125,
    left: 49,
    right: 49,
    alignItems: "center",
  },
  dockMark: {
    width: 40,
    height: 45,
    marginBottom: 25,
  },
  title: {
    color: "#ffffff",
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  subtitle: {
    color: "#0d68be",
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 8,
  },
  field: {
    width: "100%",
    height: 30,
    marginTop: 80,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    position: "relative",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 0,
    color: "#ffffff",
    fontSize: 10,
  },
  labelBackground: {
    position: "absolute",
    top: -6,
    alignSelf: "center",
    paddingHorizontal: 5,
    backgroundColor: "#02101c",
  },
  fieldLabel: {
    color: "#ffffff",
    fontSize: 8,
    lineHeight: 10,
    fontWeight: "500",
  },
  helpText: {
    marginTop: 45,
    color: "#cccccc",
    fontSize: 8,
    lineHeight: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  helpRegular: {
    fontWeight: "400",
  },
  footer: {
    position: "absolute",
    bottom: 42,
    left: 0,
    right: 0,
    color: "#cccccc",
    fontSize: 8,
    lineHeight: 10,
    fontWeight: "300",
    textAlign: "center",
  },
});
