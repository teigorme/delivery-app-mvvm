import { View, Text } from 'react-native'
import { FC } from 'react'
import { useHomeModel } from '@/ViewModels/Home/home.model'

const HomeView: FC<ReturnType<typeof useHomeModel>> = ({ data }) => {
    return (
        <View>
            <Text>HomeView</Text>
        </View>
    )
}

export default HomeView