import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const items = [
  {
    title: 'Habit',
    description:
      'Activity that repeats over time it has detailed tracking and statistics.',
    icon: <MaterialCommunityIcons name="brain" size={24} color="#151F73" />,
  },
  {
    title: 'Recurring Task',
    description:
      'Activity that repeats over time it has detailed tracking and statistics.',
    icon: <Feather name="repeat" size={22} color="#151F73" />,
  },
  {
    title: 'Task',
    description: 'Single instance activity without tracking over time.',
    icon: <Feather name="check-circle" size={22} color="#151F73" />,
  },
  {
    title: 'Goal of the Day',
    description:
      'A specific target set for oneself to achieve within a single day.',
    icon: <Feather name="target" size={22} color="#151F73" />,
  },
];

const BottomDrawer = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.drawer}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              activeOpacity={0.8}
              onPress={() => {
                // Add onItemSelect handler here if needed
                onClose();
              }}
            >
              <View style={styles.iconContainer}>{item.icon}</View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.description}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#151F73" />
            </TouchableOpacity>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  drawer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111',
  },
  subtitle: {
    fontSize: 10,
    color: '#666',
    marginTop: 2,
  },
});

export default BottomDrawer;
