import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import QuoteCard from '../components/QuoteCard';
import TaskItem from '../components/TaskItem';
import BottomDrawer from '../components/BottomDrawe';
import Icon from 'react-native-vector-icons/Ionicons';
import DateSlider from '../components/DateSlider';

const { width } = Dimensions.get('window');
const DATE_BUTTON_WIDTH = 60;

const dates = ['15', '16', '17', '18', '19', '20', '21'];

const tasks = [
  {
    title: 'Schedule a meeting with Harshit Sir',
    time: '09:00 AM',
    type: 'Habit',
    tags: ['Must'],
    status: 'done',
    icon: 'people-outline',
  },
  {
    title: '2.5 Hours Simran and Meditation',
    time: '09:00 AM',
    type: 'Habit',
    tags: ['Must'],
    status: 'pending',
    icon: 'heart-outline',
  },
  {
    title: 'Save 200 Rupees Daily',
    time: '12:00 PM',
    type: 'Habit',
    tags: ['Must'],
    status: 'inprogress',
    icon: 'wallet-outline',
  },
  {
    title: 'Walk 10k Step Daily',
    time: '07:00 AM',
    type: 'Habit',
    tags: ['Important'],
    status: 'pending',
    icon: 'walk-outline',
  },
  {
    title: 'Buy Sunflower for Mumma',
    time: '11:00 AM',
    type: 'Task',
    tags: ['Important'],
    status: 'pending',
    icon: 'walk-outline',
  },
  {
    title: 'Make Mandala and Colour Daily',
    time: '7:30 PM',
    type: 'Task',
    tags: ['Important'],
    status: 'pending',
    icon: 'walk-outline',
  },
];

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState('18');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  React.useEffect(() => {
    const selectedIndex = dates.indexOf(selectedDate);
    if (selectedIndex >= 0 && scrollViewRef.current) {
      const x =
        selectedIndex * DATE_BUTTON_WIDTH - width / 2 + DATE_BUTTON_WIDTH / 2;
      scrollViewRef.current.scrollTo({ x, animated: true });
    }
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      {/* Logo + Icons */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>WingsFly</Text>
        </View>
        <View style={styles.headerIcons}>
          <Icon name="search-outline" size={18} color="#555" />
          <Icon name="calendar-outline" size={18} color="#555" />
          <Icon name="help-circle-outline" size={18} color="#555" />
        </View>
      </View>

      {/* Date Picker */}
      <View style={styles.datePickerContainer}>
        <DateSlider />
      </View>

      {/* Quote */}
      <View style={styles.quoteContainer}>
        <QuoteCard />
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <TaskItem task={item} index={index} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.taskList}
      />
      {/* FAB */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setDrawerVisible(true)}
      >
        <Icon name="add" size={32} color="#fff" />
      </TouchableOpacity>

      <BottomDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    paddingHorizontal: 16,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  logoText: {
    fontSize: 22,
    fontWeight:"bold",
    fontFamily: 'Anton-Regular',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  datePickerContainer: {
    height: 67,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 12,
  },
  quoteContainer: {
    minHeight: 110,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 5,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  taskList: {
    paddingBottom: 140,
    paddingTop: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 65,
    right: 20,
    backgroundColor: '#151B73',
    width: 53,
    height: 53,
    borderRadius: 12, // Rounded square
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default HomeScreen;
