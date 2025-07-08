import { SectionList, Text, View } from 'react-native';
import { FC } from 'react';
import { useHomeModel } from '@/ViewModels/Home/home.model';

const HomeView: FC<ReturnType<typeof useHomeModel>> = ({ products }) => {
  return (
    <SectionList
      sections={products}
      data={products}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
    />
  );
};

export default HomeView;
