import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  format,
  isSameDay,
  subDays,
} from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';

const screenWidth = Dimensions.get('window').width;

const dates = eachWeekOfInterval(
  {
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
  },
  { weekStartsOn: 1 },
).reduce((acc: Date[][], cur) => {
  const allDays = eachDayOfInterval({
    start: cur,
    end: addDays(cur, 6),
  });
  acc.push(allDays);
  return acc;
}, []);

export default function DateSlider() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.wrapper}>
      <PagerView
        style={styles.container}
        initialPage={1}
        overdrag={true}
        scrollEnabled={true}
      >
        {dates.map((week, i) => (
          <View key={i} style={styles.page}>
            <View style={styles.row}>
              {week.map((day, j) => {
                const isSelected = isSameDay(day, selectedDate);
                const isToday = isSameDay(day, new Date());

                return (
                  <TouchableOpacity
                    key={j}
                    onPress={() => onSelectDate(day)}
                    style={[
                      styles.dayContainer,
                      isSelected ? styles.selectedDay : styles.unselectedDay,
                    ]}
                  >
                    <Text
                      style={[
                        styles.dayText,
                        isSelected
                          ? styles.selectedText
                          : styles.unselectedText,
                      ]}
                    >
                      {format(day, 'EEE')}
                    </Text>
                    <Text
                      style={[
                        styles.dateText,
                        isSelected
                          ? styles.selectedText
                          : styles.unselectedText,
                      ]}
                    >
                      {day.getDate()}
                    </Text>
                    {isToday && !isSelected && (
                      <Text style={styles.todayBadge}>●</Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </PagerView>

      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
          onChange={(_, date) => {
            if (date) setSelectedDate(date);
            setShowPicker(false);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth - 32,
    height: 67,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8, // spacing between dates (requires RN 0.71+)
    paddingHorizontal: 8,
  },
  dayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
    minWidth: 50,
    marginHorizontal: 4, // spacing between days
  },
  selectedDay: {
    backgroundColor: '#2C3399',
  },
  unselectedDay: {
    backgroundColor: '#E9E9E9',
  },
  dayText: {
    fontSize: 11,
    fontFamily: 'OpenSans-Regular',
  },
  dateText: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  unselectedText: {
    color: '#636363',
  },
  todayBadge: {
    fontSize: 10,
    color: '#2C3399',
    marginTop: 2,
  },
});
