import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

const Calendario = () => {

    const currentDate = moment().format("YYYY-MM-DD");
    const [selected, setSelectedDate] = useState('');

    const handleDayPress = (date) => {
      console.log(date); // Primeira funcionalidade
      setSelectedDate(date.dateString); // Segunda funcionalidade
    };

  return (
        <Calendar style={styles.calendar} 
        onDayPress={handleDayPress}
        initialDate={currentDate}
        hideArrows="true"
        disableArrowLeft="true"
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true}
        }}
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
