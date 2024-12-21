import { useState } from "react";
import { View, TextInput,Button , StyleSheet,Modal,Image} from "react-native";

function GoalInput(props){
  let [enterGoalText, setEnterGoalText] = useState('');

  function goalInputText(enterText) {
    setEnterGoalText(enterText)
  }

  function addGoalHandler(){
    props.onAddGoal(enterGoalText);
    setEnterGoalText(' ')
  }
   return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.Images} source={require("../assets/Iamges/goal.png")}/>
        <TextInput style={styles.TextInput}
          placeholder='Add the Goal List!!!'
          onChangeText={goalInputText}
          value={enterGoalText} />
       <View style={styles.buttonContainer}>
       <View style={styles.button}>
       <Button title='Add Goal'
          onPress={addGoalHandler} 
          color="#b180f0"/>
       </View>
          <View style={styles.button}>
          <Button title="Cancel" onPress={props.onCancel}
          color={"#f31283"}/>
          </View>
       </View>
      </View>
    </Modal>
   );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // borderBottomColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,
    backgroundColor:'#311b6b'
  },
  Images:{
      width:100,
      height:100,
      margin:20
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:"#e4d0ff",
    color:'#120438',
    width: '100%',
    padding: 16,
    borderRadius:6,
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:15,
  },
  button:{
    marginHorizontal:8,
    width:"27%",
  },
});
