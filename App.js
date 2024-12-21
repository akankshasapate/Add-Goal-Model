// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GoalItem from './component/GoalItem'
import GoalInput from './component/GoalInput';
import {StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  let [courceGoal, setCourceGoal] = useState([]);
  let [modalIsVisible, setModalIsVisible]=useState(false)

  function addGoalInputText(enterGoalText ) {
    setCourceGoal(currentCourceGoal => [
      ...currentCourceGoal,
      {text : enterGoalText , id : Math.random().toString()},
    ]);
  };

  function startAddGoalHandler(){
    setModalIsVisible(true)
  } ;

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id){
    setCourceGoal(currentCourceGoal => {
      return currentCourceGoal.filter((goal)=>goal.id !== id);
    });
    endAddGoalHandler();
  }

  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.container}>

      <Button title='Add goal Model' color={"#5e0acc"}
      onPress={startAddGoalHandler}/>
      
{/* {modalIsVisible && <GoalInput onAddGoal={addGoalInputText}/>} */}
<GoalInput visible={modalIsVisible} onAddGoal={addGoalInputText}
onCancel={endAddGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
        data={courceGoal}
        renderItem={(itemGoal)=>{
          return (
            <GoalItem text={itemGoal.item.text} 
          id={itemGoal.item.id} 
          onDeleteItem={deleteGoalHandler} />
          );
        }}
        // renderItem={(itemData)=>{
        //   return (
        //     <GoalItem Text={itemData.item.text}/>
        //   )
        // }}
        keyExtractor={(item,index)=>{
          return item.id;
        }}
         alwaysBounceHorizontal={true}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor:'#1e085a'
  },
  goalContainer: {
    flex: 5
  }
});
