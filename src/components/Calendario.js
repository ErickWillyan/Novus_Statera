import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

const Calendario = () => {

    const currentDate = moment().format("YYYY-MM-DD");

  return (
        <Calendar style={styles.calendar} 
        onDayPress={date => console.log(date)}
        initialDate={currentDate}
        hideArrows="true"
        disableArrowLeft="true"
        />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderRadius:10 ,
     elevation: 4,
      margin:80
  },
});

export default Calendario;
