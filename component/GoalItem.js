import { StyleSheet,Text,View ,Pressable} from "react-native";
function goalItem(props){

    return (
      <View style={styles.goalItem}>
        <Pressable android_ripple={{color:'pink'}} 
        onPress={props.onDeleteItem.bind(this,props.id)}
        style={({pressed})=>pressed && styles.pressItem}
        >
        <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
      )
}

export default goalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
      },
      pressItem:{
        opacity:0.8,
      },
      goalText:{
        color:'white',
        padding:8,
      }
})