import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const taskImages = [
  require('../assets/first.png'),
  require('../assets/sec.png'),
  require('../assets/third.png'),
  require('../assets/fourth.png'),
  require('../assets/fifth.png'),
  require('../assets/sixth.png'),
];

const pastelColors = [
  '#D6E4FF',
  '#EAD9FF',
  '#FFF5CC',
  '#D4FFDF',
  '#FFE0CC',
  '#E0F7FA',
  '#FFDDE0',
];
function darkenColor(hex: string, amount: number = 20): string {
  let color = hex.replace('#', '');
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }

  const num = parseInt(color, 16);

  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0x00ff) - amount);
  const b = Math.max(0, (num & 0x0000ff) - amount);

  return `rgb(${r}, ${g}, ${b})`;
}
// Optional: create a mapping function if you want consistent colors per task
const getRandomColor = () =>
  pastelColors[Math.floor(Math.random() * pastelColors.length)];

const TaskItem = ({ task, index }: any) => {
  const statusIcon =
    task.status === 'done'
      ? 'checkmark-circle'
      : task.status === 'inprogress'
      ? 'time'
      : 'ellipse-outline';

  const pastel = getRandomColor();
  const textColor = darkenColor(pastel, 100);
  const taskImage = taskImages[index];

  return (
    <View style={styles.container}>
      <Image source={taskImage} style={styles.taskImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.meta}>
          <Text
            style={[
              styles.time,
              {
                backgroundColor: pastel,
                color: textColor, // or use pastel itself if contrast is fine
                fontWeight: 'bold',
              },
            ]}
          >
            {task.time}
          </Text>
          <Text style={styles.tag}>{task.type}</Text>
          {task.tags.map((t: string, i: number) => (
            <Text key={i} style={styles.tag}>
              {t}
            </Text>
          ))}
        </View>
      </View>
      <Icon name={statusIcon} size={24} color="#BFE3D2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 4,
  },
  time: {
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tag: {
    fontSize: 10,
    color: '#555',
    backgroundColor: '#eee',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  taskImage: {
    width: 53,
    height: 53,
    marginRight: 8,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default TaskItem;
